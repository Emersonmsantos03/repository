import './footer.css'
import logo from '/public/img/logo-branco-azul.svg'
import Github from '/public/img/socialMedias/Github.png'
import Gmail from '/public/img/socialMedias/Gmail.png'
import Instagram from '/public/img/socialMedias/instagram.png'
import Whatsapp from '/public/img/socialMedias/whatsapp.png'

let Footer = () => {

    let medias = [
        {image: Github, link: 'https://github.com/Emersonmsantos03' },
        {image: Gmail, link: 'https://github.com/Emersonmsantos03'},
        {image: Instagram, link: 'https://github.com/Emersonmsantos03'},
        {image: Whatsapp, link: 'https://github.com/Emersonmsantos03'}
    ]

    return(
        <footer className='bot'>
            <div className='right'>
                <div className='developed-by'>
                
                <img src={logo} alt='logo'/>  
                </div> 
                <h4>© 2023 Emerson Moraes. Todos os direitos reservados.</h4>

            
            </div>
            <div className='infos'>
                <h3>Contatos:</h3>

                <div className='infos-logos'>
                {medias.map(({image, link}, index) =>(
                    
                        <a href={link} key={index} target="_blank"><img src={image} /></a>
                
                ))}
                </div>
                

            </div>

        </footer>

    )
}

export default Footer