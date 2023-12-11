import './aboutme.css'


let AboutMe = (props) =>{
    return(

        <section className='about-me'>
       <><div className='profile'>

            <img
                src='/public/img/profile.png'
                 />

        </div><div className='info'>
                <h1> Olá, eu sou o <b>Emerson</b></h1>
                <p><b>Seja bem-vindo</b> ao universo onde a inovação encontra o design, e a tecnologia se torna a linguagem visual dos negócios. Como desenvolvedor <b>Front-End</b>,
                     meu propósito é trazer vida à sua visão, criando <b>experiências digitais</b> que transcendem o comum!</p>
            </div></>
            </section>

     
    )
}




export default AboutMe