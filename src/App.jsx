import './styles/App.scss';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { MainPages, OutCoffee, Pleasure, Page404 } from './component/pages'
import { useState, useEffect } from 'react';
import NavBar from './component/navBar/NavBar';
export const tabsRoutes = {
    home: '/',
    outCoffee: 'OutCoffee',
    pleassure: 'ForYourPleassure'
};
function App() {
    return (
        <div className='App' >
            <BrowserRouter>
                <NavBar />
                <main>
                    <Context />
                </main>
            </BrowserRouter>
        </div>
    );
}

const Context = () => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location, displayLocation]);
    return (
        <div
            className={`${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                    setTransistionStage("fadeIn");
                    setDisplayLocation(location);
                }
            }}
        >
            <Routes location={displayLocation}>
                <Route path={`${tabsRoutes.home}`} element={<MainPages />} />
                <Route path={`${tabsRoutes.outCoffee}`} element={<OutCoffee />} />
                <Route path={`${tabsRoutes.pleassure}`} element={<Pleasure />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </div>
    )
}

export default App;
