import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
  title: "Home",
  description: "This is home page" 
}

export default async function Home({params}) {

  return (
    <main className={styles.main}>
      
      <h1>Main Page</h1>

    </main>
  )
}
