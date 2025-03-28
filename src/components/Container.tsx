import { Children } from 'react';
import styles from './Container.module.css';

type ContainerProps = {
    children:React.ReactNode;
}

export function Container ({children}: ContainerProps){
    return(
        <div className={styles.Container}>
            <div className={styles.content}>{Children}</div>
        </div>
    )
}