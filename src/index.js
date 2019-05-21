import React from 'react'
// import  ReactDOM from 'react-dom'
import {render} from 'react-dom'
import Library from './Library'

let bookList = [
  {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
  {"title": "LOTR", "author": "J R Tolkin", "pages": 240},
  {"title": "Cats Cradle", "author": "Maggie Smith", "pages": 320},

]





render(
  <Library books={bookList}/>,
  document.getElementById('root'),

)
