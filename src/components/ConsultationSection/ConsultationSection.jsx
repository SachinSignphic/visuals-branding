
import "./ConsultationSection.css";

const ConsultationSection = () => {

  return (
    <div className="consultation-section">
        <div className="consultation-info">
            <h1 className="ff-almeria-r sec-color">Free <span className="blk-color">Consultation</span>. </h1>
            <p className="ff-gillroy-l sec-color fs-2m">
                Ask any <span className="ff-gillroy-b">doubts</span> and <span className="ff-gillroy-b">clarification</span> our team reach you as soon as possible.
            </p>
        </div>
        <div className="consultation-form-wrapper">
            <form className="consultation-form" action="https://calendly.com/visualsbranding/consult">
                <input type="email" className="ff-gillroy-u sec-color" name="email" id="email" placeholder="Email" />
                <input type="text" className="ff-gillroy-u sec-color" name="message" id="message" placeholder="Message" />
                <button type="submit" className="btn-primary sec-color ff-gillroy-l">SEND</button>
            </form>
        </div>
    </div>
  )
}

export default ConsultationSection