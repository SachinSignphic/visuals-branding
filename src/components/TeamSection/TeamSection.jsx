import { ScrollButton, TeamCard } from "../";
import "./TeamSection.css";
import teamData from "../../assets/teamData";

// eslint-disable-next-line react/prop-types
const TeamSection = ({scrollTo, style}) => {
  return (
    <div className="team-section" id="team-section">
        <div className="team-header">
            <h1 className="ff-almeria-r sec-color" style={{fontSize: "5.7rem"}}>Meet my <span className="blk-color">Team</span>.</h1>
            <hr />
            <ScrollButton scrollTo={scrollTo} style={style} />
        </div>
        <div className="team-cards">
            {
                teamData.map(person => {
                    return (   
                        <TeamCard key={crypto.randomUUID()} {...person}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TeamSection