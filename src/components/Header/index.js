import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="navbar">
    <div className="wave-container">
      <img
        className="wave-logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1 className="wave-head">Wave</h1>
    </div>
    <ul className="header-items">
      <li className="tab-item">
        <Link to="/">Home</Link>
      </li>
      <li className="tab-item">
        <Link to="/about">About</Link>
      </li>
      <li className="tab-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
