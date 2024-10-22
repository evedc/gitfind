import { Header } from '../../components/Header';
import background from '../../assets/background.png';
import ItemList from '../../components/ItemList';


import './styles.css'

function App() {
    return (
        <div className="App">
            <Header />
            <div className="conteudo">
                <img src={background} className="background" alt="background app" />


                <div className="info">
                    <div>
                        <input name="usuario" placeholder="@username" />
                        <button>Buscas</button>
                    </div>
                    <div className="perfil">
                        <img src="https://avatars.githubusercontent.com/u/166746018?v=4" className="profile"></img>
                        <div>
                            <h3>Évelim Dornelles</h3>
                            <span>@evedc</span>
                            <p>Estudante de Ciência da Computação | Front-End Developer.</p>
                        </div>
                    </div>
                    <hr />

                    <div>
                        <h4 className='repositorio'>Repositórios</h4>
                        <ItemList title="teste1" description="teste de descrição"></ItemList>
                        <ItemList title="teste1" description="teste de descrição"></ItemList>
                        <ItemList title="teste1" description="teste de descrição"></ItemList>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default App;