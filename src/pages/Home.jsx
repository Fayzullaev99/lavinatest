import React from 'react'
import NavBar from '../components/NavBar'
import BookInput from '../components/BookInput'
import { Context } from '../context/Context'
import BookCard from '../components/BookCard'
import SearchCard from '../components/SearchCard'
import Loader from '../components/Loader'

function Home() {
  const { showInput, searchResult, loading } = React.useContext(Context)
  return (
    <>
      <NavBar />
      {loading ? <Loader /> : <>
        {showInput.show ? <BookInput /> : !searchResult ? <BookCard /> : null}
        {searchResult && <SearchCard />}
      </>}
    </>
  )
}

export default Home