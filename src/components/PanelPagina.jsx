function Panel(encabezado, children){
    return(
        <section className ="curso">
            <h2>{encabezado}</h2>
            <div>{children}</div>
        </section>
    )
}
export default Panel