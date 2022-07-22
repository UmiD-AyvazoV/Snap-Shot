import ReactPaginate from 'react-paginate';
import { useEffect, useState } from "react";

function Photos(props) {
const { photos , text } = props;
 const [currentItems, setCurrentItems] = useState([]);
 const [pageCount, setPageCount] = useState(0);
 const [itemOffset, setItemOffset] = useState(0);
 const itemsPerPage = 9;

 useEffect(() => {
   const endOffset = itemOffset + itemsPerPage;
   setCurrentItems(photos.slice(itemOffset, endOffset));
   setPageCount(Math.ceil(photos.length / itemsPerPage));
 }, [itemOffset, itemsPerPage, photos]);

 const handlePageClick = (e) => {
   const newOffset = (e.selected * itemsPerPage) % photos.length;
   setItemOffset(newOffset);
 };

 return (
   <>
      <h2 className="h2">{text} Pictures</h2>
      <div className="images">
        {
        currentItems.map( (img , b) => {
          return (
            <div className='image' key={b}>
              <img src={img.url} alt={img.title} />
            </div>
          )
        } )
        }
      </div>
     <ReactPaginate
       breakLabel="..."
       nextLabel="next >"
       onPageChange={handlePageClick}
       pageRangeDisplayed={3}
       pageCount={pageCount}
       previousLabel="< previous"
       renderOnZeroPageCount={null}
       containerClassName="pagination"
       pageLinkClassName="page-num"
       previousLinkClassName="page-num"
       nextLinkClassName="page-num"
       activeLinkClassName="active"
     />
   </>
 );
}

export default Photos;