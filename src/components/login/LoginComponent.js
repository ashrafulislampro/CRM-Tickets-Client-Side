import PropTypes from "prop-types";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const LoginComponent = ({
  handleOnChange,
  setFormLoad,
  email,
  pass,
  handleOnSubmit,
}) => {
  return (
    <Container>
      <Row>
        <h1 className="text-center text-info fw-bold">Client Login</h1>
        <Col>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
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
            <Form.Group className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={pass}
                onChange={handleOnChange}
                placeholder="type password"
                required
              />
            </Form.Group>

            <div className="mt-3">
              <p
                onClick={() => setFormLoad("reset")}
                style={{ cursor: "pointer" }}
                className="text-info"
              >
                Forget Password
              </p>
            </div>
            <hr />
            <Button type="submit" className="my-3">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginComponent;

LoginComponent.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};
