import React, { useState, useEffect, useRef } from "react";
import "./animation.css";
import "./App.css";
import ReactLogo from "./assets/react.svg";
import jsLogo from "./assets/js.svg";
import htmlLogo from "./assets/html.svg";
import cssLogo from "./assets/css.svg";
import Typewriter from "./components/Typewriter";
import { MailPlus, Phone, Linkedin, Github, Menu, X } from "lucide-react"; // Importar Menu e X

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Novo estado para o menu mobile
  const lastScrollY = useRef(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // O array vazio garante que o efeito rode apenas uma vez (no mount e unmount)

  return (
    <div className="container">
      <header className={`header ${showHeader ? "" : "header-hidden"}`}>
        <ul className="header-list">
          <li className="header-list-item">
            <a href="#skils">Skils</a>
          </li>
          <li className="header-list-item">
            <a href="#projetos">Portifólio</a>
          </li>
          <li className="header-list-item">
            <a href="#sobre">Sobre</a>
          </li>
          <a href="https://wa.link/npd4e9" className="btn-donate">
            Contato
          </a>
          <a className="hamburger-button" onClick={toggleMobileMenu}>
            <Menu size={24} /> {/* Ícone de hambúrguer da Lucide */}
          </a>
        </ul>
      </header>

      <section className="content">
        <div className="titulo-principal">
          <h1 className="title">Ter um Site é</h1>
          <Typewriter />
        </div>

        <p className="desc">
          Qual o{" "}
          <span className="Diferencial" style={{ color: "#1778C7" }}>
            <strong>Diferencial</strong>
          </span>{" "}
          da sua empresa diante dos concorrentes?
          <br />
          Não tem? Agora é sua chance de se destacar! Entre em{" "}
          <span className="Contato" style={{ color: "#1778C7" }}>
            <strong>Contato</strong>
          </span>{" "}
          e tenha agora um site personalizado perfeito para o seu negócio.
        </p>
        <section className="links-contato appear">
          <div className="links-1">
            <a>
              {" "}
              <MailPlus color="#1778C7" /> joaomateusm@gmail.com
            </a>
            <br />
            <a href="https://wa.link/npd4e9">
              {" "}
              <Phone color="#1778C7" /> (85) 9.9788-6755
            </a>
          </div>
          <div className="links-2">
            <a href="https://www.linkedin.com/in/jo%C3%A3o-mateus-mesquita-161724364/">
              linkedin.com/in/joão-mateus-dev <Linkedin color="#1778C7" />
            </a>
            <br />
            <a href="https://github.com/joaomateusmm">
              github.com/joaomateusmm <Github color="#1778C7" />
            </a>
          </div>
        </section>
      </section>

      <section className="content-2" id="projetos">
        <p className="imageReveal">
          Linguagens e Frameworks mais usadas no mercado!
        </p>
        <h1 className="imageReveal">Portifólio</h1>
        <a className="flair"></a>
        <div className="react-3d">
          <img
            src={ReactLogo}
            alt="React Logo"
            style={{ width: 58, height: 58, zIndex: 2 }}
          />
        </div>
        <div className="javas-3d">
          <img
            src={jsLogo}
            alt="js Logo"
            style={{ width: 60, height: 60, zIndex: 2 }}
          />
        </div>
        <div className="html-3d">
          <img
            src={htmlLogo}
            alt="js Logo"
            style={{ width: 58, height: 58, zIndex: 2 }}
          />
        </div>
        <div className="css-3d">
          <img
            src={cssLogo}
            alt="js Logo"
            style={{ width: 68, height: 68, zIndex: 2 }}
          />
        </div>
        <div className="react-3d-cll">
          <img
            src={ReactLogo}
            alt="React Logo"
            style={{ width: 70, height: 70, zIndex: 2 }}
          />
        </div>
        <div className="javas-3d-cll">
          <img
            src={jsLogo}
            alt="js Logo"
            style={{ width: 58, height: 58, zIndex: 2 }}
          />
        </div>
        <div className="html-3d-cll">
          <img
            src={htmlLogo}
            alt="js Logo"
            style={{ width: 58, height: 58, zIndex: 2 }}
          />
        </div>
        <div className="css-3d-cll">
          <img
            src={cssLogo}
            alt="js Logo"
            style={{ width: 58, height: 58, zIndex: 2 }}
          />
        </div>

        <div className="grid-cards imageReveal scroll-infinit">
          <a
            href="https://geradordeformas.netlify.app/"
            className="item item1"
          ></a>
          <a
            href="https://inquisitive-panda-64043c.netlify.app/"
            className="item item2"
          ></a>
          <a
            href="https://lovely-palmier-4f304b.netlify.app/"
            className="item item3"
          ></a>
          <a
            href="https://guileless-cannoli-9ddf9a.netlify.app/"
            className="item item4"
          ></a>
          <a
            href="https://joaomateusdev.netlify.app/"
            className="item item5"
          ></a>
        </div>
      </section>

      <section className="content-3" id="skils">
        <h1>Projetos</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          totam obcaecati itaque, dicta similique molestiae provident ea velit
          voluptate animi officiis delectus qui perspiciatis error vero eius
          consectetur repudiandae pariatur?
        </p>
      </section>

      <section className="content-4" id="sobre">
        <h1>Projetos</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          totam obcaecati itaque, dicta similique molestiae provident ea velit
          voluptate animi officiis delectus qui perspiciatis error vero eius
          consectetur repudiandae pariatur?
        </p>
      </section>
    </div>
  );
}

export default App;
