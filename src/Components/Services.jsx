const Services = () => {
    const services = [
        ["01", "UI engineering", "Responsive, accessible interfaces built with clean, maintainable code."],
        ["02", "Web experiences", "Distinctive landing pages and websites designed around real people."],
        ["03", "Design systems", "Reusable components and consistent patterns that scale with a product."],
        ["04", "Interaction", "Thoughtful motion and details that make interfaces feel alive."],
    ];

    return (
        <section id="Services" className="section services-section">
            <div className="container">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">02 / What I bring</p>
                        <h2>Good ideas,<br /><span>built with intent.</span></h2>
                    </div>
                    <p className="section-note">From the first sketch to the final pixel, I make the web feel considered.</p>
                </div>
                <div className="services-grid">
                    {services.map(([index, title, description]) => (
                        <article className="service-card" key={index}>
                            <span className="service-index">{index} / 04</span>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;