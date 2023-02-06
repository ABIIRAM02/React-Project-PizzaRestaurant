import './Nav.css'
import { Link } from 'react-router-dom'
function Nav()
{
    return(
        <section className="nav">

          <div className='nav_left'>

           <div><i class='bx bx-phone'></i></div> 
           <div className='order'>
           <h5>ORDER NOW!</h5>
           <h1>123 123 123</h1>
           </div>
           
           </div>

           <div className="nav_center">

            <ul>
                <li><Link to="/"> home </Link></li>
                <li><a href="#menu"> menu </a></li>
                <span >AMIOS</span>
                <li><a href="#events"> events </a></li>
                <li><a href="#footer"> contact </a></li>
            </ul>

           </div>

           <Link to='/cart' className="i-cart">

            <i class='bx bx-cart-alt'></i>
    
            </Link>

        </section >
    )
}

export default Nav