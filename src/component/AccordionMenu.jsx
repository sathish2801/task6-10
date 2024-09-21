// src/AccordionMenu.jsx
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const AccordionMenu = () => {
  return (
    <div>
      <h2>Accordion Menu</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Item 1</Accordion.Header>
          <Accordion.Body>
            Content for item 1
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Item 2</Accordion.Header>
          <Accordion.Body>
            Content for item 2
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Item 3</Accordion.Header>
          <Accordion.Body>
            Content for item 3
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordionMenu;
