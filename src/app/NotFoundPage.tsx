import SiteHeader from "./SiteHeader";

function NotFoundPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="not-found section-wrap">
        <span className="section-kicker">404</span>
        <h1>This page is outside the system.</h1>
        <p>The page may have moved, or the address may be incomplete.</p>
        <a className="button button--primary" href="/">
          Return home
        </a>
      </main>
    </div>
  );
}

export default NotFoundPage;
