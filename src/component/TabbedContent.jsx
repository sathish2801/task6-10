// src/TabbedContent.jsx
import React, { useState } from 'react';
import './TabbedContent.css';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS for styling
import  FormValidation from './FormValidation'

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div>
      <h2>Explore Us</h2>
      <div className="tab-menu">
        <p
          className={`tab-item ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => setActiveTab('tab1')}
        >
          About Us
        </p>
        <p
          className={`tab-item ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => setActiveTab('tab2')}
        >
          Item list
        </p>
        <p
          className={`tab-item ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => setActiveTab('tab3')}
        >
          Contact Us
        </p>
      </div>
      <div className="tab-content">
      {activeTab === 'tab1' && (
          <div className="text">
            <img
              src="https://workspacesolutions.com/blog/wp-content/uploads/2018/12/office-environments.jpeg"
              alt="About Us"
              className="content-image"
            />
            <div className='content'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat illo vitae ut asperiores iste cupiditate praesentium obcaecati, beatae numquam adipisci ullam repellat placeat non blanditiis ad dolorum nobis quidem!</p>
          </div>
          </div>
        )}
        {activeTab === 'tab2' && <div><Accordion>
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
        <Accordion.Item eventKey="3">
          <Accordion.Header>Item 4</Accordion.Header>
          <Accordion.Body>
            Content for item 4
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>}
        {activeTab === 'tab3' && <div><FormValidation/></div>}
      </div>
    </div>
  );
};

export default TabbedContent;
