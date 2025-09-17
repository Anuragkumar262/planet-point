import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa'; // Import the hamburger and search icons
import '../../assets/main.css';

export default function Navbar({
  user,
  onLogoClick,
  onSearch,
  onProfileClick,
  onLogout,
  isDark,
  onToggleSidebar // <-- Add this new prop here
}) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const initials = user?.name
    ? user.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
    : 'U';

  const submitSearch = (e) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
    setQuery('');
  };

  return (
    <header className={`navbar glossy-navbar${isDark ? ' dark' : ''}`}>
      <div className="navbar-left">
        {/* Add the hamburger button here */}
        <button
          className="hamburger-btn"
          aria-label="Toggle Sidebar"
          onClick={onToggleSidebar}
        >
          <FaBars />
        </button>
        
        <img className="logo-btn" src="./public/PlanetPoint__Logo.png" alt="PlanetPoint logo" />

      </div>
      <div className="navbar-center">
        <form className="navbar-search" onSubmit={submitSearch}>
          <input
            className="search-input"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search challenges, users, community..."
            aria-label="Search"
          />
          <button className="search-btn" type="submit">
            <FaSearch /> {/* Use the search icon here */}
          </button>
        </form>
      </div>
      <div className="navbar-right">
        <div className="profile" ref={menuRef}>
          <button
            className="profile-btn"
            onClick={() => setOpen(prev => !prev)}
            aria-haspopup="menu"
            aria-expanded={open}
          >
            {user?.avatar
              ? <img className="avatar" src={studentName} alt="avatar" />
              : <div className="avatar-initials">{initials}</div>}
          </button>
          {open && (
            <div className="profile-menu" role="menu">
              <button className="profile-menu-item" onClick={() => { setOpen(false); onProfileClick(); }}>Profile</button>
              <button className="profile-menu-item" onClick={() => { setOpen(false); onLogout(); }}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}