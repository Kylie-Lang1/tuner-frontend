import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_DB_URL;

function SongsNewForm() {
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const addSong = (newSong) => {
    axios
      .post(`${BASE_URL}/songs`, newSong)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  return (
    <div className="new">
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Song Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Song name"
          required
        />

        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          value={song.artist}
          placeholder="Artist name"
          onChange={handleTextChange}
          required
        />

        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="Album title"
          onChange={handleTextChange}
        />

        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          name="time"
          value={song.time}
          placeholder="Duration"
          onChange={handleTextChange}
        />

        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SongsNewForm;
