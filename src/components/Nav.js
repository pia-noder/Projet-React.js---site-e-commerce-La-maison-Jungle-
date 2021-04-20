import '../styles/Nav.css'
import {Link} from 'react-router-dom'
import { MdShoppingCart } from "react-icons/md";
import { MdFace } from "react-icons/md";

function Nav () {

    return(
        <nav className="lmj-nav">
            <ul className="lmj-list">
                <Link to='/about' className="lmj-link">
                    <li className="lmj-list-item">About</li>
                </Link>

                <Link to='/shop' className="lmj-link">
                    <li className="lmj-list-item">Products</li>
                </Link>

                <Link to='/user' className='lmj-link'>
                    <li className="lmj-list-item user">
                        <MdFace size={30} value={{ className: 'user' }} />
                    </li>
                </Link>
            
                <Link to='/cart' className='lmj-link'>
                    <li className="lmj-list-item">
                        <MdShoppingCart size={30} className="cart-icon"/>
                    </li>
                </Link>
                
            </ul>
        </nav>
    );
}

export default Nav;