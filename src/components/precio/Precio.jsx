import React, { useState } from "react";
import "./precio.css";
import { FiCheck } from "react-icons/fi";

const Precio = () => {
  //hacer un boton que se pueda activar y desactivar

  const obj = [
    {
      mensual: 50,
      anual: 360,
    },
    {
      mensual: 75,
      anual: 540,
    },
    {
      mensual: 99,
      anual: 713,
    },
  ];

  const [state, setState] = useState(false);

  const handleClick = (e) => {
    setState(!state);
    console.log(e.target.value);
  };

  return (
    <section id="precio">
      <div class="container">
        <div class="top">
          <h4>PRECIOS</h4>
          <h2>Desbloquea tu creatividad.</h2>
          <h2>¡Prueba el plan Pro gratis!</h2>
          <p>Comienza tu prueba gratuita con acceso a todo </p>
          <p>el contenido de manera gratuita por 7 días.</p>
          <div class="toggle-btn">
            <span>Mensual</span>
            <label class="switch">
              <input
                type="checkbox"
                id="checbox"
                value={state}
                onClick={handleClick}
              />
              <span class="slider round"></span>
            </label>
            <span>Anualmente(-40%)</span>
          </div>
        </div>
      </div>

      {/* -------------------- container 1 -------------------- */}

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Básico</h3>
            <p>
              Plan individual <br />
              <br />
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.
            </p>
            <div class="text1">
              <h4>${state ? obj[0].anual : obj[0].mensual}</h4>
              <p>
                <strong>USD</strong>/{state ? "anual" : "mensual"}
              </p>
            </div>

            <p>¿Qué está incluido?</p>
          </div>

          <ul className="service__list">
            <div className="opacidad">
              <li>
                <FiCheck className="service__list-icon" />
                <p>Acceso de por vida a los cursos que completes</p>
              </li>
              <li>
                <FiCheck className="service__list-icon" />
                <p>Acceso a todos los cursos</p>
              </li>
            </div>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Acceso a todos los proyectos</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Acceso a Discord</p>
            </li>

            <button href="#" class="button button1">
              Empezar
            </button>
          </ul>
        </article>

        {/* ------------------------container 2 ----------------------- */}

        <article className="servici">
          <div className="servici__head">
            <h3>Pro</h3>
            <p>
              Plan individual <br />
              <br />
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.
            </p>
            <div class="text2">
              <h4>${state ? obj[1].anual : obj[1].mensual}</h4>
              <p>
                <strong>USD</strong>/{state ? "anual" : "mensual"}
              </p>
            </div>
            <p>¿Qué está incluido?</p>
          </div>

          <ul className="hola_list">
            <div className="opacidad">
              <li>
                <FiCheck className="hola_list-icon" />
                <p>Acceso de por vida a los cursos que completes</p>
              </li>
            </div>
            <li>
              <FiCheck className="hola_list-icon" />
              <p>Acceso a todos los cursos</p>
            </li>
            <li>
              <FiCheck className="hola_list-icon" />
              <p>Acceso a todos los proyectos</p>
            </li>
            <li>
              <FiCheck className="hola_list-icon" />
              <p>Acceso a Discord</p>
            </li>

            <button href="#" class="button button2">
              Empezar
            </button>
          </ul>
        </article>

        {/* -----------------------   container 3   --------------------- */}

        <article className="service">
          <div className="service__head">
            <h3>Empresas</h3>
            <p>
              Plan para 5 miembros
              <br />
              <br />
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.
            </p>

            <div class="text3">
              <h4>${state ? obj[2].anual : obj[2].mensual}</h4>
              <p>
                <strong>USD</strong>/{state ? "anual" : "mensual"}
              </p>
            </div>
            <p>¿Qué está incluido?</p>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className="service__list-icon" />
              <p>Acceso de por vida a los cursos que completes</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Acceso a todos los cursos</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Acceso a todos los proyectos</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Acceso a Discord</p>
            </li>

            <button href="#" class="button button3">
              Empezar
            </button>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Precio;
