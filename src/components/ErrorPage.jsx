import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const links = [
    { title: "Home", href: "/", isSelected: true, },
    { title: "About", href: "/about", isSelected: false, },
    { title: "Contact", href: "/contact", isSelected: false, },
];

export default function ErrorPage() {
    return (
            <div className="">
                <Navbar links={links} />
                <p>Sorry, this page is not available!</p>
                <Link to={"/"}>Go back home</Link>
            </div>
        );
};
