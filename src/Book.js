
import React from 'react'

//supplies defaults if you do not enter
export const Book =({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free freeBookmark Today{freeBookmark ? 'Yes!': 'No!'}</p>
    </section>
  )
}
