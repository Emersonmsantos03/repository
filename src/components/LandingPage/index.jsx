import './landingpage.css'
import devices from '/public/img/devices.png'

let LandingPage = () => {

    return(
        
        <section className='landingPage-container'>
            <div className='landingPage-image'>
            <img src={devices} alt='img'/>
            </div>
            <div className='landingPage-texts'>
                <h1>Você sabe o que é uma landing page?</h1>
                <p>Explore uma vitrine online exclusiva, 
                    projetada sob medida para cativar seu público-alvo. Uma landing page é mais do que uma página; 
                    é um convite visualmente atraente que conta a história única dos seus produtos ou serviços. 
                    Transforme visitantes em clientes, proporcionando uma experiência de compra personalizada e eficaz. 
                    Vamos criar juntos a porta de entrada para o seu sucesso comercial!</p>
            </div>
            
            
        </section>
    )
}


export default LandingPage