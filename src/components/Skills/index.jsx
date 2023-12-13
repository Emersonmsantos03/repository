import './skills.css'
import '/src/App.css'
import image1 from '/public/img/logocss.png'
import image2 from '/public/img/logofirebase.png'
import image3 from '/public/img/logohtml.png'
import image4 from '/public/img/logojava.png'
import image5 from '/public/img/logojs.png'
import image6 from '/public/img/logomysql.png'
import image7 from '/public/img/logoreact.png'

let Skills = () =>{

    const hab = [
        {id: '1', image: {image1}},
        {id: '2', image: {image2}},
        {id: '3', image: {image3}},
        {id: '4', image: {image4}},
        {id: '5', image: {image5}},
        {id: '6', image: {image6}},
        {id: '7', image: {image7}},
    ]

    return(
        <section>
        <div className='title'>
            <h1>Skills</h1>
        </div>

        <div className='skills'>
        {hab.map( ({id, image}) => (
            <img key={id} src={image} alt={`Skill ${id}`} className="teste2"/>

        
        ))}
        </div>
        </section>
    )
        
 
}


export default Skills