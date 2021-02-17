import styled from "styled-components";

export const NewComponent = styled.div`
  width: 100%;
  height: 200px;
  background-color: transparent;
`;

export const QuestionDivs = styled.div`
  text-align: center;
  width: 100%;
  height: 60px;
  background-color: grey;
  margin-top: 0.3em;

  @media (max-width: 760px) {
    padding: 1em;
    display: block;
  }
`;

export const H3text = styled.h3`
  color: #ffffff;
  line-height: 60px;

  @media (max-width: 760px) {
    line-height: 25px;
    display: block;
  }
`;

export default NewComponent;
