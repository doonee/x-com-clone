import styles from "@/app/page.module.css";
import { ReactNode } from "react";

const Layout = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
};

export default Layout;
