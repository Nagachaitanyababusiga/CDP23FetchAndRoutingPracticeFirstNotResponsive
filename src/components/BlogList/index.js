import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import './index.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {bloglist: [], isLoading: true}

  componentDidMount() {
    this.getdata()
  }

  getdata = async () => {
    const value = await fetch('https://apis.ccbp.in/blogs')
    const parsedvalue = await value.json()
    const modifieddata = parsedvalue.map(x => ({
      id: x.id,
      title: x.title,
      imageUrl: x.image_url,
      avatarUrl: x.avatar_url,
      author: x.author,
      topic: x.topic,
    }))
    this.setState({bloglist: modifieddata, isLoading: false})
  }

  render() {
    const {bloglist, isLoading} = this.state
    return (
      <ul className="listmaincont">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          bloglist.map(x => <BlogItem Details={x} key={x.id} />)
        )}
      </ul>
    )
  }
}

export default BlogList
