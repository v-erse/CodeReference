import React from "react";
import Nav from "./components/Nav";
import Clock from "./components/Clock";
import "./index.css";

function App() {
    return (
        <div>
            <Nav theme="dark" />
            <Clock />
        </div>
    );
}

export default App;
