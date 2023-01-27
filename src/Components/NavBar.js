import { Link } from "react-router-dom";
import "./css/NavBar.css"

function NavBar() {
  return (
    <nav>
        <h1>Tuner App</h1>
        <button>
            <Link to="/songs">All Songs</Link>
        </button>
        <button>
            <Link to="/songs/new">Add Song</Link>
        </button>
    </nav>
  );
}

export default NavBar;
