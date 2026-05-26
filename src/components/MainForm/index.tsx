import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useState } from "react";

export function MainForm() {

    const [taskName, setTaskName] = useState('');

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('DEU CERTO');
    }

    return (
        <form action="" onSubmit={handleCreateNewTask} className="form">
            <div className="formRow">
                <h1>{taskName}</h1>
                <DefaultInput 
                labelText='task' 
                id="meuInput" 
                placeholder='Digite uma tarefa' 
                type="text" 
                value= {taskName}
                onChange={e => setTaskName(e.target.value)} />
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