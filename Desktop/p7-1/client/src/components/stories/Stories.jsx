import "./stories.scss"

const Stories= () => {

    //temporary data
    const stories = [
    {
        id: 1,
        name: "Reham",
        img:"https://images.pexels.com/photos/13378650/pexels-photo-13378650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    },
    {
        id: 2,
        name: "Ben",
        img:"https://images.pexels.com/photos/13578883/pexels-photo-13578883.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    },
    {
        id: 3,
        name: "Nancy",
        img:"https://images.pexels.com/photos/11586575/pexels-photo-11586575.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    },
    {
        id: 4,
        name: "Liz",
        img:"https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600",

    },
    
];
    return (
      <div className="stories">
       {stories.map(story => (
        <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
            </div>
       ))}
      </div>
    )
  }
  
  export default Stories;