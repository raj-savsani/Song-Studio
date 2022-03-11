import styled from "styled-components";


export const MainDiv = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;

  & > div {
    width: 850px;
    display: flex;
    flex-direction: ${({ list }) => (list === "true" ? "row" : "column")};
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const CoverDiv = styled.div`
  display: flex;
  justify-content: ${({ list }) => (list === "true" ? "center" : "left")};;
  align-items: center;
  position: relative;

  width:${({ list }) => (list === "true" ? "250px" : "700px")};;
  height: 180px;
  margin: 15px 5px;

  & > img {
    width: ${({ list }) => (list === "true" ? "100%" : "40%")};
    height: 100%;
    border-radius: 10px;
  }
  & > div {
    display: none;
  }

  &:hover {
    & > div {
        border: 2px solid white;
      box-sizing: border-box;
      border-radius: 10px;
      width: ${({ list }) => (list === "true" ? "100%" : "70%")};
      height: 100%;
      display: block;
      padding: 20px;
      position: absolute;
      left:${({ list }) => (list === "true" ? "none" : "40%")};
      background: rgba(0, 0, 0, 0.6);
      color: white;
      letter-spacing: 1.5px;
      cursor: pointer;

      & > audio {
          width: ${({ list }) => (list === "true" ? "200px" : "400px")};
      }

      & > strong {
        animation: fadeInRight 0.5s ease-in-out;
      }
      & > p {
        animation: fadeInRight 1s ease-in-out;
    }

    @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(200px);
        }
        to {
          opacity: 1;
        }
  }
  }
`;
