import styles from "./PostPreview.module.scss";
import { ReactComponent as DeleteIcon } from "../../delete-icon.svg";
import { ReactComponent as EditIcon } from "../../edit-icon.svg";

const PostPreview = ({
  title,
  onDelete,
  publishedDate,
  updatedDate,
  onEdit,
}) => {
  return (
    <div className={styles.postPreview}>
      <h3>{title}</h3>
      <div className={styles.postPreviewActions}>
        <div>
          <span>published at:{publishedDate}</span>
          <span>Updated at:{updatedDate}</span>
        </div>
        <div>
          <span>
            <EditIcon onClick={onEdit}></EditIcon>
          </span>
          <span>
            <DeleteIcon onClick={onDelete}></DeleteIcon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
