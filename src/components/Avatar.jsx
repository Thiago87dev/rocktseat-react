import PropTypes from "prop-types";
import styles from "./Avatar.module.css";

const Avatar = ({
  withoutBorder,
  src = "https://github.com/Thiago87dev.png",
}) => {
  return (
    <img
      className={withoutBorder ? styles.avatar : styles.avatarWithBorder}
      src={src}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  withoutBorder: PropTypes.bool,
};

export default Avatar;
