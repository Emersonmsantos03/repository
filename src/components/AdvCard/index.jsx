import './advcard.css'
import focus from '/public/img/icons/focus.png'
import personal from '/public/img/icons/personalization.png'
import leads from '/public/img/icons/leads.png'
import professional from '/public/img/icons/profissional.png'

let AdvCard = () => {
    let infos = [
        {image: focus, title: 'Foco direcionado', info: 'A landing page concentra-se em um único objetivo, proporcionando aos visitantes uma experiência focada e direta, aumentando as chances de conversão.'},
        {image:personal, title: 'Persinalização aprimorada', info: 'Permite adaptar a mensagem e o design de acordo com a audiência e a oferta, proporcionando uma experiência mais personalizada, o que pode resultar em maior engajamento e conversões.' },
        {image: leads, title: 'Geração de Leads qualificados', info: 'Utilizando formulários de contato e chamadas à ação estratégicas, a landing page pode ajudar na captação de leads de qualidade, fornecendo à empresa informações valiosas sobre potenciais clientes de maneira profissional.' },
        {image: professional , title: 'Profissionalismo na apresentação', info: 'Uma landing page bem projetada transmite uma imagem profissional da empresa ou produto, estabelecendo confiança e credibilidade junto aos visitantes.'},
    ]

    return (
        <div className='cards-info-container'>
        <div className=' advs-cards'>
        {infos.map(({image, title, info}, index) => (
            
            <div className='adv-card' key={index}>
            <div>
                <img src={image} alt={index}/>
            </div>
            <div className='adv-card-texts'>
                <h1>{title}</h1>
                <p>{info}</p>
            </div>
        </div>

        ))}
        </div>
        </div>



        )
}

   

export default AdvCard