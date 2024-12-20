import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.facebook.com/juanmanuel.castrochavarro?locale=es_LA'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://www.linkedin.com/in/juan-manuel-castro-chavarro-9b0128262/'>
            <img src="/img/linkedin2.png" alt='Linkedl' />
        </a>
        <a href='https://www.instagram.com/manuel.280/'>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por IngJuanMa</strong>
</footer>
}

export default Footer