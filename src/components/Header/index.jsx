import Buttons from '../Buttons/index';
import Logo from '../Logo/index';
import './header.css'






let Header = () => {
    return(
        <header className='header'>
        <nav className='nav'>
            <div>
            <Logo/>
            </div>
            <div className='nav-buttons'>
            <Buttons name='Início' className='inicio' />
            <Buttons name='Vantagens' className='sobre'/>
            <Buttons name='Landing Page' className='sobre'/>
            <Buttons name='Habilidades' className='sobre'/>
            <Buttons name='contato' className='contato' />
            </div>
        </nav>
        </header>
    )
}





export default Header;