import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-section">
        <div className="about-header">
            <h1 className="ff-almeria-r sec-color">About</h1>
            <hr />
        </div>
        <div className="about-content ff-gillroy-l sec-color">
        <span className="ff-gillroy-b blk-color"> Visuals Branding </span>
        Known internally as the Studio team, our specialty was bespoke
        design for the <span className="ff-gillroy-b blk-color">world’s biggest creators </span>
        and gaming brands. What began as a few
        one-off projects for streamers evolved into a separate business unit in need of its own,
        unique identity.
        <br />
        <br />

        In <span className="ff-gillroy-b blk-color">2018 </span>
        the vision for a new brand began. It would be an agency focused exclusively on
        custom design for VIP influencers and brands. The name, <span className="ff-gillroy-b blk-color">Visuals Branding </span>
        , harkens to fresh beginnings and innovation. Staffed with the same award-nominated creatives,
        our team has more talent and resources than ever. The mission remains the same: to
        connect fans and creators like never before.
        <br />
        <br />
        <h3 className="ff-almeria-r blk-color" style={{width: "100%", textAlign: "center"}}>	&ldquo; A creative edge for the gaming industry. &rdquo;</h3>
        </div>
    </div>
  )
}

export default AboutSection