import { NextPage } from 'next'
import styles from '../styles/Home.module.css'

//Import components
import Menu from './components/Menu'

const Home = () => {
  return (
    <div className={styles.container}>
      <Menu/>
      <div id={styles.content}>
        <h1>Coming soon.</h1>
      </div>
    </div>
  )
}

export default Home
