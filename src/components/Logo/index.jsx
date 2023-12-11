import './logo.css'
import logo from '/public/img/logo-sec.svg'

let Logo = () =>{

    return(
        <div>
            <img className='logo' src={logo} alt='Logo'/>
        </div>
    )
}



export default Logo;