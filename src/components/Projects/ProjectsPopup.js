import React, { useState } from 'react';
import { PopupContainer, SectionTitle, PopupOverlay, TagsContainer, PopupHeader, PopupLongDescription, CloseButton, SlideshowContainer, SlideshowImage, SlideshowArrow, Hr, Tag, TagList, TitleContent } from './ProjectsPopupStyles';

const ProjectsPopup = ({ projeto, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projeto.images.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projeto.images.length) % projeto.images.length);
    };

    return (
        <PopupOverlay>
            <PopupContainer>
                <PopupHeader>
                    <SectionTitle>{projeto.title}</SectionTitle>
                    <CloseButton onClick={onClose}>✖️</CloseButton>
                </PopupHeader>
                <SlideshowContainer>
                    <SlideshowImage onClick={() => window.open(projeto.images[currentImageIndex], '_blank')} src={projeto.images[currentImageIndex]} />
                    <SlideshowArrow onClick={previousImage} direction={'left'}>&lt;</SlideshowArrow>
                    <SlideshowArrow onClick={nextImage} direction={'right'}>&gt;</SlideshowArrow>
                </SlideshowContainer>
                <TagsContainer>
                    <TitleContent>Description</TitleContent>
                    <Hr />
                    <PopupLongDescription>{projeto.longDescription}</PopupLongDescription>
                </TagsContainer>
                <TagsContainer>
                    <TitleContent>Tech Stack</TitleContent>
                    <Hr />
                    <TagList>
                        {projeto.tags.map((t, i) => {
                            return <Tag key={i}>{t}</Tag>;
                        })}
                    </TagList>
                </TagsContainer>
            </PopupContainer>
        </PopupOverlay>
    );
};

export default ProjectsPopup;