import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
  title: "Home",
  description: "This is home page" 
}

export default async function Home({params}) {
  const isUserLoggedIn = false;

  return (
    <main className={styles.main}>
      <div>
      {isUserLoggedIn ? ( <div>LogOut</div> ):( <div>LogIn</div>)}
       
        <h1>Main Page</h1>
        </div>

    </main>
  )
}
