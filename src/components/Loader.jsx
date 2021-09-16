import { ImSpinner2 } from "react-icons/im";
import styles from "./Loader.module.css";

export function Loader() {
  return (
    <div className={styles.loader}>
      <ImSpinner2 className={styles.loading} size={70} />
    </div>
  );
}
