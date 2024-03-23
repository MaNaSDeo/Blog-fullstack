import styles from "./PostView.module.scss";

const PostView = ({ title, content, author, publishedDate, updatedDate }) => {
  function formatDateString(dateString) {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "UTC",
    };
    return date.toLocaleString("en-US", options);
  }

  return (
    <div className={styles.postView}>
      <h1 className={styles.postTitle}>{title}</h1>
      <div className={styles.postMeta}>
        <span>
          Author:<span className={styles.highlight}> {author} </span>
        </span>
        <span>
          Published at:
          <span className={styles.highlight}>
            {formatDateString(publishedDate)}
          </span>
        </span>
        <span>
          Updated at:
          <span className={styles.highlight}>
            {formatDateString(updatedDate)}
          </span>
        </span>
      </div>
      <article className={styles.postContent}> {content} </article>

      <h2>Comments:</h2>
    </div>
  );
};

export default PostView;
