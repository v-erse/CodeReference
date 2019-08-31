import React, { Component } from "react";
import { VerticalNav, VNavItem } from "../../components/VerticalNav";
import SplitPage from "../../components/SplitPage";

export class ReactHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLoc: "React"
        };
    }

    render() {
        return (
            <SplitPage
                left={
                    <VerticalNav props={this.state.currentLoc}>
                        <ul>
                            <VNavItem title='React' />
                            <ul>
                                <VNavItem title='Components' />
                                <ul>
                                    <VNavItem title='Functional' />
                                    <VNavItem title='Class Based' />
                                </ul>
                                <VNavItem title='State' />
                                <VNavItem title='Composition' />
                                <VNavItem title='Conditional Rendering' />
                            </ul>
                        </ul>
                    </VerticalNav>
                }
                right={<h1>React</h1>}
            />
        );
    }
}

export default ReactHome;
