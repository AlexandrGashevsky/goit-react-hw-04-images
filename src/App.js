import React from 'react';
import { useState, useEffect } from 'react';
import fetchImages from './Api/Api';
import IconButton from './components/IconButton/IconButton';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import LoaderApp from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [largeImage, setLargeImage] = useState({});
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (searchQuery) {
      getImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);
  const getImages = () => {
    setIsLoading(true);

    fetchImages(searchQuery, currentPage)
      .then(({ hits, total }) => {
        setImages(prev => [...prev, ...hits]);
        setCurrentPage(prev => prev + 1);
        setTotal(total);

        scrollOnLoadButton();
      })
      .catch(error => setError(error))

      .finally(() => setIsLoading(false));
  };
  const onChangeQuery = query => {
    if (query === searchQuery) {
      return;
    }
    setSearchQuery(query);
    setImages([]);
    setCurrentPage(1);
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const handleGalleryItem = largeImage => {
    setLargeImage(largeImage);
    toggleModal();
  };

  const scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
      block: 'end',
    });
  };
  const needToShowLoadMore = () => {
    return Math.ceil(total / 12) !== currentPage - 1;
  };
  return (
    <>
      <SearchBar onSubmit={onChangeQuery} />
      <ImageGallery images={images} onImageClick={handleGalleryItem} />
      {(total !== 0) && needToShowLoadMore && <Button onClick={getImages} />}
      {showModal && (
        <Modal onClose={toggleModal}>
          <div className="Close-box">
            <IconButton onClick={toggleModal} aria-label="Close modal">
              close modal            
            </IconButton>
          </div>
          <img src={largeImage} alt="" className="Modal-image" />
        </Modal>
      )}
      {isLoading && <LoaderApp />}
    </>
  );
}

export default App;
