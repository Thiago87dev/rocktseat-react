import Posts from "./components/Posts";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Posts
        author="Thiago Alves"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta repudiandae ea officiis ad possimus repellendus tempora ut sit aspernatur nihil nulla eos ipsum soluta, quisquam quo? Vel, quaerat autem!"
      />
      <Posts
        author="Amanda Ribeiro"
        content="Algum outro post"
      />
        </main>
      </div>
    </div>
  )
}

export default App;
