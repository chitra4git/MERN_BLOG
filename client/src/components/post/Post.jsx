import "./post.css";
import {Link} from "react-router-dom";
//import postImg from "../post/postImage.jpg"

export default function Post({post}) {
  const PF = "https://main--soft-hummingbird-50681a.netlify.app/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg"
          src ={PF + post.photo} alt=""
          //{post.photo}
        />
        )}
        <div className="postInfo">
            <div className="postCats">
              {post.categories.map((c)=>(
                <span className="postCat">{c.name}</span>
              ))}
            </div>
            <Link to={`/post/${post._id}`} className="link">
              <span className="postTitle">{post.title}</span>
            </Link>
            {/* add a line */}
            <hr/> 
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">{post.desc}</p>
    
    </div>
  )
}   
