import logout from '../assets/logout.png'
import '../style/navbar.css';

export function Navbar(){

    return(
        <div className="bar">
           <div className="navbar-menu">
            <div className="logo-container">
                    <h2>logo</h2>
                </div>
                <div className="logout">
                    <a href='/'><img src={logout} alt="Sair do sistema" /></a>
                </div>
           </div>
        </div>
    )
}