import { useState, useEffect } from "react";
import axios from "axios";
import Song from "./Song";
import "./css/Songs.css"

const BASE_URL = process.env.REACT_APP_DB_URL;

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/songs`)
      .then((res) => {
        setSongs(res.data)
        console.log(songs)
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="songs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Song Artist</th>
              <th>Song Title</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;
