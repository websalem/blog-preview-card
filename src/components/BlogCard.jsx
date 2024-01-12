import heroImg from '../assets/images/illustration-article.svg';
import avatar from '../assets/images/image-avatar.webp';
const BlogCard = () => {
  return (
    <div className='card'>
        <img className='hero-img' src={heroImg} alt="llustration-article " />
        <div className="card-text">
            <p className='tag'>Learning</p>
            <p className='meta-data'>Published 21 Dec 2023</p>
            <h1>HTML & CSS foundations</h1>
            <p className="card-paragraph">
            These languages are the backbone of every website, defining structure, content, and presentation.
            </p>
            <div className="user">
                <img src={avatar} alt="user avatar" />
                <p>Greg Hooper</p>
            </div>
        </div>
    </div>
  )
}
export default BlogCard