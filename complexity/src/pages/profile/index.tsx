import './profile.css'
import Rating from '@mui/material/Rating'

type Props = {}

const Profile = (props: Props) => {
  return (
    <main className="-main-profile">
      <section>
        <aside>
          <label>NAME:</label>
        </aside>
        <aside>
          <label>EMAIL:</label>
        </aside>
        <aside>
          <label>PHONE:</label>
        </aside>
        <aside>
          <label>SHIPPING ADDRESS</label>
        </aside>
        <aside>
          <label>SELLER RATING</label>
          <Rating name="read-only" value={4} readOnly />
        </aside>
      </section>
    </main>
  )
}

export default Profile
