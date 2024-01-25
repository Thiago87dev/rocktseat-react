import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import Avatar from "./Avatar";

const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar withoutBorder={true} src="https://github.com/luizomf.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Alves</strong>
              <time title="11 de maio ás 08:13h" dateTime="2023-05-11 08:13:18">
                Cerca de 2h atrás
              </time>
            </div>
            <button title="Deletar">
                <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
