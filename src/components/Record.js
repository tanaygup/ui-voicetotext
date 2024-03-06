import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import "./VoiceRecorder.css"; // Import your CSS file for wave animation
import WaveAnimation from "./Wave";

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handleRecordClick = () => {
    // Logic to start/stop recording
    setIsRecording(!isRecording);
  };

  return (
    <Card className="voice-recorder-card">
      <Card.Body className="d-flex flex-row">
        <Col className="d-flex align-items-center">
        <Button variant="primary" onClick={handleRecordClick}>
          {isRecording ? "Stop Recording" : "Start Recording"}
        </Button>
        </Col>
        <Col>
        <div className="wave-container">
          <div className={`wave ${isRecording ? "active" : ""}`} />
          <div className={`wave ${isRecording ? "active" : ""}`} />
          <div className={`wave ${isRecording ? "active" : ""}`} />
        </div></Col>
      </Card.Body>
    </Card>
  );
};

export default VoiceRecorder;
