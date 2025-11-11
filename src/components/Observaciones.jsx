import React from "react";
import "../styles/Observaciones.css";
import logo from "../assets/logo.png";
import funcionario from "../assets/icons/funcionario.png";
import fondo from "../assets/fondo.png"; // ✅ importación segura del fondo

const Observaciones = () => {
  return (
    <div
      className="fondo-pagina"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      {/* Encabezado */}
      <div className="encabezado">
        <a href="/documents/ley-2111-2021.pdf" className="ley">
          Ley 2111 de 2021
        </a>

        <div className="titulo-funcionario">
          <img
            src={funcionario}
            alt="Icono funcionario"
            className="icono-funcionario"
          />
          <h1>FUNCIONARIO</h1>
        </div>

        <img src={logo} alt="Logo EcoDenuncias" className="logo" />
      </div>

      {/* Contenedor de cajas */}
      <div className="contenedor-cajas">
        {/* Caja inferior */}
        <div className="caja caja1"></div>

        {/* Caja intermedia */}
        <div className="caja caja2">
          <h2 className="titulo-formato">Formato de Descarga</h2>
        </div>

        {/* Caja superior */}
        <div className="caja caja3">
          <h3 className="titulo-observaciones">Observaciones</h3>

          <form className="formulario-observaciones">
            <label>Observaciones generales del trámite:</label>
            <textarea
              className="campo-texto"
              placeholder="Escriba aquí sus observaciones..."
            ></textarea>
            <label >Recomendaciones o acciones futuras</label>

            <div className="boton-siguiente">
              <button type="button">Anterior</button>
              <button type="button">Guardar y finalizar</button>
            </div>
          </form>
        </div>
      </div>

      {/* Frase final */}
      <p className="frase">“Cuidar el medio ambiente es valorar la vida”</p>
    </div>
  );
};

export default Observaciones;
