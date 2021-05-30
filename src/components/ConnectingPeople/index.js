import { Container, Row, Col } from 'react-bootstrap';

import ImageConnecting from '../ImageConnecting';

import SalaStartups from '../../assets/img/image_04.png';

import './styles.scss';

const ConnectingPeople = () => (
  <Container>
    <Row>
      <Col>
        <div className="containerConnectingPeople">
          <h3 className="containerConnectingPeople__h3">Conectando empresas e pessoas</h3>
          <p className="containerConnectingPeople__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Libero rerum enim culpa dolorum placeat officiis praesentium non?
            Perferendis doloribus dignissimos illum.
            Autem minus expedita obcaecati quam dolor doloribus omnis corrupti!
          </p>
        </div>
      </Col>
    </Row>
    <Row className="imagesMobile">
      <Col sm={12}>
        <ImageConnecting text="Salas para startups" image={SalaStartups} />
      </Col>
      <Col sm={12}>
        <ImageConnecting text="Salas para startups" image={SalaStartups} />
      </Col>
    </Row>
  </Container>
);

export default ConnectingPeople;
