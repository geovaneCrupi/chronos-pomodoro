import { Container } from './components/Container';
import { Menu } from './components/Menu';
import { Logo } from './components/Logo';

import './styles/themes.css';
import './styles/global.css';


export function App() {
    return (
        <>
            <Container>
                <Logo></Logo>
            </Container>
            <Container>
               <Menu />
            </Container>
        </>
    )
}