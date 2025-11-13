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
            <label>Observaciones generales del trámite:
              <input type="text" className="campo-observaciones" />
            </label>

            <div className="checkbox-group">
              <label >Recomendaciones o acciones futuras</label>

              <label className="checkbox-item">
                <input type="checkbox" />
                Programar nueva visita de seguimiento
              </label>

              <label className="checkbox-item">
                <input type="checkbox" />
                Requerir al infractor para cumplimiento de medida corrrectiva
              </label>

              <label className="checkbox-item">
                <input type="checkbox" />
                Coordinar con autoridades municipales o Policía Ambiental
              </label>

              <label> otro:</label>
                <input type="text" className="campo-texto" />
              

              {/* Contenedor para los dos últimos checkboxes alineados a la derecha */}
              <div className="checkbox-right">
                <label className="checkbox-item">
                  <input type="checkbox" />
                  Remitir información a otra dependencia correspondiente
                </label>

                <label className="checkbox-item">
                  <input type="checkbox" />
                  Archivar expediente por cumplimiento de obligaciones
                </label>
              </div>


            </div>


            <div className="boton-anterior">
              <a href="/resultados">
                <button type="button">Anterior</button>
              </a>
              <a href="/asignadas">
                <button type="button">Guardar y Finalizar</button>
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Frase final */}
      <p className="frase">“Cuidar el medio ambiente es valorar la vida”</p>
    </div >
  );
};

export default Observaciones;
