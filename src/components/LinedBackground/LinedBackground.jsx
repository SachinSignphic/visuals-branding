import "./LinedBackground.css";

// eslint-disable-next-line react/prop-types
const LinedBackground = ({ children, style }) => {
    return (
        <div className="lined-background" style={style}>
            <div className="line-wrapper" >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            { children }
        </div>
    )
}

export default LinedBackground;