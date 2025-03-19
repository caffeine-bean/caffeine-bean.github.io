import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ImageCard from './ImageCard';
import { getImages, Image } from '../services/imageService';

const ImageGallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const imagesPerPage = 8;
  const pageCount = Math.ceil(images.length / imagesPerPage);
  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const data = await getImages();
        setImages(data as Image[]);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };
    
    fetchImages();
  }, []);
  
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  
  const displayedImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );
  
  if (loading) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }
  
  if (error) {
    return <ErrorContainer>{error}</ErrorContainer>;
  }
  
  return (
    <GalleryContainer>
      <GalleryTitle>Futuristic Lingerie Collection</GalleryTitle>
      <GallerySubtitle>Elegance meets innovation</GallerySubtitle>
      
      <ImagesGrid>
        {displayedImages.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </ImagesGrid>
      
      <PaginationContainer>
        <ReactPaginate
          previousLabel={<FiChevronLeft />}
          nextLabel={<FiChevronRight />}
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          previousClassName="prev-btn"
          nextClassName="next-btn"
          disabledClassName="disabled"
        />
      </PaginationContainer>
    </GalleryContainer>
  );
};

const GalleryContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const GalleryTitle = styled.h1`
  font-size: 2.5rem;
  color: #f0f0f0;
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const GallerySubtitle = styled.h2`
  font-size: 1.2rem;
  color: #a0a0a0;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: 1px;
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  width: 100%;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  
  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin: 0 0.5rem;
      
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(30, 30, 40, 0.6);
        color: #f0f0f0;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 1px solid rgba(100, 100, 255, 0.3);
        
        &:hover {
          background: rgba(60, 60, 100, 0.8);
          border-color: rgba(100, 100, 255, 0.8);
          box-shadow: 0 0 15px rgba(100, 100, 255, 0.5);
        }
      }
      
      &.active a {
        background: rgba(80, 80, 200, 0.8);
        border-color: rgba(120, 120, 255, 0.8);
        box-shadow: 0 0 20px rgba(100, 100, 255, 0.7);
      }
      
      &.disabled a {
        opacity: 0.5;
        cursor: not-allowed;
        
        &:hover {
          background: rgba(30, 30, 40, 0.6);
          border-color: rgba(100, 100, 255, 0.3);
          box-shadow: none;
        }
      }
    }
  }
  
  .prev-btn, .next-btn {
    a {
      font-size: 1.2rem;
    }
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  font-size: 1.5rem;
  color: #a0a0a0;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  font-size: 1.5rem;
  color: #ff6b6b;
`;

export default ImageGallery;
