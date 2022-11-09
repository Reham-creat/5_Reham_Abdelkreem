import Post from "../post/Post";
import "./posts.scss"

const Posts = () => {
  //Temprorary data
  const posts = [
    {
      id: 1,
      name: "Salma",
      userId:1,
      profilePic:
      "https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      img:"https://images.pexels.com/photos/9282609/pexels-photo-9282609.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    },
    {
      id: 2,
      name: "Salma",
      userId:1,
      profilePic:
      "https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      img:"https://images.pexels.com/photos/1009898/pexels-photo-1009898.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loadps://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&w=600",

    },
  ];
    return (
      <div className="posts">
        {posts.map(post =>(
     <Post post={post} key={post.id}/>
     ))}
     </div>
   )
 }
 
  export default Posts;