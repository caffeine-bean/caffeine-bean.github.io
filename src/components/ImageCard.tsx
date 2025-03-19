import { useState } from 'react';
import styled from 'styled-components';
import { FiZoomIn, FiHeart } from 'react-icons/fi';
import { Image } from '../services/imageService';

interface ImageProps {
  image: Image;
}

const ImageCard = ({ image }: ImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <CardContainer 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageWrapper>
        <StyledImage src={image.url} alt={image.title} loading="lazy" />
        <GlowEffect isHovered={isHovered} />
      </ImageWrapper>
      
      <CardContent isHovered={isHovered}>
        <CardTitle>{image.title}</CardTitle>
        <CardDescription>{image.description}</CardDescription>
      </CardContent>
      
      <CardOverlay isHovered={isHovered}>
        <ActionButtons>
          <ActionButton>
            <FiZoomIn />
          </ActionButton>
          <ActionButton 
            isFavorite={isFavorite} 
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <FiHeart />
          </ActionButton>
        </ActionButtons>
      </CardOverlay>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(20, 20, 30, 0.6);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 350px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(100, 100, 255, 0.3);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const GlowEffect = styled.div<{ isHovered: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(100, 100, 255, 0) 0%,
    rgba(100, 100, 255, ${props => props.isHovered ? 0.2 : 0}) 100%
  );
  transition: background 0.3s ease;
  pointer-events: none;
`;

const CardContent = styled.div<{ isHovered: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(
    to top,
    rgba(10, 10, 20, 0.9) 0%,
    rgba(10, 10, 20, 0) 100%
  );
  transform: translateY(${props => props.isHovered ? '0' : '20px'});
  opacity: ${props => props.isHovered ? 1 : 0.7};
  transition: transform 0.3s ease, opacity 0.3s ease;
`;

const CardTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 500;
  letter-spacing: 1px;
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #b0b0c0;
  font-weight: 300;
  line-height: 1.4;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  
  ${CardContainer}:hover & {
    max-height: 80px;
  }
`;

const CardOverlay = styled.div<{ isHovered: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(20, 20, 40, ${props => props.isHovered ? 0.3 : 0});
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.isHovered ? 1 : 0};
  transition: opacity 0.3s ease, background 0.3s ease;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled.button<{ isFavorite?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(30, 30, 50, 0.8);
  border: 1px solid rgba(100, 100, 255, 0.5);
  color: ${props => props.isFavorite ? '#ff6b8b' : '#ffffff'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 0 10px rgba(100, 100, 255, 0.3);
  
  &:hover {
    background: rgba(50, 50, 80, 0.9);
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(100, 100, 255, 0.5);
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

export default ImageCard;
