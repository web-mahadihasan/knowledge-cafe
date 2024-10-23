import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Bookmarks from '../Bookmarks/Bookmarks';

const BookmarksContainer = ({ bookmarks, readingTime }) => {
  let getHours;
  let getMin;
  if(readingTime > 60){
    getHours = Math.floor(readingTime / 60)
    getMin = readingTime % 60;
  }else{
    getMin = readingTime
  }

  return (
    <div>
      <div className="p-4 rounded-xl border border-[#6047EC]/70 bg-[#6047EC]/10 mb-3">
        <h4 className="text-center text-xl font-bold text-[#6047EC]/90">
          Spent time on read : {getHours ? getHours : "0"} Hours {getMin} min
        </h4>
      </div>
      <Bookmarks bookmarks={bookmarks} />
    </div>
  );
};

BookmarksContainer.propTypes = {
  bookmarks: PropTypes.object.isRequired,
  readingTime: PropTypes.number.isRequired
}

export default BookmarksContainer
