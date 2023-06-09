import React, { useState, useEffect } from 'react';
import { PopupContainer, SectionTitle, PopupOverlay, TagsContainer, PopupHeader, PopupLongDescription, CloseButton, SlideshowContainer, SlideshowImage, SlideshowArrow, Hr, Tag, TagList, TitleContent } from './ProjectsPopupStyles';

const ProjectsPopup = ({ projeto, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fullscreenMode, setFullscreenMode] = useState(false);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projeto.images.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projeto.images.length) % projeto.images.length);
    };

    const toggleFullscreenMode = () => {
        setFullscreenMode(!fullscreenMode);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            previousImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest('.popup-container')) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onClose]);

    return (
        <PopupOverlay>
            <PopupContainer className="popup-container">

                {!fullscreenMode && (
                    <PopupHeader>
                        <SectionTitle>{projeto.title}</SectionTitle>
                        <CloseButton onClick={onClose}>✖️</CloseButton>
                    </PopupHeader>
                )}

                <SlideshowContainer fullscreenMode={fullscreenMode}>
                    <SlideshowImage onClick={toggleFullscreenMode} src={projeto.images[currentImageIndex]} />
                    <SlideshowArrow onClick={previousImage} direction={'left'}>
                        &lt;
                    </SlideshowArrow>
                    <SlideshowArrow onClick={nextImage} direction={'right'}>
                        &gt;
                    </SlideshowArrow>
                </SlideshowContainer>

                {!fullscreenMode && (
                    <>
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
                    </>
                )}

            </PopupContainer>
        </PopupOverlay>
    );

};

export default ProjectsPopup;