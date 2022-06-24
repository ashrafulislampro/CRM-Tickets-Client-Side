import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import tickets from "../../assets/data/dummy-tickets.json";
import BreadcrumbPage from "../../components/breadcrumb/BreadcrumbPage";
import SearchForm from "../../components/search-form/SearchForm";
import TicketTable from "../../components/ticket_table/TicketTable";
const TicketList = () => {
  const [str, setStr] = useState("");
  const [dispTicket, setDispTicket] = useState(tickets);
  useEffect(() => {}, [str]);
  /*----------------------------------------------------------*/
  /*                  HANDLE FUNCTIONALITY START              */
  /*----------------------------------------------------------*/
  const handleOnChange = (e) => {
    const value = e.target.value;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (str) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(str.toLowerCase())
    );
    setDispTicket(displayTickets);
  };
  /*----------------------------------------------------------*/
  /*                  HANDLE FUNCTIONALITY END                */
  /*----------------------------------------------------------*/
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbPage page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="info" style={{ color: "white" }}>
            Add New Ticket
          </Button>
        </Col>
        <Col className="text-end">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <TicketTable tickets={dispTicket} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketList;
