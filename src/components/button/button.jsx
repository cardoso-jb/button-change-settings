import '../button/button.css';
import React from "react";

function Button ({onClick}) {
    return <button onClick={onClick}>Mágica</button>
}

export default Button