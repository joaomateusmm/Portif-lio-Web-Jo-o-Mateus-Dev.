import React, { useState, useEffect, useRef } from "react";
import "./animation.css";
import "./App.css";
import Fotominha from "./assets/Fotominha.svg";
import logo1 from "./assets/logo1.svg";
import logo2 from "./assets/logo2.svg";
import logo3 from "./assets/logo3.svg";
import ReactLogo from "./assets/react.svg";
import figma from "./assets/figma.svg";
import photoshop from "./assets/photo.svg";
import premiere from "./assets/premi.svg";
import jsLogo from "./assets/js.svg";
import htmlLogo from "./assets/html.svg";
import cssLogo from "./assets/css.svg";
import pythonLogo from "./assets/python.svg";
import prismaLogo from "./assets/prisma.svg";
import Typewriter from "./components/Typewriter";
import {
  MailPlus,
  ChartNoAxesCombined,
  HandCoins,
  PiggyBank,
  Users,
  Phone,
  Linkedin,
  Github,
  Menu,
  X,
} from "lucide-react"; // Importar Menu e X

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

    //Animaçao do scroll -Animaçao do scroll //

    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const Elements = document.querySelectorAll(".hidden");

    Elements.forEach((Element) => myObserver.observe(Element));

    //Animaçao do scroll -Animaçao do scroll // //Animaçao do scroll -Animaçao do scroll //

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <header className={`header ${showHeader ? "" : "header-hidden"}`}>
        <ul className="header-list">
          <li className="header-list-item">
            <a href="#home">Home</a>
          </li>
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

      <section id="home" className="content">
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
              <MailPlus color="#1778C7" /> joaomateusmb@gmail.com
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
            style={{ width: 50, height: 50, zIndex: 2 }}
          />
        </div>
        <div className="javas-3d-cll">
          <img
            src={jsLogo}
            alt="js Logo"
            style={{ width: 45, height: 45, zIndex: 2 }}
          />
        </div>
        <div className="html-3d-cll">
          <img
            src={htmlLogo}
            alt="js Logo"
            style={{ width: 45, height: 45, zIndex: 2 }}
          />
        </div>
        <div className="css-3d-cll">
          <img
            src={cssLogo}
            alt="js Logo"
            style={{ width: 45, height: 45, zIndex: 2 }}
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
        <a className="flair-2"></a>
        <h1 className="imageReveal">Skils</h1>
        <h2 className="imageReveal">Minhas habilidades e ferramentas!</h2>
        <section className="cards-ling">
          <div className="cardzinho">
            <div className="content-java hidden">
              <p className="desc-ling">
                #1{" "}
                <span className="Contato" style={{ color: "#ffee00ff" }}>
                  Linguagem
                </span>{" "}
                mais utilizada no mercado!
              </p>
              <img
                className="img-ling"
                src={jsLogo}
                alt="js Logo"
                style={{ width: 58, height: 58, zIndex: 2 }}
              />
              <p className="title-ling">Java Script</p>
            </div>
          </div>
          <div className="cardzinho">
            <div className="content-java hidden">
              <p className="desc-ling">
                Linguagem{" "}
                <span className="Contato" style={{ color: "#ff5e00ff" }}>
                  padrão
                </span>{" "}
                para criação de páginas{" "}
                <span className="Contato" style={{ color: "#ff5e00ff" }}>
                  Web.
                </span>{" "}
              </p>
              <img
                className="img-ling"
                src={htmlLogo}
                alt="js Logo"
                style={{ width: 58, height: 58, zIndex: 2 }}
              />
              <p className="title-ling-html">HTML</p>
            </div>
          </div>
          <div className="cardzinho">
            <div className="content-java hidden">
              <p className="desc-ling">
                Permite criar{" "}
                <span className="Contato" style={{ color: "#0044ffff" }}>
                  designs
                </span>{" "}
                mais atraentes e responsivos.
              </p>
              <img
                className="img-ling"
                src={cssLogo}
                alt="js Logo"
                style={{ width: 58, height: 58, zIndex: 2 }}
              />
              <p className="title-ling-css">CSS</p>
            </div>
          </div>
          <div className="cardzinho">
            <div className="content-java hidden">
              <p className="desc-ling">
                Criada pelo{" "}
                <span className="Contato" style={{ color: "#00eeffff" }}>
                  Facebook
                </span>{" "}
                e amplamente utilizada no dev.{" "}
                <span className="Contato" style={{ color: "#00eeffff" }}>
                  Front-end.
                </span>{" "}
              </p>
              <img
                className="img-ling"
                src={ReactLogo}
                alt="js Logo"
                style={{ width: 58, height: 58, zIndex: 2 }}
              />
              <p className="title-ling-react">React</p>
            </div>
          </div>
          <div className="cardzinho">
            <div className="content-java hidden">
              <p className="desc-ling">
                Linguagem de{" "}
                <span className="Contato" style={{ color: "#ffee00ff" }}>
                  Programação
                </span>{" "}
                de{" "}
                <span className="Contato" style={{ color: "#356eb9ff" }}>
                  alto nível
                </span>{" "}
                , em aplicações como dev. Web.
              </p>
              <img
                className="img-ling"
                src={pythonLogo}
                alt="js Logo"
                style={{ width: 58, height: 58, zIndex: 2 }}
              />
              <p className="title-ling-python">Python</p>
            </div>
          </div>
          <div className="cardzinho">
            <div className="content-java hidden">
              <p className="desc-ling">
                Serviço de{" "}
                <span className="Contato" style={{ color: "#1d4880ff" }}>
                  banco de dados
                </span>{" "}
                gerenciado, rápido e otimizado.
              </p>
              <img
                className="img-ling"
                src={prismaLogo}
                alt="js Logo"
                style={{ width: 58, height: 58, zIndex: 2 }}
              />
              <p className="title-ling-prisma">Prisma</p>
            </div>
          </div>
        </section>
        <div className="seção-skills appear">
          <div className="container-vantagens hidden2">
            <div className="titulo-desc">
              <p>
                Porque contratar um{" "}
                <span className="Contato" style={{ color: "#1778C7" }}>
                  programador
                </span>{" "}
                ?
              </p>
              <h3>
                <span className="Contato" style={{ color: "#1778C7" }}>
                  Vantagens
                </span>{" "}
                que uma empresa<br></br>tem ao possuir um{" "}
                <span className="Contato" style={{ color: "#1778C7" }}>
                  site:
                </span>{" "}
              </h3>
            </div>
            <div class="features-section">
              <div class="feature-item">
                <a className="icon-vtg">
                  <ChartNoAxesCombined width="38" height="38" color="#1778C7" />
                </a>
                <span>
                  Transforme seu Nome em<br></br>uma Marca de Sucesso.
                </span>
              </div>

              <div class="feature-item">
                <a className="icon-vtg">
                  <PiggyBank width="38" height="38" color="#1778C7" />
                </a>
                <span>
                  Um Investimento Estratégico<br></br>com Retorno Garantido.
                </span>
              </div>

              <div class="feature-item">
                <a className="icon-vtg">
                  <HandCoins width="38" height="38" color="#1778C7" />
                </a>
                <span>
                  Tenha o Controle Absoluto e<br></br>Dobre seus Ganhos.
                </span>
              </div>

              <div class="feature-item">
                <a className="icon-vtg">
                  <Users width="38" height="38" color="#1778C7" />
                </a>
                <span>
                  Atraia uma Chuva de Clientes<br></br>Qualificados.
                </span>
              </div>
            </div>
          </div>
          <div className="container-ferramentas">
            <h4>Diferencial e Ferramentas</h4>
            <a>
              <img src={figma} style={{ width: 120, height: 120, zIndex: 2 }} />
              <p>
                Editor <span style={{ color: "#FE4D12" }}>Gráfico</span> de
                vetor e<br></br>
                prototipagem com foco em <br></br>{" "}
                <span style={{ color: "#FE4D12" }}>Design Web.</span>{" "}
              </p>
            </a>
            <a>
              <img
                src={photoshop}
                style={{ width: 120, height: 120, zIndex: 2 }}
              />
              <p>
                {" "}
                <span style={{ color: "#1778C7" }}>Software</span> de edição de
                imagens,<br></br>
                utilizado por{" "}
                <span style={{ color: "#1778C7" }}>profissionais</span> de
                <br></br>
                diversas áreas.
              </p>
            </a>
            <a>
              <img
                src={premiere}
                style={{ width: 120, height: 120, zIndex: 2 }}
              />
              <p>
                Software <span style={{ color: "#9A9AFE" }}>Linguagem</span> de
                edição<br></br>
                de vídeo desenvolvido pela<br></br>{" "}
                <span style={{ color: "#9A9AFE" }}>Linguagem</span>{" "}
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="content-4" id="sobre">
        <div className="about-intro">
          <div className="intro-text">
            <p className="pre-title">Um pouco sobre minha pessoa:</p>
            <h1>
              Programador Full-Stack |<br />
              Desenvolvedor Web
            </h1>
            <p className="desc-me">
              Desenvolvedor Full-Stack com mais de 3 anos de experiência na área
              de Design, estou em transição de carreira, atuando na programação
              e desenvolvimento Web. Acredito na união entre o belo e o
              funcional, criar sites não apenas com um visual bonito e
              atrativos, mas que tenham propósito e identidade de marca. Seja,
              atuo como freelancer, ajudando pequenos e grandes empreendedores a
              tornarem seus negócios mais profissionais, com foco em HTML, CSS e
              JavaScript, frameworks como React. Além de implementações de APIs
              em banco de dados como o MongoDB, usando Node.js para
              Desenvolvimento do Back-End.
            </p>
            <p className="follow-me">Me siga em:</p>
            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-mateus-mesquita-161724364/"
                className="social-button"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/joaomateusmm"
                className="social-button"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/joaomateusdev/"
                className="social-button"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className="intro-image">
            <img src={Fotominha} alt="Foto do Programador Full-Stack" />
          </div>
        </div>

        <div className="about-services">
          <h2>O que eu faço?</h2>
          <div className="services-cards">
            <div className="card imageReveal">
              <div className="card-icon">
                <img src={logo1} alt="Ícone Site da sua Marca" />
              </div>
              <h3>Site da sua Marca</h3>
              <p>
                Desenvolvo toda a parte visual do seu site, todo o Design e a
                estética profissional que a sua marca precisa.
              </p>
            </div>
            <div className="card imageReveal">
              <div className="card-icon">
                <img src={logo2} alt="Ícone Página para Empresas" />
              </div>
              <h3>Página para Empresas</h3>
              <p>
                Desenvolvo toda a parte gráfica e lógica do site da sua empresa,
                com sistemas de cadastro de usuários ou bancos de dados usados
                no mundo todo.
              </p>
            </div>
            <div className="card imageReveal">
              <div className="card-icon">
                <img src={logo3} alt="Ícone Site para Profissionais" />
              </div>
              <h3>Site para Profissionais</h3>
              <p>
                Não possui uma empresa mas mesmo assim quer conseguir clientes?
                seja psicólogo, dentista, personal, cozinheiro, etc. Seu site
                fica pronto aqui.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer-container">
        <div class="footer-content">
          <div class="footer-section about">
            <h3>JM dev.</h3>
            <p>
              Agora é sua chance de se destacar! Entre em Contato e tenha agora
              um site personalizado perfeito para o seu negócio.
            </p>
            <div class="social-icons">
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-mateus-mesquita-161724364/"
                class="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a href="https://github.com/joaomateusmm" class="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/joaomateusdev/"
                class="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-section links">
            <h2 class="footer-title extra-links">Header</h2>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skils">Skils</a>
              </li>
              <li>
                <a href="#projetos">Portifólio</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
            </ul>
          </div>

          <div class="footer-section contact">
            <h2 class="footer-title">Contato</h2>
            <p>joaomateusmb@gmail.com</p>
            <p>(85) 9.9788-6755</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
