import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <ul className="sidenav">
            <li>
            <Link to="/" className="active">Home</Link>
            
            </li>
            <li>
                <Link to="/news" className="#news">News</Link>
            </li>
            <li>
                <Link to="/contact" className="#contact">Contact</Link>
            </li>
            <li>
            <Link to="/about" className="#about">About</Link>
            </li>
      </ul>
      
  )
  }
  
  export default Header;