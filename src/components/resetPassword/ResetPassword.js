import PropTypes from "prop-types";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ResetPassword = ({
  handleOnChange,
  email,
  setFormLoad,
  handleOnSubmitPassword,
}) => {
  return (
    <Container>
      <Row>
        <h1 className="text-center text-info fw-bold">Reset Password</h1>
        <Col>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmitPassword}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                onChange={handleOnChange}
                name="email"
                value={email}
                placeholder="type email"
                required
              />
            </Form.Group>
            <div className="mt-3">
              <p
                onClick={() => setFormLoad("login")}
                style={{ cursor: "pointer" }}
                className="text-info"
              >
                Login Now
              </p>
            </div>
            <hr />
            <Button type="submit" className="my-3">
              Reset Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmitPassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
