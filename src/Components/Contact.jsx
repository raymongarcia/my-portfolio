const Contact = () => {
    return (
        <section id="Contact" className="contact-section">
            <div className="container">
                <div className="contact-panel">
                    <div>
                        <p className="eyebrow">04 / Your move</p>
                        <h2>Have a good one?<br /><span>Let’s make it real.</span></h2>
                        <p>
                            Got an idea, a challenge, or a digital experience that needs a fresh
                            perspective? I’m always up for talking through what’s next.
                        </p>
                    </div>
                    <div className="contact-actions">
                        <a className="button" href="mailto:">Start a conversation <span aria-hidden="true">↗</span></a>
                        <span className="contact-hint">Add your email address to the contact link when you’re ready to share it.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;