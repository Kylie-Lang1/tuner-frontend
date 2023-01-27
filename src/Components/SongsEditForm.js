import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_DB_URL;

function SongEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false
  });

  const updateSong = (updatedSong) => {
    axios
      .put(`${BASE_URL}/songs/${id}`, updatedSong)
      .then(
        () => {
          navigate(`/songs/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/songs/${id}`).then(
      (response) => setSong(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name:</label>
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
          name="albun"
          value={song.albun}
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
      <Link to={`/songs/${id}`}>
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default SongEditForm;
