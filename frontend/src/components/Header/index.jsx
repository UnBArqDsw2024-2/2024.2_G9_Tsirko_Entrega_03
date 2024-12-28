import {Link, useLocation } from 'react-router-dom'; 




const Header = () => {
    const location = useLocation(); 
    return(
        <header >
            <div className="container-fluid d-flex justify-content-start">
            <div className="d-flex align-items-center">
            <ul className="p-0 m-0 d-flex list-unstyled">
              
            
                <li className="mx-3">
                    <Link 
                        to="/" 
                        className={location.pathname === '/' ? 'active' : ''}
                        >
                        <span className="mdi mdi-home-circle">Home</span>
                    
                    </Link>                   
                </li>
                <li className="mx-3">
                    <Link 
                        to="/avaliacoes"
                        className={location.pathname === '/avaliacoes' ? 'active' : ''}
                        > 
                        <span className="mdi mdi-star-box">Avaliações</span> 
                       
                    </Link>
                </li>
                
                
            </ul>

            </div>
            
           
            
            </div>
            
        </header>
    );
};

export default Header; 