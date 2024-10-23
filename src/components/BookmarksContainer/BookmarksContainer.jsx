import React, { useState } from 'react'
import PropTypes from 'prop-types'

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
          Spent time on read : {getHours? getHours : '0'} Hours {getMin} min
        </h4>
      </div>
      <div className="bg-[#1111110D]/5 rounded-lg px-3 py-4 min-h-[300px]">
        <h3 className="text-xl font-bold py-4">
          Bookmarked Blogs : {bookmarks.length}
        </h3>
        <div className="space-y-3">
          {bookmarks.map((b, idx) => (
            <h3 key={idx} className="bg-white rounded-xl py-3 px-3 text-xl font-semibold">
              {b.title}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

BookmarksContainer.propTypes = {

}

export default BookmarksContainer
