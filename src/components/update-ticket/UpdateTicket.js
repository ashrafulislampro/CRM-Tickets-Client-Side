import React from "react";
import { Button, Form } from "react-bootstrap";

const UpdateTicket = () => {
  return (
    <Form>
      <Form.Label className="fw-bold">Reply</Form.Label>
      <br />
      <Form.Text>Please reply your message here or update the ticket</Form.Text>
      <Form.Control as="textarea" name="details" rows="5" />
      <div className="text-end mt-3 mb-3">
        <Button variant="info" style={{ color: "white" }} type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};

export default UpdateTicket;
