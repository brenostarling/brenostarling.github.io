import styled from 'styled-components';

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  height: 90%;
  background-color: #0f1624;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 1.5);
  @media ${props => props.theme.breakpoints.md} {
    width: 90vw;
    height: 90vh;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 4.5rem;
  line-height: 4.7rem;
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media ${props => props.theme.breakpoints.md} {
    max-width: 90vw;
    max-height: 10vh;
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
`;

export const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #333333;
  font-size: 16px;
  cursor: pointer;
  align-self: flex-start;
`;

export const PopupLongDescription = styled.p`
  width: 70vw;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  padding: 1rem 0 2rem;
  color: #e4e6e7;
  line-height: 24px;
  font-size: 1.7rem;
  text-align: justify;
  @media ${props => props.theme.breakpoints.md} {
    margin: 0;
    width: 70vw;
    max-width: 70vw;
    height: 50vh !important;
    max-height: 30vh;
    background-color: #141d2f;
    border-radius: 10px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    overflow-y: scroll;
  }
`;

export const SlideshowContainer = styled.div`
  height: 90vh;
  width: ${props => (props.fullscreenMode ? '100%' : '60%')};
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  transition: width 0.3s ease;
  &:hover {
    width: ${props => (props.fullscreenMode ? '100%' : '61%')};
  }

  @media ${props => props.theme.breakpoints.md} {
    width: 54vw;
    height: 23vh;
    max-width: 54vw;
    max-height: 23vh;
  }
`;

export const SlideshowImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const SlideshowArrow = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 4px;
  z-index: 2;

  ${props => props.direction === 'left' && `left: 10px;`}
  ${props => props.direction === 'right' && `right: 10px;`}

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;

  @media ${props => props.theme.breakpoints.md} {
    display: flex;
    align-items: center;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 0.7em;
  color: #9cc9e3;
  font-size: 2rem;
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 8px auto;
  border: 0;
  background: #d0bb57;
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.7rem;
`;
