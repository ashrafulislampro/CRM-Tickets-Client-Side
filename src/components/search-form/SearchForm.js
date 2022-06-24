import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const SearchForm = ({ handleOnChange, str }) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Search:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="search"
              placeholder="Search..."
              value={str}
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchForm;
