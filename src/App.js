
import './App.css';
import LuasSegitiga from './components/LuasSegitiga';
import  LuasLingkaran  from './components/LuasLingkaran';
import { Counter } from './components/counter';
import { CounterProvider } from './context/CounterProvider';
import { CounterTwoNumber } from './components/CounterTwoNumber';
import { FormText } from './components/FormText';
import { Nilai } from './components/Nilai';
import { Route, Routes} from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { Layout } from './layout/Layout';
import { FormLogin } from './components/FormLogin';
function App() {
  return (
    <div className='App'>
      <CounterProvider>
      <Routes>
        <Route path="/" element={<Layout><LuasSegitiga/></Layout>}/>
        <Route path="/luas-lingkaran" element={<Layout><LuasLingkaran/></Layout>}/>
        <Route path="/counter" element={<Layout><Counter/></Layout>}/>
        <Route path="/counter-two-number" element={<Layout><CounterTwoNumber/></Layout>}/>
        <Route path="/form-text" element={<Layout><FormText/></Layout>}/>
        <Route path="/nilai" element={<Layout><Nilai/></Layout>}/>
        <Route path="/login" element={<FormLogin/>}/>
        <Route path="*" element={<NotFound/>}/>
        
      </Routes>
      </CounterProvider>
    </div>
  );
}
export default App;