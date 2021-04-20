import Nav from '../components/Nav.js'
import '../styles/Banner.css'
import logo from '../assets/leaf.png'
import {Link} from 'react-router-dom'

function Banner (){
    const title ="La maison jungle"
    return (
    <div className="lmj-banner">
        <div className="lmj-brand">
            <Link to='/' className='lmj-link'>
                <img src={logo} alt='la maison jungle' className="lmj-logo"></img>
                <h1 className='lmj-title'>{ title }</h1>
            </Link>
        </div>
        <Nav/>
    </div>
    )
}
//notation ES6 qui évite d'avoir à utiliser les accolades au moment de l'import
export default Banner