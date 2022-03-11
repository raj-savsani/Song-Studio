import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { CoverDiv, MainDiv } from "../styledcomponenet/StyledComponents";
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
        <p>List / Grid</p>
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
