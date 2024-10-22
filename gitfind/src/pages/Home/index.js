import { Header } from '../../components/Header';
import background from '../../assets/background.png';

import './styles.css'

function App() {
    return (
        <div className="App">
            <Header />
            <div className="conteudo">
                <img src={background} className="background" alt="background app" />
            </div>
        </div>
    );
}

export default App;