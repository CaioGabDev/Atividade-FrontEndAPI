import Image from "next/image";
import styles from "../styles/Loading.module.css";

export default function Loading() {
    return (
        <div className={styles.container}>
            <Image src="/loader.gif" alt="Carregando..." width={300} height={300} priority className={styles.image} />
        </div>
    );
}