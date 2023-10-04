"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <div className="nav_menu">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            className={isActive ? "link active" : "link"}
            key={link.label}
            href={link.href}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export { Navigation };
