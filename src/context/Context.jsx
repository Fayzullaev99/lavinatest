import React, { createContext, useState, useEffect } from 'react';
import { ApiFunction } from '../helpers';

const Context = createContext({});

function ContextProvider({ children }) {
  // getLocalStorage auth user
  const getLocalStorage = () => {
    let auth = localStorage.getItem("auth")
    if (auth) {
      return auth = JSON.parse(localStorage.getItem("auth"))
    } else {
      return null;
    }
  }
  // global states
  const [auth, setAuth] = useState(getLocalStorage);
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [showInput, setShowInput] = useState({ show: false, edit: false, book: null });
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth))
    async function fetchData() {
      try {
        const fetchedBooks = await ApiFunction('GET', '/books');
        setBooks(fetchedBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
    fetchData();
  }, [auth]);

  return (
    <Context.Provider
      value={{ auth, setAuth, books, setBooks, searchResult, setSearchResult, showInput, setShowInput, loading, setLoading }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
