
import { useState } from 'react'
import { Header } from '../../components/Header';
import background from '../../assets/background.png';
import ItemList from '../../components/ItemList';


import './styles.css'

function App() {
    const [user, setUser] = useState('');
    const [correntUser, setCurrentUser] = useState(null);
    const [repos, setRepos] = useState(null);

    const handleGetData = async () => {
        const userData = await fetch(`https://api.github.com/users/${user}`);
        const newUser = await userData.json();

    }


    return (
        <div className="App">
            <Header />
            <div className="conteudo">
                <img src={background} className="background" alt="background app" />


                <div className="info">
                    <div>
                        <input name="usuario" value={user}
                            onChange={event => setUser(event.target.value)}
                            placeholder="@username" />
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