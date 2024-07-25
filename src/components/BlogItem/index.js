import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {Details} = props
  const {id, title, imageUrl, author, topic, avatarUrl} = Details
  return (
    <Link to={`/blogs/${id}`}>
      <li className="liitemcont">
        <img className="logoer" src={imageUrl} alt={title}/>
        <div className="liitemtxt">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="liiconcont">
            <img className="avatar" src={avatarUrl} alt="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
