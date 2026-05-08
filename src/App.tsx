import { Container } from './components/Container';
import { Menu } from './components/Menu';
import { Logo } from './components/Logo';

import './styles/themes.css';
import './styles/global.css';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';


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
                        <DefaultInput labelText='task' id="meuInput" placeholder='Digite uma tarefa' type="text" />
                    </div>
                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="formRow">
                        <Cycles />
                    </div>
                    <div className="formRow">
                        <DefaultButton icon={<PlayCircleIcon />} color="green" />
                    </div>
                </form>
            </Container>
        </>
    )
}