import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {data: {}, isLoading: true}

  componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.getDetails(id)
  }

  getDetails = async id => {
    const res = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const resjson = await res.json()
    const modifiedData = {
      id: resjson.id,
      title: resjson.title,
      imageUrl: resjson.image_url,
      avatarUrl: resjson.avatar_url,
      author: resjson.author,
      content: resjson.content,
      topic: resjson.topic,
    }
    this.setState({data: modifiedData, isLoading: false})
  }

  render() {
    const {data, isLoading} = this.state
    const {title, imageUrl, author, avatarUrl, content} = data
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="outerdivcont">
        <h1 className="bldtitle">{title}</h1>
        <div className="blduppercont">
          <img alt="avatar" className="bldavatar" src={avatarUrl} />
          <p>{author}</p>
        </div>
        <img className="bldthumbnail" alt={title} src={imageUrl} />
        <p className="bldpara">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
