import React, { Component } from "react";
import VerticalNav from "../../components/VerticalNav";
import SplitPage from "../../components/SplitPage";

export class ReactHome extends Component {
    render() {
        return (
            <SplitPage
                left={<VerticalNav />}
                right={<p>This is the React page</p>}
            />
        );
    }
}

export default ReactHome;
