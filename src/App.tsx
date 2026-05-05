import { Heading } from "./components/Heading";

import './styles/themes.css';
import './styles/global.css';


export function App() {
    return (
        <>
            <Heading attr={123} attr2='String'>Olá mundo 1</Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum illo aut, vitae, nobis velit soluta nam voluptatibus fugiat odio molestias, corrupti nisi sit enim rerum temporibus necessitatibus dolores optio.</p>
        </>
    )
}