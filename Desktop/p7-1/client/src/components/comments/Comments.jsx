import "./comments.scss"

const Comments = () => {
    //Temporary
    const comments= [
        {
          id: 1,
          desc:" but also the leap into electronic typesetting, remaining essentially unchanged. It waLetraset his is my comments",
          userId:1,
          name:"Reham",
          profilePic:
          "https://images.pexels.com/photos/13378650/pexels-photo-13378650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          
          
    
        },
        {
          id: 2,
          desc:" but also the leap into electronic typesetting, remaining essentially unchanged. It waLetraset his is my comments",
          userId:2,
          name:"Salma",
          profilePic:
          "https://images.pexels.com/photos/11586575/pexels-photo-11586575.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load ",
          
         
    
        },
      ];
      //  //add  img (img src={currentUser.profilePic} alt=""/>
  return (
  <div className="comments">
    <div className="write">
    
    <input type="text" placeholder="write a comment"/>
    <button>Send</button>
        </div>
    {comments.map((comment) =>(
        <div className= "comment">
            <img src={comment.profilePic} alt=""/>
            <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>

            </div>
            <span className="date">1 hour ago</span>
        </div>
        
        ))}
        </div>
  );
    };
    
export default Comments;