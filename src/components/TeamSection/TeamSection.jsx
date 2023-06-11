import { ScrollButton, TeamCard } from "../";
import "./TeamSection.css";
import teamData from "../../assets/teamData";

// eslint-disable-next-line react/prop-types
const TeamSection = ({scrollTo, style}) => {
  return (
    <div className="team-section" id="team-section">
        <div className="team-header">
            <h1 className="ff-almeria-r sec-color">Meet my <span className="blk-color">Team</span>.</h1>
            <hr />
            <ScrollButton scrollTo={scrollTo} style={style} />
        </div>
        <div className="team-cards">
            {
                teamData.map(( person,i )=> {
                    return (   
                        <TeamCard key={i} {...person}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TeamSection