import { Fragment } from "react/jsx-runtime";
import { Heading } from "./components/Heading";

import './styles/themes.css';
import './styles/global.css';


export function App() {
    console.log('Oi');
    return (
        <Fragment>
            <Heading />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum illo aut, vitae, nobis velit soluta nam voluptatibus fugiat odio molestias, corrupti nisi sit enim rerum temporibus necessitatibus dolores optio.</p>
        </Fragment>
    )
}