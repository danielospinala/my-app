"use client"
import Link from "next/link"
import Image from "next/image"
import styles from './NavMenu.module.css';
import { useState, useEffect } from "react";


function NavMenu() {
    const isUserLoggedIn = false;

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
            <div>
            { isUserLoggedIn ? 
            (
            
            <div>
                <Link href={'/'}>
                <button> logout</button>
                </Link>
                
                <Image
                src="/Logo_TV_2015.svg"
                width={30}
                height={30}
                alt="profile"
                
                />
            </div>
             ): 
            (<>
                <ul className={styles.list}>
                
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/contact'}>Contact</Link>

                </li>
                <li>
                    
                </li>
                <li>
                <Link href={'/login'}>
                <button> login</button>
                </Link>
                </li>

            </ul>
            </>)}

            </div>
            
            




        </div>
    )
}

export default NavMenu