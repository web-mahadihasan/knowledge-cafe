import PropTypes from 'prop-types'

const Bookmarks = ({ bookmarks }) => {
  return (
    <div>
      <div className="bg-[#1111110D]/5 rounded-lg px-3 py-4 min-h-[300px]">
        <h3 className="text-xl font-bold py-4">
          Bookmarked Blogs : {bookmarks.length}
        </h3>
        <div className="space-y-3">
          {bookmarks.map((b, idx) => (
            <h3
              key={idx}
              className="bg-white rounded-xl py-3 px-3 text-xl font-semibold"
            >
              {b.title}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.object.isRequired
};

export default Bookmarks
