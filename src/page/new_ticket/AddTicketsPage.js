import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddTicketForm from "../../components/addTicketForm/AddTicketForm";
import BreadcrumbPage from "../../components/breadcrumb/BreadcrumbPage";
import { ShortText } from "../utils/Validation";
const initialFormDt = {
  subject: "",
  issueDate: "",
  detail: "",
};
const initFormDtErr = {
  subject: false,
  issueDate: false,
  detail: false,
};

const AddTicketsPage = () => {
  const [formDt, setFormDt] = useState(initialFormDt);
  const [formDtError, setFormDtError] = useState(initFormDtErr);

  useEffect(() => {}, [formDt, formDtError]);
  /*----------------------------------------------------------*/
  /*                  HANDLE FUNCTIONALITY START              */
  /*----------------------------------------------------------*/
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormDt({
      ...formDt,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const isSubjectValid = await ShortText(formDt.subject);

    setFormDtError({
      ...initFormDtErr,
      subject: !isSubjectValid,
    });
    console.log(formDt);
  };

  /*----------------------------------------------------------*/
  /*                  HANDLE FUNCTIONALITY END                */
  /*----------------------------------------------------------*/
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbPage page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            formDtError={formDtError}
            formDt={formDt}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicketsPage;
