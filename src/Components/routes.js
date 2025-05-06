// Routes.js
import Home from './Home';
import Contact from './Contact';
import About from './About';

const ROUTES = [
    { 
        path: '/', 
        exact: true,
        main: <Home /> 
    },
    { 
        path: '/contact',
        exact: true, 
        main: <Contact /> 
    },
    { 
        path: '/about', 
        exact: true,
        main: <About /> }
];

export default ROUTES;


