import React from "react";
import Nav from "./components/Nav";
import Clock from "./components/Clock";
import EventHandling from "./components/EventHandling";
import "./index.css";
import ConditionalRendering from "./components/ConditionalRendering";
import ListsAndKeys from "./components/ListsAndKeys";
import ControlledComponents from "./components/ControlledComponents";
import Calculator from "./components/LiftingStateUp";
import CompositionVsInheritance from "./components/CompositionVsInheritance";

/**
 * Relevant links:
 * https://roadmap.sh/
 * https://frontendmasters.com/books/front-end-handbook/2019/
 */

function App() {
    return (
        <div>
            <Nav theme="dark" />
            <CompositionVsInheritance />
        </div>
    );
}

export default App;
