import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import tickets from "../../assets/data/dummy-tickets.json";
import BreadcrumbPage from "../../components/breadcrumb/BreadcrumbPage";
import MessageHistory from "../../components/message-history/MessageHistory";
import UpdateTicket from "../../components/update-ticket/UpdateTicket";

const ticket = tickets[0];
const msg = tickets[1].history;

const TicketPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbPage page="Ticket" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="d-flex ">
            <div>
              <div className="subject fw-bold">Subject :</div>
              <div className="date fw-bold">Ticket Open :</div>
              <div className="status fw-bold">Status :</div>
            </div>
            <div className="ms-4">
              <div className="subject">{ticket.subject}</div>
              <div className="date">{ticket.addedAt}</div>
              <div className="status">{ticket.status}</div>
            </div>
          </div>
        </Col>

        <Col className="text-end">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <MessageHistory msg={msg} />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <UpdateTicket />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketPage;
