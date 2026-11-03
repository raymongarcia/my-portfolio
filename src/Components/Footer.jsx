const Footer = () => (
    <footer className="footer">
        <div className="container footer-inner">
            <a className="brand" href="#Home">
                <span className="brand-mark" aria-hidden="true">RP</span>
                <span>RAYMON GARCIA <span className="brand-accent">/ DEV</span></span>
            </a>
            <span>Built with curiosity. © {new Date().getFullYear()}</span>
            <a href="#Home">Back to top ↑</a>
        </div>
    </footer>
);

export default Footer;