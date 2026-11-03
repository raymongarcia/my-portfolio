import profileImg from "../assets/profile.jpg";

const Banner = () => {
    return (
        <section id="Home" className="hero">
            <img className="hero-photo" src={profileImg} alt="" aria-hidden="true" />
            <div className="hero-shade" aria-hidden="true" />
            <div className="container hero-grid">
                <div className="hero-content">
                    <p className="eyebrow">Raymon Garcia / Frontend developer</p>
                    <h1>Digital<br />things with<br /><span>feeling.</span></h1>
                </div>
                <div className="hero-detail">
                    <p className="hero-copy">
                        I bring ideas to life through thoughtful interfaces, expressive visuals,
                        and web experiences built to work in the real world.
                    </p>
                    <div className="hero-actions">
                        <a className="button" href="#Projects">Explore selected work <span aria-hidden="true">↘</span></a>
                        <a className="button button-secondary" href="#About">About me <span aria-hidden="true">↗</span></a>
                    </div>
                    <div className="hero-index"><span>01 — 03</span><span>Selected projects</span></div>
                </div>
            </div>
            <a className="scroll-cue" href="#Projects"><span aria-hidden="true">↓</span> Scroll to explore</a>
        </section>
    );
};

export default Banner;