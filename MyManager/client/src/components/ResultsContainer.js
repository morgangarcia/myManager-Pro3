import React from "react";
import Contractor from "../components/Contractor";

// function ResultsContainer(props) {
//     if (props.path === "/") {
//         return (
//             <div id="resultsContainer">
//                 <h3>Results Found</h3>
//                 {props.bookData.map((book) => {
//                     const bookInfo = book.volumeInfo;
//                     return <Contractor
//                         title={bookInfo.title}
//                         authors={bookInfo.authors}
//                         description={bookInfo.description}
//                         link={bookInfo.canonicalVolumeLink}
//                         img={bookInfo.imageLinks}
//                         path={props.path}
//                         key={book.id} />
//                 })}
//             </div>
//         );
//     } else if (props.path === "/saved") {
//         if (props.savedBooks.length > 0) {
//             return (
//                 <div id="resultsContainer">
//                     <h3>Saved Contractor</h3>
//                     {props.savedBooks.map((book) => {
//                         return <Contractor
//                             name={contractor.name}
//                             authors={contractor.authors}
//                             description={contractor.description}
//                             link={contractor.link}
//                             img={contractor.img}
//                             id={contractor._id}
//                             path={props.path}
//                             key={contractor._id} />
//                     })}
//                 </div>
//             );
//         } else {
//             return (
//                 <div id="resultsContainer">
//                     <h3>Contractor</h3>
//                     <p>No saved contractors.</p>
//                 </div>
//             );
//         }
//     }
// }

//export default ResultsContainer;