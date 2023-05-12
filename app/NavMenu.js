import Link from "next/link"

export default function NavMenu(){

    return(
        <div>
            <Link href={'/contact'}>Contact</Link>
            
            <Link href={'/about'}>About</Link>
        </div>
    )
}