import { useContext } from 'react';
import styles from './styles.module.css'
import { TaskContext } from '../../contexts/TaskContext';


export function CountDown() {
  const taskContext = useContext(TaskContext);
  console.log(TaskContext);

  return (
    <div className={styles.container}>00:00</div>
  );
}