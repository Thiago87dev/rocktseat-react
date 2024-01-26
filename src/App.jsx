import Posts from "./components/Posts";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Thiago87dev.png",
      name: "Thiago Alves",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-01-12- 14:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rafaballerini.png",
      name: "Rafaella Ballerini",
      role: "Content creator",
    },
    content: [
      { type: "paragraph", content: "Oi pessoal 👋" },
      {
        type: "paragraph",
        content: "Aqui eu vou falar qualquer coisa",
      },
      {
        type: "paragraph",
        content: "Aqui eu tbm estou falando qualquer outra coisa 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-02-14- 17:35:12"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Posts
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
