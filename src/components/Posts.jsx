import styles from "./Posts.module.css";

const Posts = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src="https://github.com/Thiago87dev.png"
            alt="avatar"
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Thiago Alves</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio ás 08:13h" dateTime="2023-05-11 08:13:18">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
      </div>
    </article>
  );
};

export default Posts;
