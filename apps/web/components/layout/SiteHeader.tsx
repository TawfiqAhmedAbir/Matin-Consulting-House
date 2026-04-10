import { SiteNav } from "@/components/layout/SiteNav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <SiteNav />
      </div>
    </header>
  );
}
