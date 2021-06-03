import { Container, Row, Col } from 'react-bootstrap';

import './styles.scss';

const WeWantToKnow = () => (
  <Container>
    <Row>
      <Col lg={12}>
        <div className="WeWantToKnow__content">
          <h3 className="WeWantToKnow__content--title">
            Queremos conhecer sua STARTUP
          </h3>
          <p className="WeWantToKnow__content--description">
            Somos um ecossistemas de inovação facilita o network desenvolvimento.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default WeWantToKnow;
