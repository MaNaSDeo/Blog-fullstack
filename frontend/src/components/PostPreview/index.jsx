import styles from "./PostPreview.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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
