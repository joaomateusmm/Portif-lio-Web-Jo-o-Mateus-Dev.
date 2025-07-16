import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import background from "./assets/background.jpg";
import Typewriter from "./components/Typewriter";
import { MailPlus } from "lucide-react";
import { Phone } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

function App() {
  const [showHeader, setShowHeader] = useState(true); // Estado para controlar a visibilidade do header
  const lastScrollY = useRef(0); // Referência para armazenar a última posição do scroll

  useEffect(() => {
    const handleScroll = () => {
      // Pega a posição atual do scroll
      const currentScrollY = window.scrollY;

      // Lógica para mostrar/esconder o header
      // Se o scroll for para baixo E não estiver no topo da página, esconde o header
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // 100px é um offset para evitar esconder imediatamente
        setShowHeader(false);
      }
      // Se o scroll for para cima OU estiver muito próximo do topo, mostra o header
      else if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        // 50px para mostrar no topo
        setShowHeader(true);
      }

      // Atualiza a última posição do scroll
      lastScrollY.current = currentScrollY;
    };

    // Adiciona o event listener de scroll quando o componente monta
    window.addEventListener("scroll", handleScroll);

    // Remove o event listener quando o componente desmonta para evitar vazamentos de memória
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // O array vazio garante que o efeito rode apenas uma vez (no mount e unmount)

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
      }}
    >
      {/* Adiciona a classe 'header-hidden' condicionalmente */}
      <header className={`header ${showHeader ? "" : "header-hidden"}`}>
        <ul className="header-list">
          <li className="header-list-item">
            <a href="#skils">Skils</a>
          </li>
          <li className="header-list-item">
            <a href="#projetos">Projetos</a>
          </li>
          <li className="header-list-item">
            <a href="#sobre">Sobre</a>
          </li>
          <a href="https://wa.link/npd4e9" className="btn-donate">
            Contato
          </a>
        </ul>
      </header>

      <section className="content">
        <div className="titulo-principal">
          <h1 className="title">Ter um Site é</h1>
          <Typewriter />
        </div>

        <p className="desc">
          Qual o <span style={{ color: "#1778C7" }}>diferencial</span> da sua
          empresa diante dos concorrentes?
          <br />
          Não tem? Agora é sua chance de se destacar! Entre em{" "}
          <span style={{ color: "#1778C7" }}>Contato</span> e tenha agora um
          site personalizado perfeito para o seu negócio.
        </p>
        <section className="links-contato">
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
        <h1>Projetos</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          totam obcaecati itaque, dicta similique molestiae provident ea velit
          voluptate animi officiis delectus qui perspiciatis error vero eius
          consectetur repudiandae pariatur?
        </p>
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
