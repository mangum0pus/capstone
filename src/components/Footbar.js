import {Link} from 'react-router-dom';
import './footer.css';

export default function Footer() {
  return (
    <div className='footerContainer'>
      <div className="links">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/reserve'>Reservations</Link>
          </li>
        </ul>
      </div>
      <div className="contact">
        <ul className='address'>
          <li>2207 N Clybourn Ave,</li>
          <li>Chicago, IL</li>
          <li>60614, United States</li>
        </ul>
        <ul className="deetz">
          <li>Email: lil.lemon@citrus.com</li>
          <li>Phone: +1 773-327-1512</li>
        </ul>
      </div>
    </div>
  )
}
