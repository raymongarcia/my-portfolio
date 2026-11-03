const Projects = () => {
    const projects = [
        {
            type: "01 / LEARNING PLATFORM",
            title: "Mandarin Training",
            description: "A guided Mandarin learning experience with bite-sized lessons, practical phrases, and learner progress tracking.",
            image: "/projects/mandarin-training.png",
            liveUrl: "https://mandarin-training.vercel.app",
            repoUrl: "https://github.com/raymongarcia/mandarin-training",
        },
        {
            type: "02 / TEACHER WORKSPACE",
            title: "TeachFlow",
            description: "A productivity workspace for teachers to manage classes, students, assessments, and attendance.",
            image: "/projects/teachflow.png",
            liveUrl: "https://teachflow-gray.vercel.app",
            repoUrl: "https://github.com/raymongarcia/teachflow",
        },
        {
            type: "03 / CELEBRATION SERVICE",
            title: "JK Car Surprise",
            description: "A custom car styling and surprise reveal experience for birthdays, anniversaries, and other special moments.",
            image: "/projects/jkcarsurprise.png",
            liveUrl: "https://jkcarsurprise.vercel.app",
            repoUrl: "https://github.com/raymongarcia/jkcarsurprise",
        },
    ];

    return (
        <section id="Projects" className="section work-section">
            <div className="container">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">03 / Selected work</p>
                        <h2>Things I’ve<br /><span>put into motion.</span></h2>
                    </div>
                    <p className="section-note">A selection of live projects, from learning tools to teacher workflows and celebration experiences.</p>
                </div>
                <div className="work-grid">
                    {projects.map(({ type, title, description, image, liveUrl, repoUrl }, index) => (
                        <article className="work-card" key={title}>
                            <div className="work-art">
                                <img className="work-image" src={image} alt={`${title} website screenshot`} loading="lazy" />
                            </div>
                            <div className="work-copy">
                                <span className="work-type">{String(index + 1).padStart(2, "0")} / {type.split("/ ").slice(1).join("/ ")}</span>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <div className="work-links">
                                    <a href={liveUrl} target="_blank" rel="noreferrer">
                                        Visit project <span aria-hidden="true">↗</span>
                                    </a>
                                    <a href={repoUrl} target="_blank" rel="noreferrer">
                                        GitHub <span aria-hidden="true">↗</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;