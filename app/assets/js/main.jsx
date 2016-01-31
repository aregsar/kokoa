import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app"


const documentReady = () => {    
    ReactDOM.render(<App />,document.getElementById('app'));
};


$(documentReady);