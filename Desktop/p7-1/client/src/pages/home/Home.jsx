import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./home.scss"

const Home = ({userId}) => {
  return (
    <div className="home">
      <Share/>
      <Posts userId={userId}/>
    </div>
  )
}

export default Home