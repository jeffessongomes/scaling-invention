import { Container, Row, Col } from 'react-bootstrap';

import { GrInstagram, GrLinkedinOption } from 'react-icons/gr';
import { ImWhatsapp } from 'react-icons/im';
import { AiOutlineYoutube } from 'react-icons/ai';
import { RiSpotifyLine } from 'react-icons/ri';

import Input from '../../fragments/Input';
import ButtonDefault from '../../fragments/ButtonDefault';

import './styles.scss';

const FooterForm = () => (
  <Container>
    <Row>
      <Col sm={12} lg={12}>
        <div className="containerForm">
          <div className="conteinarForm containerForm__description">
            <h3 className="containerForm__description--h3">
              Vamos conversar
              <br />
              um pouco?
            </h3>
            <p className="containerForm__description--p">
              Utilize o formulário para entrar em contato conosco.
            </p>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col sm={12} lg={7}>
        <form className="containerForm">
          <Input name="Seu Nome" />
          <Input name="Seu Telefone" />
          <Input name="Seu Email" />
          <Input name="Descrição" isTextArea />
          <div className="d-flex justify-content-end">
            <ButtonDefault text="Enviar mensagem" />
          </div>
        </form>
      </Col>
      <Col sm={12} lg={5}>
        <div className="containerInfo">
          <div className="containerInfo__address">
            <strong>Endereço:</strong>
            <p>Rua Rodolfo Garcia, 1995 - Lagoa Nova, Natal - RN, 59064-370</p>
          </div>
          <div className="containerInfo__cell">
            <strong>Telefone:</strong>
            <p>(84) 99999-9999 / 88888-88888</p>
          </div>
          <div className="containerSocial">
            <strong>Telefone:</strong>
            <ul className="containerSocial__lists">
              <li>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  <GrInstagram size={32} color="#FFFFFF" />
                </a>
              </li>
              <li className="containerSocial__lists--linkedin">
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  <GrLinkedinOption size={26} color="#FFFFFF" />
                </a>
              </li>
              <li>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  <ImWhatsapp size={32} color="#FFFFFF" />
                </a>
              </li>
              <li>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  <AiOutlineYoutube size={42} color="#FFFFFF" />
                </a>
              </li>
              <li>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  <RiSpotifyLine size={38} color="#FFFFFF" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default FooterForm;
