import React from "react";
import Nav from "./components/Nav";
import Clock from "./components/React-docs-guide/Clock";
import EventHandling from "./components/React-docs-guide/EventHandling";
import "./index.css";
import ConditionalRendering from "./components/React-docs-guide/ConditionalRendering";
import ListsAndKeys from "./components/React-docs-guide/ListsAndKeys";
import ControlledComponents from "./components/React-docs-guide/ControlledComponents";
import Calculator from "./components/React-docs-guide/LiftingStateUp";
import CompositionVsInheritance from "./components/React-docs-guide/CompositionVsInheritance";
import FilterableProductTable from "./components/React-docs-guide/ThinkingInReact";

/**
 * Relevant links:
 * https://roadmap.sh/
 * https://frontendmasters.com/books/front-end-handbook/2019/
 */

function App() {
    return (
        <div>
            <Nav theme="dark" />
            <FilterableProductTable />
        </div>
    );
}

export default App;
