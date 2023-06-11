import { ScrollButton, TeamCard } from "../";
import "./TeamSection.css";
import teamData from "../../assets/teamData";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// eslint-disable-next-line react/prop-types
const TeamSection = ({scrollTo, style}) => {
  useEffect(( ) => {
        AOS.init();
    }, []);  
  return (
    <div className="team-section" id="team-section">
        <div className="team-header">
            <h1 className="ff-almeria-r sec-color" data-aos="fade-up" data-aos-duration="1000">Meet my <span className="blk-color">Team</span>.</h1>
            <hr data-aos="fade-up" data-aos-duration="1000"/>
            <ScrollButton scrollTo={scrollTo} style={style} />
        </div>
        <div className="team-cards">
            {
                teamData.map(( person, i )=> {
                    return (   
                        <TeamCard key={i} {...person} dataAos="fade-up" dataAosDelay={(i+1)*200}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TeamSection