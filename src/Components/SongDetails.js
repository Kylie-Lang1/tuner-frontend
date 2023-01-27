import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_DB_URL;

function SongDetails() {
  const { id } = useParams();
  const [song, setSong] = useState([]);
  const navigate = useNavigate();

  const deleteSong = () => {
    axios
      .delete(`${BASE_URL}/songs/${id}`)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = () => {
    deleteSong();
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/songs/${id}`)
      .then((res) => {
        setSong(res.data)
        console.log(song)
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]);

  return (
    <article className=".Song-Details">
      {song.is_favorite ? <span>⭐️</span> : null} {song.name}
      <h5>
        <span>
          <a href={song.url}>{song.name}</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {song.artist}
      </h5>
      <h6>{song.album}</h6>
      <p>{song.time}</p>
      <div className="showNavigation">
        <>
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </>
        <>
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </>
        <>
          <button onClick={handleDelete}>Delete</button>
        </>
      </div>
    </article>
  );
}

export default SongDetails;
