import React, {useContext} from 'react';
import UserCard from './UserCard';
import UkupanBroj from './UkupanBroj'
import  AccordionComponent from './Accordion'
import {Container, Row, Col,} from 'react-bootstrap'
import { RadniciContext } from "../../context/Radnici.context";


function Home() {
  const [radnici, setRadnici] = useContext(RadniciContext)


  return (
    <div className="">
      <Container>
        <Row>
            <Col sm={8}>
              {radnici.map(radnik => (
                <UserCard  radnik = {radnik}/>

              ))}
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
