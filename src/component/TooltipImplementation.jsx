// src/TooltipImplementation.jsx
import React from 'react';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TooltipImplementation = () => {
  const renderTooltip = (props) => (
    <Tooltip id="tooltip" {...props}>
      Explore Now!
    </Tooltip>
  );

  // Inline styles for centering the button
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh', // Full viewport height for vertical centering
  };

  return (
    <div style={containerStyle}>
      <OverlayTrigger placement="right" overlay={renderTooltip}>
        <Button variant="success">Probe</Button>
      </OverlayTrigger>
    </div>
  );
};

export default TooltipImplementation;
