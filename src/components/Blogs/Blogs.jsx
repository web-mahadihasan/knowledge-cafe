import PropTypes from 'prop-types'
import AuthorProfile from '../AuthorProfile/AuthorProfile';
import { useState } from 'react';



const Blogs = ({ blogs, handleBookmark, handleMarkReadBtn, isBookmarksActive }) => {
  const {id, title, blog_img, description, hashtags, reading_time } = blogs;

  const [isExpanded, setExpanded] = useState(false);

  const handleSeeMore = () => {
    setExpanded(!isExpanded);
  }

  return (
    <div className="space-y-6 mb-6">
      <img src={blog_img} alt="" className="rounded-xl h-[450px] w-full" />
      <AuthorProfile
        blogsData={blogs}
        handleBookmark={handleBookmark}
        isBookmarksActive={isBookmarksActive}
      />
      <h1 className="font-bold text-4xl text-gray-800">{title}</h1>
      <p className={`${isExpanded? 'max-h-full' : 'max-h-12 overflow-hidden'}`}>{description}</p>
        <button onClick={handleSeeMore} className="text-blue-500 ml-1">
          {isExpanded?'Show less':'see more...'}
        </button>

      <ul className="list-none flex gap-6">
        {hashtags.map((tag, idx) => (
          <li key={idx}
            className="hover:text-blue-500 font-medium text-lg text-[#11111199]/60">
            <a href="#">{tag}</a>
          </li>
        ))}
      </ul>
      <button
        onClick={() => handleMarkReadBtn(id, reading_time)}
        className="font-bold text-lg text-blue-600 underline"
      >
        Mark as read
      </button>
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.object.isRequired
};

export default Blogs
