import React from "react";
import Nav from "./components/Nav";
import Clock from "./components/Clock";
import EventHandling from "./components/EventHandling";
import "./index.css";
import ConditionalRendering from "./components/ConditionalRendering";
import ListsAndKeys from "./components/ListsAndKeys";

function App() {
    return (
        <div>
            <Nav theme="dark" />
            <ListsAndKeys />
        </div>
    );
}

export default App;
