const getBookmarksFromLs = (keyName) => {
  const lsData = localStorage.getItem(keyName);
  if(lsData){
    return JSON.parse(lsData)
  }else{
    return []
  }
};

const storeBookmarksToLs = (dataForLs, keyName) => {
  const stringifyData = JSON.stringify(dataForLs);
  localStorage.setItem(keyName, stringifyData);
};

const setBookmarksToLs = (bookmarks, keyName) => {
  const newLsData = getBookmarksFromLs(keyName);
  newLsData.push(bookmarks);
  storeBookmarksToLs(bookmarks, keyName);
};

const removeBookmarksToLs = (id, keyName) => {
  const existData = getBookmarksFromLs(keyName);
  const remainingData = existData.filter((b) => b.id !== id);
  storeBookmarksToLs(remainingData, keyName);
};

const removeIconToLs = (id, keyName) => {
const existData = getBookmarksFromLs(keyName);
const remainingData = existData.filter((b) => b !== id);
storeBookmarksToLs(remainingData, keyName);
}

export { setBookmarksToLs, getBookmarksFromLs, removeBookmarksToLs, removeIconToLs };