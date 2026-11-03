import { useState } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        ["About", "About"],
        ["Services", "Services"],
        ["Work", "Projects"],
        ["Contact", "Contact"],
    ];

    return (
        <header className="site-header">
            <nav className="container nav-wrap" aria-label="Main navigation">
                <a className="brand" href="#Home" onClick={() => setIsOpen(false)}>
                    <span className="brand-mark" aria-hidden="true">RP</span>
                    <span>RAYMON GARCIA <span className="brand-accent">/ DEV</span></span>
                </a>
                <button
                    className="menu-toggle"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setIsOpen((open) => !open)}
                >
                    {isOpen ? "Close" : "Menu"}
                </button>
                <ul id="primary-navigation" className={`nav-links${isOpen ? " is-open" : ""}`}>
                    {links.map(([label, target]) => (
                        <li key={target}>
                            <a
                                className={target === "Contact" ? "nav-cta" : ""}
                                href={`#${target}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;