import { Container, Row, Col } from 'react-bootstrap';
import './styles.scss';

const Footer = () => (
  <div className="footerCard">
    <Container fluid>
      <Row>
        <Col sm={12} className="footerCard__content">
          <h2 className="footerCard__content--h2">Novidades? Acompanhe nosso blog</h2>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
