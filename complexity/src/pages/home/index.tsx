import { Complexity } from '../../assets'
import './home.css'

type Props = {}

const Home = (props: Props) => {
  return (
    <main className='-main-home'>
      <section>
        <img src={Complexity} alt="complexity" />
      </section>
      <section>
        <h1>You’ll never shop the same</h1>
        <p>
          With complexity, we find opportunities and deals that you would never
          have known about or throught possible
        </p>
      </section>
    </main>
  )
}

export default Home
