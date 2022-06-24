import PropTypes from "prop-types";
import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./AddTicketForm.css";

const AddTicketForm = ({
  handleOnSubmit,
  formDtError,
  handleOnChange,
  formDt,
}) => {
  return (
    <Card body className="add-ticket shadow-lg border-0">
      <h1 className="text-center text-info">Add New Ticket</h1>
      <hr />
      <Form
        className="p-3 d-grid gap-2"
        autoComplete="off"
        onSubmit={handleOnSubmit}
      >
        <Form.Group as={Row}>
          <Form.Label column sm={3} md={3} lg={3}>
            Subject
          </Form.Label>
          <Col sm={9} md={9} lg={9}>
            <Form.Control
              type="text"
              name="subject"
              // minLength={3}
              maxLength={100}
              value={formDt?.subject}
              onChange={handleOnChange}
              placeholder="typing subject"
              required
            />
            <Form.Text className="text-danger">
              {formDtError.subject && "Subject is required"}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group className="my-2" as={Row}>
          <Form.Label column sm={3} md={3} lg={3}>
            Issue Found
          </Form.Label>
          <Col sm={9} md={9} lg={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={formDt?.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3} md={12} lg={12}>
            Details
          </Form.Label>
          <Col sm={9} md={12} lg={12}>
            <Form.Control
              as="textarea"
              name="detail"
              rows="5"
              value={formDt?.detail}
              onChange={handleOnChange}
              placeholder="typing details"
              required
            />
          </Col>
        </Form.Group>
        <div className="d-grid col-12 mt-3 mx-auto">
          <Button type="submit" variant="info" style={{ color: "white" }}>
            Add Ticket
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AddTicketForm;

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formDt: PropTypes.object.isRequired,
};
