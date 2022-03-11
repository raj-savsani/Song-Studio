import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactAudioPlayer from "react-audio-player";
const axios = require("axios");

function SongsList() {
  const [songs, setSongs] = useState([]);
  const [list, setList] = useState("true");

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = async () => {
    let { data } = await axios.get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json"
    );
    setSongs([...data]);
  };

  const handelChange = () => {
    if (list === "true") {
      setList("false");
    } else {
      setList("true");
    }
  };

  return (
    <>
      <div onClick={handelChange} className="list-grid">
        <img
          src="https://img.icons8.com/ios/50/000000/save-to-grid.png"
          alt="grid-list"
        />
      </div>
      <MainDiv list={list}>
        <div>
          {songs.map((song) => {
            return (
              <CoverDiv list={list} key={song.url}>
                <img src={song.cover_image} alt="cover_image"></img>
                <div>
                  <strong>{song.song}</strong>
                  <p>{song.artists}</p>
                  <ReactAudioPlayer src={song.url} controls />
                </div>
              </CoverDiv>
            );
          })}
        </div>
      </MainDiv>
    </>
  );
}

export default SongsList;

// const StyledYourComponent = styled({list})`
//   background: ${props => props.list ? 'darkred' : 'limegreen'}
// `

const MainDiv = styled.div`
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

const CoverDiv = styled.div`
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
