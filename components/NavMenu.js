import Link from "next/link"
import Image from "next/image"
import styles from './NavMenu.module.css';


export default function NavMenu() {

    return (
        <div className={styles.navbar}>
            <Link href={'/'}>
                <Image
                    src="/Logo_TV_2015.svg"
                    width={100}
                    height={109}
                    alt="Logo"
                />
            </Link>
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
    )
}