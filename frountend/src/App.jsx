import './App.css'
import './index.css'
import Header from './comopnents/header';
import Footer from './comopnents/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from 'react-router-dom';



function App() {
return <>
<Header/>
<Outlet/>
<Footer/>
</>;
}

export default App;
