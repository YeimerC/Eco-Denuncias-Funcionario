// src/pages/Detalles.jsx

import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../styles/Detalles.css";

// Importar recursos
import fondoUrl from "../assets/fondo.png";
import logo from "../assets/logo.png";
import iconoFuncionario from "../assets/icons/funcionario.png";

const Detalles = () => {
    // --- DATOS Y FUNCIONES DE RENDERIZADO (Mantenidos) ---
    const denunciaDetalle = {
        radicado: 'A-00000001', estado: 'En Trámite', denunciante: 'Pedro Antonio Ramírez',
        diasAbierta: '2 días', expira: '27/04/2023', ultimaActualizacion: '12/04/2023 10:45',
        fechaRadicado: '09/04/2023', delito: 'Tráfico de Especies', lugarHechos: 'Morales',
        hecho: 'En la calle 12 con carrera 24, se encuentran unas personas ofreciendo la venta loros y tortugas',
        actividadesRealizadas: 'Funcionario encargado:\nBuenas tardes.\nSe realiza la verificación en el sector en compañía de policía ambiental logrando la incautación de 5 loros y 3 tortugas, las cuales son trasportadas a las instalaciones de la CRC con el fin de ser valoradas por veterinarios, de igual forma se realiza la captura de dos personas las cuales quedan a disposición de la fiscalía nacional.',
        adjuntos: [
            { nombre: 'Video001.mp4', subidoPor: 'el denunciante', fecha: '08/04/2023' },
            { nombre: 'imagen05.jpg', subidoPor: 'el denunciante', fecha: '08/04/2023' },
            { nombre: 'Acta 1234', subidoPor: 'el funcionario', fecha: '09/04/2023' },
        ]
    };

    const renderEstadoBadge = (estado) => {
        let className;
        switch (estado) {
            case 'En Trámite': className = 'en-tramite'; break;
            case 'Resuelta': className = 'resuelta'; break;
            case 'Vencida': className = 'vencida'; break;
            default: className = 'default';
        }
        return <span className={`estado-badge ${className}`}>{estado}</span>;
    };

    const handleRegresar = () => { alert("Regresando (simulado)."); };
    const handleAdjuntar = () => { alert("Adjuntar (simulado)."); };
    const handleDescargarFormato = () => { alert("Descargar Formato (simulado)."); };
    const handleAgregarActividad = () => { alert("Agregar Actividad (simulado)."); };
    // --- FIN DE DATOS Y FUNCIONES ---


    return (
        <div
            className="fondo-pagina"
            style={{ backgroundImage: `url(${fondoUrl})` }}
        >

            {/* ENCABEZADO FIJO */}
            <header className="encabezado-fijo">
                <div className="header-left">
                    <a
                        href="/documents/ley-2111-2021.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ley"
                    >
                        Ley 2111 de 2021
                    </a>
                    <div className="titulo-funcionario-box">
                        <img
                            src={iconoFuncionario}
                            alt="Funcionario"
                            className="icono-funcionario"
                        />
                        <h1 className="titulo">FUNCIONARIO</h1>
                    </div>
                </div>
                <div className="header-right">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
            </header>

            {/* CONTENEDOR PRINCIPAL */}
            <Container fluid className="main-content-area-fixed">

                <Row>
                    <Col xs={12}>
                        {/* CAJA GRANDE: Contenedor principal de los detalles */}
                        <Card className="main-details-card shadow-lg">
                            <Card.Body className="p-4">

                                {/* Título "Detalles" y Botón "Regresar" */}
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h2 className="titulo-seccion-detalles">Detalles</h2>
                                    <a href="/asignadas"><Button type="button">Regresar</Button></a>
                                </div>

                                {/* Contenedores de 2 columnas para el contenido principal */}
                                <Row>
                                    {/* Columna Izquierda: Estado y Adjuntos */}
                                    <Col md={5} className="mb-4 mb-md-0 d-flex flex-column">

                                        {/* Sub-caja 1: Estado de la denuncia */}
                                        <Card className="sub-card info-card mb-4">
                                            {/* 🛑 Contenedor de scroll para contenido fijo 🛑 */}
                                            <div >
                                                
                                                    <h5 className="sub-card-title">Estado</h5>
                                                    <p>{renderEstadoBadge(denunciaDetalle.estado)}</p>
                                                    <h5 className="sub-card-title mt-3">Denunciante</h5>
                                                    <p>{denunciaDetalle.denunciante}</p>
                                                    <h5 className="sub-card-title mt-3">Días abierta</h5>
                                                    <p>{denunciaDetalle.diasAbierta}</p>
                                                    <h5 className="sub-card-title mt-3">Expira el</h5>
                                                    <p>{denunciaDetalle.expira}</p>
                                                    <p className="ultima-actualizacion">
                                                        Última actualización: {denunciaDetalle.ultimaActualizacion}
                                                    </p>
                                                
                                            </div>
                                        </Card>

                                        {/* Sub-caja 2: Adjuntos */}
                                        <Card className="sub-card adjuntos-card mt-auto">
                                            <Card.Body className="d-flex flex-column">
                                                <h5 className="sub-card-title">Adjuntos</h5>

                                                {/* 🛑 Contenedor de scroll para la lista de adjuntos (crece si es necesario) 🛑 */}
                                                <div className="scroll-content-container flex-grow-1">
                                                    <ul className="list-unstyled">
                                                        {denunciaDetalle.adjuntos.map((adjunto, index) => (
                                                            <li key={index} className="mb-2">
                                                                📁 <a href="#" className="adjunto-link">{adjunto.nombre}</a>
                                                                <br />
                                                                <small>Subido por {adjunto.subidoPor} el {adjunto.fecha}</small>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                {/* Botón Adjuntar (queda fijo) */}
                                                <div className="d-grid gap-2 d-md-block text-end mt-2">
                                                    <Button className="btn-adjuntar" onClick={handleAdjuntar}>Adjuntar</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    {/* Columna Derecha: Radicado y Actividades Realizadas */}
                                    <Col md={7} className="d-flex flex-column">
                                        {/* Sub-caja 3: Detalles del Radicado */}
                                        <Card className="sub-card info-card radicado-card mb-4">
                                        
                                                <div className="d-flex align-items-start justify-content-start">
                                                    <div>
                                                        <h5 className="sub-card-title">Radicado</h5>
                                                        <p className="radicado-info">Fecha: {denunciaDetalle.fechaRadicado}</p>
                                                        <p className="radicado-info">Delito: {denunciaDetalle.delito}</p>
                                                        <p className="radicado-info">Lugar de los Hechos: {denunciaDetalle.lugarHechos}</p>
                                                    </div>
                                                    <span className="radicado-numero">{denunciaDetalle.radicado}</span>
                                                </div>
                                                <h5 className="sub-card-title mt-3">Hecho:</h5>
                                                {/* .hecho-contenido ya tiene scroll en CSS */}
                                                <div className="hecho-contenido">
                                                    <p>{denunciaDetalle.hecho}</p>
                                                </div>
                                            
                                        </Card>

                                        {/* Sub-caja 4: Actividades Realizadas */}
                                        <Card className="sub-card actividades-card flex-grow-1">
                                            
                                                <h5 className="sub-card-title">Actividades Realizadas</h5>
                                                {/* .actividades-contenido ya tiene scroll en CSS */}
                                                <div className="actividades-contenido flex-grow-1">
                                                    <p>{denunciaDetalle.actividadesRealizadas}</p>
                                                </div>
                                                {/* Botones Descargar y Agregar (quedan fijos) */}
                                                <div className="d-flex justify-content-end mt-3">
                                                    <Button className="btn-descargar me-2" onClick={handleDescargarFormato}>Formato de Descarga</Button>
                                                    <Button className="btn-agregar" onClick={handleAgregarActividad}>Agregar</Button>
                                                </div>
                                            
                                        </Card>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <footer className="frase">
                “Cuidar el medio ambiente es valorar la vida”
            </footer>
        </div>
    );
};

export default Detalles;