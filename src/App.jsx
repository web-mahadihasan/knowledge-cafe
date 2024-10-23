import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import BlogContainer from './components/BlogContainer/BlogContainer'
import BookmarksContainer from './components/BookmarksContainer/BookmarksContainer'
import { getBookmarksFromLs, removeBookmarksToLs, removeIconToLs, setBookmarksToLs } from './utilities/setLocalStorages'


function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [isBookmarksActive, setBookmarkActive] = useState([])
  const [readingTime, setReadingTime] = useState(0)
  const [markRead, setMarkRead] = useState([])

  const handleBookmark = (bookmarkData) => {
    const checkBookmarks = bookmarks.find(b => b.id === bookmarkData.id)  
    if(checkBookmarks){
      alert (`Already bookmark added`)
    }else{
      const newBookmark = [...bookmarks, bookmarkData];
      setBookmarks(newBookmark);
      setBookmarksToLs(newBookmark, 'bookmarks');

      // const newBookmarkActive = [...isBookmarksActive, bookmarkData.id]
      // setBookmarkActive(bookmarkData.id);
      setBookmarkActive((isBookmarksActive) => {
        if(isBookmarksActive.includes(bookmarkData.id)){
          return isBookmarksActive.filter(id => id !== bookmarkData.id)
        }else{
          setBookmarksToLs([...isBookmarksActive, bookmarkData.id], 'bookmarkIcon');
          return [...isBookmarksActive, bookmarkData.id]
        }
      });
    }
  }

  const handleMarkReadBtn = (id, time) => {
    const checkMarkRead = markRead.find(i => i === id)
    if(checkMarkRead){     
      alert(`alert`)
    }else{
      const setAsMarkRead = [...markRead, id]
      setMarkRead(setAsMarkRead);
      setReadingTime(readingTime + time);
      const remainingBookmark = bookmarks.filter((bMark) => bMark.id !== id);
      setBookmarks(remainingBookmark);
      removeBookmarksToLs(id, "bookmarks");
      removeIconToLs(id, 'bookmarkIcon');

      const removeMarkActive = isBookmarksActive.filter(i => i !== id);
      setBookmarkActive(removeMarkActive);
      
    }
    
  }

useEffect(()=> {
    const loadDataFromLs = getBookmarksFromLs('bookmarks');
    const loadIconDataFromLs = getBookmarksFromLs("bookmarkIcon");
    setBookmarks(loadDataFromLs);
    setBookmarkActive(loadIconDataFromLs);
}, [])


  return (
    <>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <BlogContainer
          handleBookmark={handleBookmark}
          isBookmarksActive={isBookmarksActive}
          handleMarkReadBtn={handleMarkReadBtn}
          
        />
        <BookmarksContainer bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </>
  );
}

export default App




// https://api.jsonbin.io/v3/b/67177778e41b4d34e446ddbf

