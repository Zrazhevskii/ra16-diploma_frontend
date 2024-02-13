import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Main } from './pages/Main';
import { Footer } from './components/Footer';

function App() {
    return (
        <div className='main_wrapper'>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
