function Footer(props){
    return (
    <>
        <footer id="contacto">
    <p>IESP "TRUJILLO" ©{props.anho}</p>
    <p>Programa de Estudios: {props.prog}</p>
    <p>Todos los derechos reservados.</p>
    </footer>
    </>
    )
}

export default Footer;