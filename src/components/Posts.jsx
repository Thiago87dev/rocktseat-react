import { useState } from "react";
import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Posts.module.css";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import PropTypes from "prop-types";

const Posts = ({ author, publishedAt, content }) => {
  const [comments, setComments] = useState(["post muito legal hein."]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(e) {
    e.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function hendleNewCommentChange(e) {
    setNewCommentText(e.target.value);
  }

  function deletecomment(comment) {
    console.log(`deletando o comentario: ${comment}`);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) =>
          line.type === "paragraph" ? (
            <p key={line.content}>{line.content}</p>
          ) : (
            <p key={line.content}>
              <a href="#">{line.content}</a>
            </p>
          )
        )}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="textArea"
          value={newCommentText}
          onChange={hendleNewCommentChange}
          placeholder="Deixe um comentario"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} onDeleteComment={deletecomment} key={comment} />;
        })}
      </div>
    </article>
  );
};

Posts.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  publishedAt: PropTypes.instanceOf(Date),
};

export default Posts;
