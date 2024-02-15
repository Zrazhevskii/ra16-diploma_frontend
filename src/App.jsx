import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Main } from './pages/Main';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { Contacts } from './pages/Contacts';
import { Card } from './pages/Card';

function App() {
    return (
        <div className='main_wrapper'>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/about' element={<About />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/catalog/:id' element={<Card />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
