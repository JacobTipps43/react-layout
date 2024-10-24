import{Outlet, link} from 'react-router-dom';
import "./components/header"
import Header from './components/header';

const Layout = () => {
    return (
        <>
            <Header />

            <Outlet />
            
            <p>This is my footer</p>
        </>
    );
}

export default Layout;