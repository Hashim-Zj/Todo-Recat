import { useEffect, useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
function Header() {

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">My ToDo</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="">Contact</Link></li>
                <li className="nav-item">
                  <span className="nav-link" style={{ fontWeight: 'bold', color: '#007BFF' }}>{currentDate}</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header