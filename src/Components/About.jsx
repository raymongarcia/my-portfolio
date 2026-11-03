const About = () => {
    return (
        <section id="About" className="section">
            <div className="container">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">01 / The person behind the pixels</p>
                        <h2>Curious by nature.<br /><span>Precise by design.</span></h2>
                    </div>
                    <p className="section-note">A little about how I think, what I value, and the tools I reach for.</p>
                </div>
                <div className="about-grid">
                    <p className="about-copy">
                        I’m a <strong>frontend developer</strong> who cares about the details:
                        the rhythm of a layout, the feel of an interaction, and the quiet
                        reliability of code that just works. I bring design and development
                        together to turn ideas into clear, engaging digital experiences.
                    </p>
                    <div>
                        <div className="about-meta">
                            <div className="meta-row"><span>Focus</span><span>Frontend &amp; UI</span></div>
                            <div className="meta-row"><span>Approach</span><span>Curious / considered / collaborative</span></div>
                            <div className="meta-row"><span>Currently</span><span>Learning, building, refining</span></div>
                        </div>
                        <div className="skills-list" aria-label="Tools and technologies">
                            {["HTML5", "CSS3", "JavaScript", "React", "Responsive UI", "Git"].map((skill) => (
                                <span className="skill-tag" key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;