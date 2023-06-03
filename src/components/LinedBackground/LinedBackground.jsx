import "./LinedBackground.css";

// eslint-disable-next-line react/prop-types
const LinedBackground = ({ children }) => {
    return (
        <div className="lined-background">
            { children }
        </div>
    )
}

export default LinedBackground;