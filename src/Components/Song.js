import { Link } from "react-router-dom";

function Song({ song }) {
  return (
    <tr className=".Song">
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : null}
      </td>
      <td>{song.artist}</td>
      <td className=".Song">
        <a href={`/songs/${song.id}`}>{song.name}</a>
      </td>
    </tr>
  );
}

export default Song;
