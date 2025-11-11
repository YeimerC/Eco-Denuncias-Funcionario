// src/pages/Asignadas.jsx (Versión con Paginación Funcional)

import React, { useState } from "react"; // IMPORTAR useState
import { Container, Row, Col, Card, Table, Form, Button } from 'react-bootstrap';
import "../styles/Asignadas.css";

// Importar recursos
import fondoUrl from "../assets/fondo.png";
import logo from "../assets/logo.png";
import iconoFuncionario from "../assets/icons/funcionario.png";

// Datos de ejemplo simulando las denuncias (¡Reemplazar con datos reales!)
const ALL_DENUNCIAS = [
    { radicado: 'A-00000001', fecha: '05/03/2024 15:00', tipo: 'Denuncia', detalle: 'Minería Ilegal', municipio: 'Piendamo', estado: 'En Trámite', dias: '3 días' },
    { radicado: 'S-00000002', fecha: '03/02/2023 09:15', tipo: 'Solicitud', detalle: 'Visita Técnica', municipio: 'Suarez', estado: 'Resuelta', dias: '-------' },
    { radicado: 'A-00000003', fecha: '09/01/2023 10:02', tipo: 'Denuncia', detalle: 'Deforestación', municipio: 'Piendamo', estado: 'Vencida', dias: '15 días' },
    { radicado: 'S-00000004', fecha: '08/01/2023 11:45', tipo: 'Solicitud', detalle: 'Licencia Ambiental', municipio: 'Popayán', estado: 'Resuelta', dias: '-------' },
    { radicado: 'S-00000005', fecha: '12/05/2024 15:20', tipo: 'Solicitud', detalle: 'Licencia Ambiental', municipio: 'Popayán', estado: 'En Trámite', dias: '7 días' },
    { radicado: 'A-00000006', fecha: '30/08/2024 18:10', tipo: 'Denuncia', detalle: 'Caza Ilegal', municipio: 'Popayán', estado: 'Vencida', dias: '2 días' },
    // AÑADE MÁS FILAS AQUÍ (ej. hasta 15 o 20) para probar la paginación
    { radicado: 'A-00000007', fecha: '01/09/2024 10:00', tipo: 'Denuncia', detalle: 'Ruido Excesivo', municipio: 'Cali', estado: 'En Trámite', dias: '1 día' },
    { radicado: 'S-00000008', fecha: '02/09/2024 11:30', tipo: 'Solicitud', detalle: 'Poda de Árbol', municipio: 'Cali', estado: 'En Trámite', dias: '1 día' },
    { radicado: 'A-00000009', fecha: '03/09/2024 14:00', tipo: 'Denuncia', detalle: 'Quema de Basura', municipio: 'Yumbo', estado: 'Pendiente', dias: '0 días' },
    { radicado: 'S-00000010', fecha: '04/09/2024 16:00', tipo: 'Solicitud', detalle: 'Uso de Agua', municipio: 'Yumbo', estado: 'Pendiente', dias: '0 días' },
    { radicado: 'A-00000011', fecha: '05/09/2024 08:00', tipo: 'Denuncia', detalle: 'Contaminación', municipio: 'Popayán', estado: 'Pendiente', dias: '0 días' },
    { radicado: 'A-00000012', fecha: '06/09/2024 09:30', tipo: 'Denuncia', detalle: 'Malos Olores', municipio: 'Piendamo', estado: 'Pendiente', dias: '0 días' },
];


const Asignadas = () => {
    // ----------------------------------------
    // LÓGICA DE PAGINACIÓN
    // ----------------------------------------
    const [currentPage, setCurrentPage] = useState(1);
    const denunciasPerPage = 4; // Mostrar 6 filas por página (se ajusta mejor a la imagen)
    const totalDenuncias = ALL_DENUNCIAS.length;

    // Calcula los índices para la página actual
    const indexOfLastDenuncia = currentPage * denunciasPerPage;
    const indexOfFirstDenuncia = indexOfLastDenuncia - denunciasPerPage;

    // Denuncias a mostrar en la página actual
    const currentDenuncias = ALL_DENUNCIAS.slice(indexOfFirstDenuncia, indexOfLastDenuncia);

    // Calcula el número total de páginas
    const totalPages = Math.ceil(totalDenuncias / denunciasPerPage);

    // Funciones para manejar el cambio de página
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    // ----------------------------------------


    // Función para renderizar los badges de estado
    const renderEstadoBadge = (estado) => {
        let className;
        switch (estado) {
            case 'En Trámite':
                className = 'en-tramite';
                break;
            case 'Resuelta':
                className = 'resuelta';
                break;
            case 'Vencida':
                className = 'vencida';
                break;
            default:
                className = 'pendiente'; // Si agregas un estado Pendiente
        }
        return <span className={`estado-badge ${className}`}>{estado}</span>;
    };


    return (
        <div
            className="fondo-pagina"
            style={{ backgroundImage: `url(${fondoUrl})` }}
        >
            {/* ... Enlace Ley y Encabezado/Logo se mantienen igual ... */}

            {/* Enlace Ley (Posición Absoluta) */}
            <a
                href="/documents/ley-2111-2021.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ley"
            >
                Ley 2111 de 2021
            </a>

            {/* Encabezado y Logo */}
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

            {/* WRAPPER: Contenedor que maneja el layout horizontal (Sidebar + Contenido) */}
            <div className="layout-wrapper">

                {/* Panel lateral izquierdo (Sidebar) */}
                <aside className="panel-usuario shadow-lg">
                    <div className="usuario-icono">👤</div>
                    <h3 className="usuario-nombre">ANDRES13</h3>
                    <p className="usuario-correo">andres1354@gmail.com</p>

                    <ul className="menu-usuario">
                        <li>Inicio</li>
                        <li className="activo">Asignadas</li>
                        <li>Notificaciones</li>
                        <li>Salir</li>
                    </ul>
                </aside>

                {/* Contenido Principal (TABLA Y FILTROS) */}
                <Container fluid className="main-content-area">

                    <Row>
                        <Col xs={12}>
                            <Card className="main-content-card shadow-lg">
                                <Card.Body className="p-4">

                                    {/* Título y Botón Regresar */}
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <h2 className="titulo-seccion-card">Asignadas</h2>
                                        <Button className="btn-regresar">Regresar</Button>
                                    </div>

                                    {/* Contenedor de Búsqueda y Filtros */}
                                    <div className="filtros-container mb-4">
                                        {/* ... Formulario de búsqueda ... */}
                                        <Form className="d-flex align-items-center">
                                            <Form.Control
                                                type="search"
                                                placeholder="Buscar..."
                                                className="me-2 search-input"
                                                aria-label="Search"
                                            />
                                            <Button className="search-button">
                                                🔍
                                            </Button>
                                            <Button className="filter-button ms-3">
                                                🎤
                                            </Button>
                                            <Form.Select className="filter-select ms-2">
                                                <option>Diligenciar</option>
                                                <option>...</option>
                                            </Form.Select>
                                        </Form>
                                    </div>

                                    {/* Contenedor de la Tabla - Aquí se aplica el scroll si hay muchos elementos */}
                                    <div className="table-wrapper">
                                        <Table hover responsive className="tabla-asignadas">
                                            <thead>
                                                <tr>
                                                    <th>RADICADO</th>
                                                    <th>FECHA DE ASIGNACIÓN</th>
                                                    <th>TIPO DE REQUERIMIENTO</th>
                                                    <th>DETALLE</th>
                                                    <th>MUNICIPIO</th>
                                                    <th>ESTADO</th>
                                                    <th>DÍAS ABIERTA</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* Iteramos sobre el subconjunto de denuncias de la página actual */}
                                                {currentDenuncias.map((denuncia, index) => (
                                                    <tr key={denuncia.radicado}>
                                                        <td>{denuncia.radicado}</td>
                                                        <td>{denuncia.fecha}</td>
                                                        <td>{denuncia.tipo}</td>
                                                        <td>
                                                            <a href="#" className="detalle-link" title={denuncia.detalle}>
                                                                <span role="img" aria-label="detalle">💬</span>
                                                            </a>
                                                        </td>
                                                        <td>{denuncia.municipio}</td>
                                                        <td>{renderEstadoBadge(denuncia.estado)}</td>
                                                        <td>{denuncia.dias}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>

                                    {/* Paginación - Se actualiza con la lógica */}
                                    <div className="paginacion-container d-flex justify-content-between align-items-center mt-3">
                                        <p className="mb-0">
                                            Mostrando {indexOfFirstDenuncia + 1} a {Math.min(indexOfLastDenuncia, totalDenuncias)} de {totalDenuncias} resultados
                                        </p>
                                        <div>
                                            <Button
                                                size="sm"
                                                className="btn-paginacion me-2"
                                                onClick={goToPrevPage}
                                                disabled={currentPage === 1} // Deshabilita en la primera página
                                            >
                                                Anterior
                                            </Button>
                                            <Button
                                                size="sm"
                                                className="btn-paginacion"
                                                onClick={goToNextPage}
                                                disabled={currentPage === totalPages || totalPages === 0} // Deshabilita en la última página
                                            >
                                                Siguiente
                                            </Button>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Frase final */}
            <footer className="frase">
                “Cuidar el medio ambiente es valorar la vida”
            </footer>
        </div>
    );
};

export default Asignadas;