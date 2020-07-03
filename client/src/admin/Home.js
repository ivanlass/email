import React from 'react';
import UserCard from './UserCard';
import UkupanBroj from './UkupanBroj'
import  AccordionComponent from './Accordion'
import {Container, Row, Col,} from 'react-bootstrap'


function Home() {
  return (
    <div className="">
      <Container>
        <Row>
            <Col sm={8}>
              <UserCard />
            </Col>
            <Col sm={4}>
              <UkupanBroj />
              <AccordionComponent />
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
