import React from 'react'
import PropTypes from 'prop-types'
import { BsBookmarks, BsBookmarksFill } from "react-icons/bs";

const AuthorProfile = ({ blogsData, handleBookmark, isBookmarksActive }) => {
  const { id, author, reading_time, posted_date } = blogsData;


  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-6">
        <img
          src={author.author_img}
          alt=""
          className="w-12 h-12 ring-2 rounded-full ring-offset-2 cursor-pointer"
        />
        <div>
          <h3 className="font-bold text-xl">{author.name}</h3>
          <p className="font-semibold text-base text-[#11111199]/60">
            {posted_date}
          </p>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <p className="text-xl font-medium text-gray-500">
          {reading_time} min read
        </p>
        <button
          onClick={() => handleBookmark(blogsData)}
          className="text-2xl text-orange-600"
        >
          {isBookmarksActive.includes(id) ? (
            <BsBookmarksFill />
          )  : (
            <BsBookmarks />
          )}
        </button>
      </div>
    </div>
  );
};

AuthorProfile.propTypes = {

}

export default AuthorProfile
{/*  */}