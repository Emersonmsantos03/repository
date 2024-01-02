import './card.css'
import image1 from '/public/img/logocss.png'
import image2 from '/public/img/logofirebase.png'
import image3 from '/public/img/logohtml.png'
import image4 from '/public/img/logojava.png'
import image5 from '/public/img/logojs.png'
import image6 from '/public/img/logomysql.png'
import image7 from '/public/img/logo-react.png'

let Card = () => {
    const cards = [
        {id: '1', image: image1, name: 'CSS'},
        {id: '2', image: image2, name: 'FIREBASE'},
        {id: '3', image: image3, name: 'HTML'},
        {id: '4', image: image4, name: 'JAVA'},
        {id: '5', image: image5, name: 'JAVASCRIPT'},
        {id: '6', image: image6, name: 'MYSQL'},
        {id: '7', image: image7, name: 'REACT'},
    ]



    return(
        <div className='card-container'>
        {cards.map( ({id, name, image}) => (
            <div key={id} className='card'>
                <img src={image} />
                <h3>{name}</h3>
            </div>

        
        ))}
        </div>
    )
       
}


export default Card