import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import Translator from "./Translator";
import "./ChatCard.css";

const ChatCard = ({ message, sender, children }) => {
  return (
    <Card className={sender === "user" ? "user-chat my-3 mx-2 chat-card" : "other-chat my-3 mx-2 chat-card"}>
      <Card.Body>
        <Translator/>
        {message && <p>{message}</p>}
        {children} {/* Render children components */}
      </Card.Body>
    </Card>
  );
};

export default ChatCard;
