import "./TeamCard.css";

// eslint-disable-next-line react/prop-types
const TeamCard = ({imgSrc, name, designation}) => {
  return (
    <div className="team-card">
        <img src={imgSrc} alt="" />
        <div>
            <h3 className="ff-gillroy-m fs-2s sec-color" >{name}</h3>
            <h4 className="ff-gillroy-m fs-s sec-color ">{designation}</h4>
        </div>
    </div>
  )
}

export default TeamCard