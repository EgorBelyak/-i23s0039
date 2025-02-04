import { Children } from "react"
import styles  from './Secondconponent.module.css';

export const Main = ({ children }) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}

export default Main;