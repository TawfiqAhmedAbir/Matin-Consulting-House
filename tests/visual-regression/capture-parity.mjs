import playwright from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const { chromium } = playwright;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const routes = [
  { slug: "home", path: "/", legacyPath: "/" },
  { slug: "about", path: "/about", legacyPath: "/about" },
  { slug: "portfolio", path: "/portfolio", legacyPath: "/projects" },
  { slug: "contact", path: "/contact", legacyPath: "/contact" },
];

const legacyBase = process.env.LEGACY_BASE_URL || "http://127.0.0.1:4310";
const webBase = process.env.WEB_BASE_URL || "http://127.0.0.1:3000";
const viewport = { width: 1440, height: 1100 };

async function captureSet(baseUrl, targetDir, mode) {
  await mkdir(targetDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport });

  for (const route of routes) {
    const targetPath = mode === "legacy" ? route.legacyPath : route.path;
    const targetUrl = `${baseUrl}${targetPath}`;
    await page.goto(targetUrl, { waitUntil: "networkidle" });
    await page.waitForTimeout(1200);
    await page.screenshot({
      path: path.join(targetDir, `${route.slug}.png`),
      fullPage: true,
    });
  }

  await browser.close();
}

const legacyDir = path.join(__dirname, "../reference-screenshots/legacy");
const webDir = path.join(__dirname, "current");

await captureSet(legacyBase, legacyDir, "legacy");
await captureSet(webBase, webDir, "web");

console.log(`Captured parity screenshots from ${legacyBase} and ${webBase}`);
