import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPages, Pleasure, Page404 } from './component/pages';
import OutCoffee from './component/pages/OutCoffee';

export const tabsRoutes = {
    home: '/',
    outCoffee: 'OutCoffee',
    pleassure: 'ForYourPleassure'
};
function App() {
    return (
        <div >
            <BrowserRouter>
                <main>
                    <Routes>
                        <Route path={`${tabsRoutes.home}`} element={<MainPages />} />
                        <Route path={`${tabsRoutes.outCoffee}`} element={<OutCoffee />} />
                        <Route path={`${tabsRoutes.pleassure}`} element={<Pleasure />} />
                        <Route path='*' element={<Page404 />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
