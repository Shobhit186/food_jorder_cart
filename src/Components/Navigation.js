import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
const Navigation = () => {
    const {totalItems} = useCart();
    const cart = {
        background : '#F59E0D',
        display: 'flex',
        padding:'6px 12px',
        borderRadius : '50px',
    }
    const menu = {
        border : '2px solid #F59E0D',
        padding:'6px 12px',
        borderRadius : '50px',
    }
    const logo = {
        border : '2px solid transparent',
        padding:'6px 12px',
        borderRadius : '50px',
        fontSize : '25px',
        fontWeight : 'bold',
    }
    return (
        <>
           <nav className="container mx-auto flex items-center justify-between py-4">
               
                   <Link to="/">
                   <div className="flex" style={logo}>
                       <img style={{height: 35, borderRadius: 10}} src="/images/img4.jpg" alt="logo" /><span className="ml-2">Zomato</span></div>
                   </Link>
                   <ul className="flex items-center">
                       <li style={menu} className="hover:bg-orange-500"><Link to="/">Home</Link></li>
                       <li className="ml-6" style={menu}><Link to="/products">Products</Link></li>
                       <li className="ml-6"><Link to="/cart">
                         <div style={cart}><span>{totalItems}</span>
                         <img className="ml-2" style={{height: 25}} src="/images/cart1.jpg" alt="cart"/></div>
                       </Link></li>
                   </ul>
           </nav>
        </>
    )
}

export default Navigation;

