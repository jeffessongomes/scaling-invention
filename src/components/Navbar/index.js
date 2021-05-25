import { Container, Row, Col } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { HiMenu } from 'react-icons/hi';

import Button from '../../fragments/Button';
import './styles.scss';

import { setMenu } from '../../ducks/appSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const {
    isOpen,
  } = useSelector((state) => state.app);

  function handleOpenMenu() {
    dispatch(setMenu(!isOpen));
  }

  return (
    <>
      <Container className={`${isOpen && 'd-none'}`}>
        <Row>
          <Col lg={12}>
            <nav className="menu">
              <button type="button" onClick={handleOpenMenu} className="menu__buttonMobile">
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
      <nav className={`menuMobile ${isOpen && 'd-flex'}`}>
        <div className="menu__buttonMobile">
          <button type="button" onClick={handleOpenMenu} className="menu__buttonMobile--button">
            <div className="menu__buttonMobile--one" />
            <div className="menu__buttonMobile--two" />
          </button>
        </div>
        <div className="menuMobile__content">
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
            <Link to="/" className="menu__list--link">Blog</Link>
          </li>
          <li className="menu__list">
            <Link to="/" className="menu__list--link">Fale Conosco</Link>
          </li>
        </div>
        <li className="menu__button">
          <Button className="menu__list--link" title="Participe" link="/" />
        </li>
      </nav>
    </>
  );
};

export default Navbar;
