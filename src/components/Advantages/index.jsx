import AdvCard from '../AdvCard'
import './advantages.css'

let Advantages = () => {
    return(
        <section className='advantages'>
            <div className='advantages-title'>
                <h1>Vantagens de uma <b>Landing Page</b></h1>
            </div>

            <div className='advantages-cards'>
            <AdvCard />
            </div>
            <div className='advantages-bottom'>
            <a href=''><button>Saiba mais!</button></a>
            </div>

        </section>

    )
}

export default Advantages