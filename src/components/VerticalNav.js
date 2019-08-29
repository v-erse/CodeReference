import React, { Component } from "react";
import { Nav, Accordion, Button, Card } from "react-bootstrap";

export class VerticalNav extends Component {
    render() {
        return (
            <Accordion className='flex-column m-5 float-left'>
                <Nav.Item>
                    <Nav.Link>
                        <Accordion.Toggle
                            as={Button}
                            variant='link'
                            eventKey='0'>
                            Components
                        </Accordion.Toggle>
                    </Nav.Link>
                    <Accordion.Collapse eventKey='0'>
                        <p>I'm the body</p>
                    </Accordion.Collapse>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>State</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Composition</Nav.Link>
                </Nav.Item>
            </Accordion>
        );
    }
}

export default VerticalNav;
