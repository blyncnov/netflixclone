import styled from "styled-components";
import BackgroundImage from "../image/backg.jpg";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: center;
  background: url(${BackgroundImage});
`;

export const PlaceHolder = styled.div`
  width: 100%;
  height: 80px;
  padding: 0.5em 0.8em;
  //   background-color: green;
`;

export const Nav = styled.div`
  width: 100%;
  height: 80px;
  //   background-color: yellow;
  display: flex;
  justify-content: space-between;
`;

export const ImageLogo = styled.img`
  width: 111.4px;
  cursor: pointer;
  height: 62.6px;
`;

export const LoginButton = styled.button`
  height: 25px;
  padding: 0 0.5em;
  background-color: red;
  color: #ffffff;
  border: 2px solid red;
  border-radius: 4px;
  margin: 1.6em 1.5em 0 0;
  font-family: san-serif;
  cursor: pointer;
  text-align: center;

  @media (min-width: 500px) {
    margin: 1.6em 1em 0 0;
  }
`;

export const HeadingText = styled.h2`
  font-weight: 700;
  font-size: 2.2em;
  text-align: center;

  @media (max-width: 350px) {
    font-size: 1.8em;
  }
`;

export const TitleText = styled.h3`
  font-weight: 500;
  font-size: 1.1em;
  text-align: center;
  margin: 0.4em;

  @media (max-width: 350px) {
    font-size: 0.8em;
  }
`;

export const TitleTextShow = styled.h3`
  font-weight: 500;
  font-size: 1em;
  text-align: center;

  @media (max-width: 350px) {
    font-size: 0.9em;
  }
`;

export const TextHolder = styled.div`
  padding: 0.2em;
  margin-top: 1em;
`;

export const Input = styled.input`
  padding: 0.7em;
  width: 80%;
  margin-left: 3em;
  border: 2px solid #ffffff;
  border-radius: 5px;
  transform: translate(-50% at 50%);

  @media (max-width: 760px) {
    display: block;
    margin-left: 0.1em;
    width: 100%;
    padding: 0.7em;
  }

  @media (max-width: 700px) {
    display: block;
    margin-left: 0.1em;
    width: 100%;
    padding: 0.7em;
  }
`;

export const Button = styled.button`
  padding: 0.5em;
  border-radius: 5px;
  color: #ffffff;
  background-color: red;
  width: 100px;
  display: inline;
  font-weight: 900;
  text-align: center;
  border: 2px solid red;
  transform: translate(-50% at 50%);

  @media (max-width: 760px) {
    background-color: red;
    width: 150px;
    display: block;
    margin: 5px 25%;
    padding: 0.6em;
    transform: translate(-50% at 50%);
  }
`;
export const Form = styled.form`
  padding: 0.6em;
  transform: translate(1%);
  text-align: center;
  display: flex;

  @media (max-width: 700px) {
    display: block;
  }
`;

export const Started = styled.div`
  // text-align: center;
  // display: flex;

  // @media (max-width: 700px) {
  //   display: block;
  // }

  // @media (max-width: 350px) {
  //   background-color: green;
  //   margin-bottom: 5em;
  // }
`;

export const SectionContainer = styled.div`
  width: 100%;
  height: 200px;
  border-top: 4px solid grey;
  border-bottom: 4px solid grey;
  background-color: green;
`;

export const InnerSectionContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 2em;
  border: 4px solid grey;
  background-color: black;
  text-align: center;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row" : "row-reverse")};
  justify-content: space-between;

  @media (max-width: 760px) {
    padding: 1em;
    display: block;
    text-align: center;
    flex-direction: ${({ reverse }) => (reverse ? "row" : "row-reverse")};
  }
`;

export const InnerSectionContainerTwo = styled.div`
  width: 100%;
  height: 550px;
  position: relative;
  padding: 2em;
  border: 4px solid grey;
  background-color: black;
  text-align: center;

  @media (max-width: 760px) {
    padding: 1em;
    display: block;
  }
`;

export const ImageDivvers = styled.div`
  width: 100%;
  flex: 1;
  padding: 0 0.3em;
  overflow: hidden;
  position: relative;
`;

export const SectionsImages = styled.img`
  width: 320px;
  height: 200px;
  position: relative;
  z-index: 95;

  @media (max-width: 760px) {
    width: 320px;
    height: 170px;
  }
`;

export const BoardVideo = styled.div`
  background-color: transparent;
  position: absolute;
  top: 18px;
  width: 200px;
  left: 190px;
  height: 40px;
  z-index: 25;

  @media (max-width: 760px) {
    top: 18px;
    width: 210px;
    left: 95px;
    height: 100px;
    overflow: hidden;
  }

  @media (max-width: 500px) {
    top: 18px;
    width: 210px;
    left: 61px;
    height: 100px;
    overflow: hidden;
  }
`;

export const DivTextHolder = styled.div`
  margin-top: 1em;
  flex: 1;
  display: bl4ck;
  // background-color: red;
`;

export const PlayVideos = styled.video`
  o-object-fit: cover;
  z-index: 55;
`;
export const DataHeadings = styled.h3`
  font-weight: 300;
  font-size: 1.7em;
`;

export const DataTitles = styled.h6`
  text-align: center;
  font-size: 0.9em;
  text-decoration: none;
`;

export const SectionHolderContainer = styled.div``;

export const FaqDiv = styled.div`
  display: flex;
  text-align: start;
  padding: 0.4em;
  justify-content: space-between;
`;

export const FaqDivBlock = styled.div`
  display: block;
`;

export const FaqLink = styled.div`
  display: block;
  color: grey;
`;

export default NavbarContainer;
