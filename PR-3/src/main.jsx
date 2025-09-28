import './index.css';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Causes from './Components/Causes';
import Help from './Components/Help';
import Gallary from './Components/Gallary';
import Events from './Components/Events';
import Team from './Components/Team';
import Review from './Components/Review';
import Blog from './Components/Blog';
import Sponcer from './Components/Sponcer';
import Footer from './Components/Footer';

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <Header/>,
    <Banner/>,
    <Causes/>,
    <Help/>,
    <Gallary/>,
    <Events/>,
    <Team/>,
    <Review/>,
    <Blog/>,
    <Sponcer/>,
    <Footer/>
    </StrictMode>
)
