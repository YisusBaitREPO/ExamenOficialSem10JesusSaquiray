function Header(props){

    return (
    <>
        <header>
            <h1>{props.tituloo}</h1>
            <p>{props.inst}</p>
        </header>
    </>
    )
}

export default Header;