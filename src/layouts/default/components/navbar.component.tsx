import { Typography } from "antd";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className="container">
            <Typography.Title>X</Typography.Title>
            <div className="nav-links">
                <Link href={"/"} className="active">
                    Home
                </Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/works"}>Works</Link>
            </div>
            <div className="lets-talk"></div>
        </nav>
    );
};

export default Navbar;
