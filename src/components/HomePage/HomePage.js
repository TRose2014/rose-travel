import { Link } from 'react-router-dom';

import './HomePage.css';

export default function HomePage() {
  return (
    <div id="test">
      <section id="linkContainer">
        <Link to="/drinks">
          <span>D</span>
          <span className="rose">R</span>
          <span>INKS</span>
          <br />
        </Link>

        <Link to="/top5">
          <span>T</span>
          <span className="rose">O</span>
          <span>P Picks</span>
          <br />
        </Link>

        <Link to="/snacks">
          <span className="rose">S</span>
          <span>NACKS</span>
          <br />
        </Link>

        <Link to="/eats">
          <span className="rose">E</span>
          <span>ATS</span>
          <br />
        </Link>
      </section>
    </div>
  );
}
