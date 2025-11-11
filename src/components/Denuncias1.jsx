import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/Denuncias1.css";

// Recursos
import fondoUrl from "../assets/fondo.png";
import logo from "../assets/logo.png";
import iconoFuncionario from "../assets/icons/funcionario.png";
import iconoPendiente from "../assets/icons/alarma.png";
import iconoResueltas from "../assets/icons/resuelta.png";
import iconoTramite from "../assets/icons/tramite.png";
import iconoVencidas from "../assets/icons/vencida.png";

const Denuncias1 = () => {
  // Datos del gráfico de pastel
  const dataPie = [
    { name: "Pendientes", value: 28 },
    { name: "Resueltas", value: 15 },
    { name: "En Trámite", value: 9 },
    { name: "Vencidas", value: 2 },
  ];
  const COLORS = ["#ffc107", "#28a745", "#00bcd4", "#dc3545"];

  // Datos del gráfico de barras
  const dataBar = [
    { mes: "Enero", Asignadas: 120, Resueltas: 100 },
    { mes: "Febrero", Asignadas: 80, Resueltas: 70 },
    { mes: "Marzo", Asignadas: 60, Resueltas: 50 },
    { mes: "Abril", Asignadas: 100, Resueltas: 80 },
    { mes: "Mayo", Asignadas: 140, Resueltas: 110 },
    { mes: "Junio", Asignadas: 90, Resueltas: 70 },
  ];

  const cumplimiento = 90;

  return (
    <div
      className="fondo-pagina"
      style={{ backgroundImage: `url(${fondoUrl})` }}
    >
      {/* Enlace a la Ley */}
      <a
        href="/documents/ley-2111-2021.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="ley"
      >
        Ley 2111 de 2021
      </a>

      {/* Encabezado */}
      <header className="encabezado">
        <div className="titulo-funcionario-box">
          <img
            src={iconoFuncionario}
            alt="Funcionario"
            className="icono-funcionario"
          />
          <h1 className="titulo">FUNCIONARIO</h1>
        </div>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      <div className="layout-wrapper">
        {/* Sidebar */}
        <aside className="panel-usuario shadow-lg">
          <div className="usuario-icono">👤</div>
          <h3 className="usuario-nombre">ANDRES13</h3>
          <p className="usuario-correo">andres1354@gmail.com</p>
          <ul className="menu-usuario">
            <li className="activo">Inicio</li>
            <li>Asignadas</li>
            <li>Notificaciones</li>
            <li>Salir</li>
          </ul>
        </aside>

        {/* Contenido principal */}
        <Container fluid className="main-content-area">
          {/* Tarjetas */}
          <Row className="tarjetas mb-4">
            <Col lg={3}>
              <Card className="tarjeta pendiente">
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <img src={iconoPendiente} alt="Pendientes" className="icono-horizontal" />
                  <div>
                    <h4>PENDIENTES</h4>
                    <p>28</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="tarjeta resueltas">
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <img src={iconoResueltas} alt="Resueltas" className="icono-horizontal" />
                  <div>
                    <h4>RESUELTAS</h4>
                    <p>15</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="tarjeta tramite">
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <img src={iconoTramite} alt="En trámite" className="icono-horizontal" />
                  <div>
                    <h4>EN TRÁMITE</h4>
                    <p>09</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="tarjeta vencidas">
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <img src={iconoVencidas} alt="Vencidas" className="icono-horizontal" />
                  <div>
                    <h4>VENCIDAS</h4>
                    <p>02</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Caja de gráficos y notificaciones */}
          <div className="contenedor-graficos">
            <Row className="graficos g-4">
              {/* Gráfico 1: Pie */}
              <Col lg={4}>
                <Card className="grafico grafico-estado shadow-sm">
                  <Card.Body>
                    <Card.Title>Estado de Denuncias</Card.Title>
                    <ResponsiveContainer width="100%" height={180}>
                      <PieChart>
                        <Pie
                          data={dataPie}
                          cx="50%"
                          cy="50%"
                          outerRadius={60}
                          label
                          dataKey="value"
                        >
                          {dataPie.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </Card.Body>
                </Card>
              </Col>

              {/* Gráfico 2: Barras */}
              <Col lg={4}>
                <Card className="grafico grafico-asignacion shadow-sm">
                  <Card.Body>
                    <Card.Title>Asignación Mensual</Card.Title>
                    <ResponsiveContainer width="100%" height={180}>
                      <BarChart data={dataBar}>
                        <XAxis dataKey="mes" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Asignadas" fill="#28a745" />
                        <Bar dataKey="Resueltas" fill="#ff00aa" />
                      </BarChart>
                    </ResponsiveContainer>
                  </Card.Body>
                </Card>
              </Col>

              {/* Gráfico 3: Cumplimiento */}
              <Col lg={4}>
                <Card className="grafico grafico-cumplimiento shadow-sm text-center">
                  <Card.Body>
                    <Card.Title>Cumplimiento de Plazos</Card.Title>
                    <div className="gauge-wrapper">
                      <div className="gauge-arc">
                        <div
                          className="gauge-fill"
                          style={{ transform: `rotate(${(cumplimiento / 100) * 180}deg)` }}
                        ></div>
                      </div>
                      <p className="gauge-text">Objetivo: {cumplimiento}%</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Notificaciones */}
            <Row className="mt-4">
              <Col>
                <h3>Notificaciones</h3>
                <Card className="notificaciones">
                  <textarea
                    className="textarea-notificaciones"
                    placeholder="Sin nuevas notificaciones..."
                  ></textarea>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* Frase final */}
      <footer className="frase">
        “Cuidar el medio ambiente es valorar la vida”
      </footer>
    </div>
  );
};

export default Denuncias1;
