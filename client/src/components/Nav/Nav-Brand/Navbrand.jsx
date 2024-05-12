import './NavBrand.css'
import { Link } from 'react-router-dom';
import logo from './stylemart.png'
const NavBrand = () => {
    return ( 
        <div href="#home" className='navbrand__container'>
           <div >
               <Link to="/"><img style={{width:"80%"}} src={logo}/></Link>
            </div>
        </div>
     );
}
 
export default NavBrand;