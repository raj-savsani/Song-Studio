import React, { useEffect, useState } from "react";
import styled from "styled-components";
const axios = require("axios");

function SongsList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = async () => {
    let { data } = await axios.get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json"
    );
    setSongs([...data]);
    console.log(data);
  };

  return (
    <MainDiv>
      <div>
        {songs.map((song) => {
          return (
            <CoverDiv key={song.url}>
              <img src={song.cover_image} alt="cover_image"></img>
              <div>
                <strong>{song.song}</strong>
                <p>{song.artists}</p>
              </div>
            </CoverDiv>
          );
        })}
      </div>
    </MainDiv>
  );
}

export default SongsList;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > div {
    width: 850px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const CoverDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 250px;
  height: 180px;
  margin: 15px 5px;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  & > div {
    display: none;
  }

  &:hover {
    & > div {
      box-sizing: border-box;
      border-radius: 10px;
      width: 100%;
      height: 100%;
      display: block;
      padding: 20px;
      position: absolute;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      letter-spacing: 1.5px;
      cursor: pointer;
      
      & > strong {
        animation: fadeInRight 0.5s ease-in-out;
      }
      & > p {
        animation: fadeInRight 1s ease-in-out;
    }

    @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(500px);
        }
        to {
          opacity: 1;
        }
  }
  }
`;
