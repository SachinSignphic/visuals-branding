/* eslint-disable react/prop-types */
import "./PortfolioVideo.css";

// eslint-disable-next-line react/prop-types
const PortfolioVideo = ({ videoURL, ytURL }) => {
  return (
    ytURL? (
      <div className="portfolio-video">
        {/* // eslint-disable-next-line react/prop-types */}
        <iframe frameBorder={0} src={`https://www.youtube.com/embed/${ytURL.split("=")[1]}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    ): (
      videoURL? (
      <div className="portfolio-video">
        <video autoPlay muted playsInline disablePictureInPicture controls>
          <source  src={videoURL} type="video/webm" />
        </video>
      </div> ):(<></>)
      )

  )
}

export default PortfolioVideo