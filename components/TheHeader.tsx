import Link from "next/link";

const TheHeader = () => {
  return (
    <header id="Header">
      <div className="nav_menu">
        <Link className="link" href="/">
          Home
        </Link>
        <Link className="link" href="/blog">
          Blog
        </Link>
        <Link className="link" href="/about">
          About
        </Link>
      </div>
    </header>
  );
};

export { TheHeader };
