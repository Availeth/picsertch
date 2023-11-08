import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import "../styles/search.css";
import { Form } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";


const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;
const API_KEY = import.meta.env.VITE_API_KEY;


function Search() {
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');


  const fetchImages = useCallback(async () => {
    try {
      if (searchInput.current.value) {
        setErrorMsg('');
        setLoading(true);
        const { data } = await axios.get(
          `${API_URL}?query=${
            searchInput.current.value
          }&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
            API_KEY
          }`
        );
        setImages(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg('Error sertching images. Try again later.');
      console.log(error);
      setLoading(false);
    }
  }, [page]);
  
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const resetSearch = () => {
    setPage(1);
    fetchImages();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    resetSearch();
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    resetSearch();
  };


  return (
    <div>
        <Navbar/>

   

      {errorMsg && <p className='error-msg'>{errorMsg}</p>}
      <div className='search-section mt-40 flex place-content-center py-10 '>
        <Form onSubmit={handleSearch}>
          <Form.Control
            type='search'
            placeholder='Type something to search...'
            className='search-input w-[300px] '
            ref={searchInput}
          />
        </Form>
      </div>
      <div className='filters relative place-content-center'>
        <div className='pl-10 w-[100px] h-[50px] rounded-lg p-2 text-white bg-red-600 mx-2 ' onClick={() => handleSelection('cars')}>cars</div>
        <div className='pl-10 w-[100px] h-[50px] rounded-lg p-2 text-white bg-red-600 mx-2 ' onClick={() => handleSelection('house')}>house</div>
        <div className='pl-10 w-[100px] h-[50px] rounded-lg p-2 text-white bg-red-600 mx-2 ' onClick={() => handleSelection('phones')}>phones</div>
        <div className='pl-10 w-[100px] h-[50px] rounded-lg p-2 text-white bg-red-600 mx-2 ' onClick={() => handleSelection('shoes')}>Shoes</div>
      </div>
      {loading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <>
          <div className='images p-12 grid grid-rows-5 grid-flow-col gap-4'>
            {images.map((image) => (
              <img
                key={image.id}
                src={image.urls.small}
                alt={image.alt_description}
                className='image'
              />
            ))}
          </div>
          <div className='buttons flex place-content-center py-4'>
            {page > 1 && (
              <div className="w-[100px] h-[50px] rounded px-2 py-3 text-white bg-red-600 mt-2 mr-5"  onClick={() => setPage(page - 1)}>Previous</div >
            )}
            {page < totalPages && (
              <div className="w-[100px] h-[50px] rounded-lg py-3 text-white bg-blue-600 mt-2 " onClick={() => setPage(page + 1)}>Next⋙</div >
            )}
          </div>
          <Footer/>
        </>
      )}
    </div>
  )
}

export default Search;