import React from 'react'
import "./App.css";
import {Link} from 'react-router-dom'

function Detail({book}) {

    // const book = {title: "The Hatred of Poetry", publisher: "FSG Originals", publishedDate: "2016-06-07",
    // allowAnonLogging: true,
    // authors: [ "Ben Lerner", "ABC" ],
    // averageRating: 3.5,
    // canonicalVolumeLink: "https://market.android.com/details?id=book-s3HtCgAAQBAJ",
    // categories: Array [ "Literary Criticism" ],
    // contentVersion: "1.1.1.0.preview.2",
    // description: "No art has been denounced as often as poetry. It's even bemoaned by poets: \"I, too, dislike it,\" wrote Marianne Moore. \"Many more people agree they hate poetry,\" Ben Lerner writes, \"than can agree what poetry is. I, too, dislike it and have largely organized my life around it and do not experience that as a contradiction because poetry and the hatred of poetry are inextricable in ways it is my purpose to explore.\" In this inventive and lucid essay, Lerner takes the hatred of poetry as the starting point of his defense of the art. He examines poetry's greatest haters (beginning with Plato's famous claim that an ideal city had no place for poets, who would only corrupt and mislead the young) and both its greatest and worst practitioners, providing inspired close readings of Keats, Dickinson, McGonagall, Whitman, and others. Throughout, he attempts to explain the noble failure at the heart of every truly great and truly horrible poem: the impulse to launch the experience of an individual into a timeless communal existence. In The Hatred of Poetry, Lerner has crafted an entertaining, personal, and entirely original examination of a vocation no less essential for being impossible.",
    // id: "s3HtCgAAQBAJ",
    // imageLinks: { smallThumbnail: "http://books.google.com/books/content?id=s3HtCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=s3HtCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
    // infoLink: "https://play.google.com/store/books/details?id=s3HtCgAAQBAJ&source=gbs_api",
    // language: "en",
    // maturityRating: "NOT_MATURE",
    // pageCount: 96,
    // panelizationSummary: { containsEpubBubbles: false, containsImageBubbles: false },
    // previewLink: "http://books.google.com/books?id=s3HtCgAAQBAJ&printsec=frontcover&dq=poetry&hl=&cd=1&source=gbs_api",
    // printType: "BOOK",
    // publishedDate: "2016-06-07",
    // publisher: "FSG Originals",
    // ratingsCount: 74,
    // readingModes: { text: true, image: false },
    // shelf: "none",
    // title: "The Hatred of Poetry"}

  return (
    <div className="list-books">
    <Link to='/'
              className="close-search"
            >
              Close
        </Link>
        <div className='detail-body'>
        <div
            className="book-cover"
            style={{
                width: 128,
                height: 192,
                marginRight: 10,
                backgroundImage:
                `url(${book.imageLinks.thumbnail})`,
            }}
            ></div>
             <div className='book-detail'>
                <div className="book-detail-title">
                    {book.title}
                </div>
                <div className="book-detail-sub">
                    {book.description}
                </div>
                <div className="book-detail-sub">
                    Author(s) {book.authors.map(a => (
                        <div>
                            <div className="book-detail-sub">{a}</div>
                        </div>
                    ))}
                </div>
                <div className="book-detail-sub">
                    Pages: {book.pageCount}
                </div>
                <div className="book-detail-sub">
                    Average Rating: {book.averageRating}
                </div>
                <div className="book-detail-sub">
                    Publisher: {book.publisher}
                </div>
                <div className="book-detail-sub">
                    Published On: {book.publishedDate}
                </div>
                <div className="book-detail-sub">
                    Preview: <a href={book.previewLink}> {book.previewLink} </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail