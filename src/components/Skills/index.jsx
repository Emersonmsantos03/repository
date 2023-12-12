import './skills.css'

let Skills = ({id, image}) =>{

    const hab = [
        {id: '1', image: 'public/img/logocss.png'},
        {id: '2', image: 'public/img/logofirebase.png'},
        {id: '3', image: 'public/img/logohtml.png'},
        {id: '4', image: 'public/img/logojava.png'},
        {id: '5', image: 'public/img/logojs.png'},
        {id: '6', image: 'public/img/logomysql.png'},
        {id: '7', image: 'public/img/logoreact.png'},
    ]

    return(
        <section>
        <div className='title'>
            <h1>Skills</h1>
        </div>

        <div className='skills'>
        {hab.map( () => (
            <img key={id} src={image} alt={`Skill ${id}`}/>


        ))}
        </div>
        </section>
    )
        
 
}


export default Skills