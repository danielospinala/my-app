import Link from "next/link"
import Image from "next/image"
import styles from './Footer.module.css';


export default function Footer() {

    return (
        <div className={styles.footer}>
            <div>
            <ul className={styles.list}>
                <li>

                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/contact'}>Contact</Link>

                </li>

            </ul>

            </div>
            <div>

            </div>
            <div>
                
            </div>
         
        </div>
    )
}