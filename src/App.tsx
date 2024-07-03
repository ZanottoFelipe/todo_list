import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import TeskForm from "./components/TeskForm";
import Tesklist from "./components/Tesklist";
import { ITask } from "./interfaces/Task";
import Modal from "./components/Modal";
function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (modal) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTasks: ITask = { id, title, difficulty };
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTasks.id ? updatedTasks : task;
    });
    setTaskList(updatedItems);
    hideOrShowModal(false);
  };

  return (
    <div>
      <Modal
        children={
          <TeskForm
            btnText="Editar Tarefa"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <div className={styles.main}>
        <div>
          <h2>O que Você vai fazer Hoje?</h2>
          <TeskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h1>Suas tarefas:</h1>
          <Tesklist
            taskList={taskList}
            hendleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
