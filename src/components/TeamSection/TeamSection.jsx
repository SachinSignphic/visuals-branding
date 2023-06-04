import { ScrollButton, TeamCard } from "../";
import "./TeamSection.css";
import teamData from "../../assets/teamData";

const TeamSection = () => {
  return (
    <div className="team-section">
        <div className="team-header">
            <h1 className="ff-almeria-r fs-3l sec-color">Meet my <span className="blk-color">Team</span>.</h1>
            <hr />
            <ScrollButton />
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