import { Typography } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "./links";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="container">
      <Typography.Title>X</Typography.Title>
      <div className="nav-links">
        {navLinks.map(({ href, label }) => (
          <Link
            href={href}
            key={href}
            className={pathname === href ? "active" : ""}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="lets-talk"></div>
    </nav>
  );
};

export default Navbar;
