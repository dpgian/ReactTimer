var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>
            React Timer App
          </li>
          <li>
            <Link to='/' activeClassName='active-link'>Timer</Link>
          </li>
          <li>
            <Link to='/' activeClassName='active-link'>Countdown</Link>
          </li>
        </ul>
      </div>
      <div className='top-bar-right'>
        <ul className='menu-text'>Created by <a>Gianpierangelo De Palma</a></ul>
      </div>
    </div>
  );
};

module.exports = Nav;
