import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {

    return (
        <form action="" className="form">
            <div className="formRow">
                <DefaultInput labelText='task' id="meuInput" placeholder='Digite uma tarefa' type="text" />
            </div>
            <div className="formRow">
                <p>Próximo intervalo é de 25min</p>
            </div>
            <div className="formRow">
                <Cycles />
            </div>
            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} color="green" />
            </div>
        </form>
    );
}