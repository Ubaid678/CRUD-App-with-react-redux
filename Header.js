import { Link } from "react-router-dom";

const Header = () => {
    return ( 
       
    <nav>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Books">Books</Link></li>
          
        </ul>
      </nav> 
     
      );
}
 
export default Header;
        