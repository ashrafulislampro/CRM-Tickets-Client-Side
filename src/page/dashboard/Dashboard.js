import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import tickets from "../../assets/data/dummy-tickets.json";
import BreadcrumbPage from "../../components/breadcrumb/BreadcrumbPage";
import TicketTable from "../../components/ticket_table/TicketTable";
const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbPage page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ color: "white", padding: "1rem 3rem", fontSize: "1.5rem" }}
          >
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total tickets : 50</div>
          <div>Pending tickets : 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added Tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
