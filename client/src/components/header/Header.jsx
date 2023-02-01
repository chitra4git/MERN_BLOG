import "./header.css"
import headerImage from "../header/headerImage.png"
export default function 
header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">Publish your passions</span>
            <span className="headerTitleLg"></span>
        </div>
        <img className="headerImg"
          src ={headerImage}
          alt=""
        />
    </div>
  )
}
