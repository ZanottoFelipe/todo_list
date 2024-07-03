import React from "react";
import { ITask } from "../interfaces/Task";
import styles from "./taskList.module.css";
type Props = {
  taskList: ITask[];
  hendleDelete(id: number): void;
  handleEdit(task: ITask): void;
};

const Tesklist = ({ taskList, hendleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil" onClick={() => handleEdit(task)}></i>
              <i
                className="bi bi-trash"
                onClick={() => hendleDelete(task.id)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p> nao tem tarefas</p>
      )}{" "}
    </>
  );
};

export default Tesklist;
