import { Container } from './components/Container';
import { Menu } from './components/Menu';
import { Logo } from './components/Logo';

import './styles/themes.css';
import './styles/global.css';
import { CountDown } from './components/CountDown';


export function App() {
    return (
        <>
            <Container>
                <Logo></Logo>
            </Container>
            <Container>
               <Menu />
            </Container>
            <Container>
                <CountDown />
            </Container>
            <Container>
                <form action="" className="form">
                    <div className="formRow">
                        <label htmlFor="meuInput">Task</label>
                        <input type="text" id="meuInput" />
                    </div>
                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="formRow">
                        <p>Ciclos</p>
                        <p>0 0 0 0 0</p>
                    </div>
                    <div className="formRow">
                        <button>Enviar</button>
                    </div>
                </form>
            </Container>
        </>
    )
}