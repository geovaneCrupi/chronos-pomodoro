import { Container } from './components/Container';
import { Heading } from './components/Heading';

import './styles/themes.css';
import './styles/global.css';


export function App() {
    return (
        <>
            <Container>
                <Heading>LOGO</Heading>
            </Container>
            <Container>
               <Heading>MENU</Heading>
            </Container>
        </>
    )
}