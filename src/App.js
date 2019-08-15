import React from "react";
import Nav from "./components/Nav";
import Clock from "./components/Clock";
import EventHandling from "./components/EventHandling";
import "./index.css";

function App() {
    return (
        <div>
            <Nav theme="dark" />
            <EventHandling />
        </div>
    );
}

export default App;
