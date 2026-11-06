import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function HeaderArrow() {
  return (
    <svg aria-hidden="true" className="arrow arrow--diagonal" viewBox="0 0 20 20" fill="none">
      <path d="M3 10h13M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    const initialTheme = document.documentElement.dataset.theme;
    if (initialTheme === "light" || initialTheme === "dark") return initialTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem("sutop-theme", theme);
    } catch {
      // The selected theme still applies when storage is unavailable.
    }
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <header className="site-header">
      <a className="wordmark" href="/#top" aria-label="Sutop Mukherjee, home">
        SM<span className="wordmark-dot">.</span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>

      <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Main navigation">
        <a href="/#work" onClick={closeMenu}>
          Work
        </a>
        <a href="/#thinking" onClick={closeMenu}>
          Thinking
        </a>
        <a href="/about" onClick={closeMenu}>
          About
        </a>
        <a href="/#resume" onClick={closeMenu}>
          Resume
        </a>
        <a className="nav-contact" href="/#contact" onClick={closeMenu}>
          Contact <HeaderArrow />
        </a>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          aria-pressed={theme === "dark"}
        >
          <span className={theme === "light" ? "theme-label theme-label--active" : "theme-label"}>
            Light
          </span>
          <span className="theme-track" aria-hidden="true">
            <span className="theme-thumb" />
          </span>
          <span className={theme === "dark" ? "theme-label theme-label--active" : "theme-label"}>
            Dark
          </span>
        </button>
      </nav>
    </header>
  );
}

export default SiteHeader;
