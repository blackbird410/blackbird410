import Navbar from "./Navbar";

const links = [
    { title: "Home", href: "/", isSelected: true, },
    { title: "About", href: "/about", isSelected: false, },
    { title: "Contact", href: "/contact", isSelected: false, },
];

export default function Homepage() {
    return (
        <div className="text-gray-600 font-body">
            <Navbar links={links} />
        </div>
    );
};
