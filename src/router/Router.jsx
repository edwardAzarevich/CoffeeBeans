import { useState, useEffect } from 'react';
import '../styles/routerStyle.scss';
import { useLocation } from 'react-router-dom';

const Router = () => {
    return (
        <div>
            123
        </div>
    );
};

const Context = () => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location, displayLocation]);
    return (
        <div>

        </div>
    )
}

export default Router;
