from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse
import mimetypes
import os

ROOT = Path(__file__).resolve().parent.parent / "legacy" / "current-site" / "maheenmatin.com"
PORT = int(os.environ.get("LEGACY_PORT", "4310"))


class SpaHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        clean_path = unquote(parsed.path.lstrip("/"))
        target = ROOT / clean_path if clean_path else ROOT / "index.html"

        if not target.exists() or target.is_dir():
            target = ROOT / "index.html"

        if not target.exists():
            self.send_error(404, "File not found")
            return

        content_type, _ = mimetypes.guess_type(str(target))
        self.send_response(200)
        self.send_header("Content-Type", content_type or "application/octet-stream")
        self.send_header("Content-Length", str(target.stat().st_size))
        self.end_headers()
        self.wfile.write(target.read_bytes())


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), SpaHandler)
    print(f"Serving {ROOT} at http://127.0.0.1:{PORT}", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
