import PropTypes from "prop-types";
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import Avatar from "./Avatar";

const Comment = ({ content, onDeleteComment }) => {
  
  function handleDeleteComment() {
    console.log("deletar");
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar withoutBorder={true} src="https://github.com/luizomf.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Alves</strong>
              <time title="11 de maio ás 08:13h" dateTime="2023-05-11 08:13:18">
                Cerca de 2h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
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

Comment.propTypes = {
  content: PropTypes.string,
  onDeleteComment: PropTypes.func,
};

export default Comment;
