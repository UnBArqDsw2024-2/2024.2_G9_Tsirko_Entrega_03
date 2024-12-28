import { BrowserRouter as Router, Routes as Switch, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Avaliacoes from './pages/Avaliacoes'; 
import Home from './pages/Home';



const Routes = () => {
    return (
        <Router>
            <Header />
            <MainContent />
        </Router>

    );
};

const MainContent = () => {
    const location = useLocation();

    // Definir quais rotas devem mostrar a Sidebar
    //const showSidebar = ['/agendamentos', '/procedimentos', '/funcionamento', '/afastamento'].includes(location.pathname);

    return (
        <div className="container-fluid h-100">
            <div className="row h-100">
               

                {/* Conteúdo principal das rotas */}
                <Switch>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/avaliacoes" exact element={<Avaliacoes />} />
                    
                </Switch>
            </div>
        </div>
    );
};
export default Routes;    