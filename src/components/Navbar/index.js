import { Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { HiMenu } from 'react-icons/hi';

import Button from '../../fragments/Button';
import './styles.scss';

const Navbar = () => (
  <Container>
    <Row>
      <Col lg={12}>
        <nav className="menu">
          <button type="button" className="menu__buttonMobile">
            <HiMenu size="32" color="#FFFFFF" />
          </button>
          <div className="menu__brand">
            <span className="title">tbridge.</span>
            co
          </div>
          <div className="menu__content">
            <li className="menu__list">
              <Link to="/" className="menu__list--link">Home</Link>
            </li>
            <li className="menu__list">
              <Link to="/" className="menu__list--link">Conheça</Link>
            </li>
            <li className="menu__list">
              <Link to="/" className="menu__list--link">Eventos</Link>
            </li>
            <li className="menu__list">
              <Link to="/" className="menu__list--link">Fale Conosco</Link>
            </li>
            <li className="menu__list">
              <Button className="menu__list--link" title="Participe" link="/" />
            </li>
          </div>
        </nav>
      </Col>
    </Row>
  </Container>
);

export default Navbar;
