"use client"
import Link from "next/link"
import Image from "next/image"
import styles from './NavMenu.module.css';
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


function NavMenu() {

    const isUserLoggedIn = false;
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response)
        }
        setProviders();
    }, [])


    return (
        <nav className={styles.navbar}>
            <Link href={'/'}>
                <Image
                    src="/Logo_TV_2015.svg"
                    width={100}
                    height={109}
                    alt="Logo"
                />
            </Link>
            <div>
                {isUserLoggedIn ?
                    (

                        <div>

                            <button onClick={()=>signOut()}> SignOut</button>


                            <Image
                                src="/Logo_TV_2015.svg"
                                width={30}
                                height={30}
                                alt="profile"

                            />
                        </div>
                    ) :
                    (<>
                        {providers &&
                            Object.values(providers)
                                .map((provider) => (
                                    <button
                                        type="button"
                                        key={provider.name}
                                        onClick={() => signIn(provider.id)}
                                    >
                                        SignIn
                                    </button>
                                ))

                        }
                        <ul className={styles.list}>

                            <li>
                                <Link href={'/about'}>About</Link>
                            </li>
                            <li>
                                <Link href={'/contact'}>Contact</Link>

                            </li>
                            
                           

                        </ul>
                    </>)}

            </div>






        </nav>
    )
}

export default NavMenu