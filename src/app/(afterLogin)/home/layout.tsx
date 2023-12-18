import { ReactNode } from "react";
import styles from "@/app/page.module.css";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default HomeLayout;
