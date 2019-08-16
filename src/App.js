import React from "react";
import Nav from "./components/Nav";
import Clock from "./components/Clock";
import EventHandling from "./components/EventHandling";
import "./index.css";
import ConditionalRendering from "./components/ConditionalRendering";
import ListsAndKeys from "./components/ListsAndKeys";
import ControlledComponents from "./components/ControlledComponents";

function App() {
    return (
        <div>
            <Nav theme="dark" />
            <a href="https://roadmap.sh/">Roadmap Reference</a>
            <ControlledComponents />
        </div>
    );
}

export default App;
