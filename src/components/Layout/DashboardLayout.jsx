import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './DashboardLayout.css';

export default function DashboardLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', icon: '🏠', active: true },
    { name: 'My VYONIC ID', icon: '🆔' },
    { name: 'My journey', icon: '📈' },
    { name: 'Schedule', icon: '📅' },
    { name: 'Train', icon: '🏋️' },
    { name: 'The Floor', icon: '👟' },
    { name: 'Challenges', icon: '🏆' },
    { name: 'My numbers', icon: '🔢' },
    { name: 'Account', icon: '👤' },
    { name: 'Me', icon: '🧑' },
  ];

  return (
    <div className="dashboard-layout">
      {/* 1. Main Global Site Navbar Layer */}
      <Navbar />

      {/* 2. SUB-HEADER BAR: Combines Logo block, Grey Member panel tag, and Mobile Trigger */}
      <div className="dashboard-subheader px-4 sm:px-6 md:justify-start">
        
        {/* Left Side: Brand Flag & Section Segment Label */}
        <div className="dashboard-brand-section">
          {/* High Fidelity Logo with custom grey separator dot */}
          <div className="dashboard-brand">
            <span><b>VYONIC</b></span>
            <span className="dashboard-brand__dot">•</span>
            <span className="dashboard-brand__section">HOUSE</span>
          </div>

          {/* Context header tag (Hidden on compact mobile screens, visible on wider frames) */}
          <span className="dashboard-member-label hidden sm:inline-block">
           <b>Member</b>
          </span>
        </div>

        {/* Right Side: Clean 3-Dash Hamburger Button (Only displays on Mobile viewports) */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="dashboard-menu-button md:hidden"
          aria-label="Toggle Navigation Drawer"
        >
          {isMobileMenuOpen ? (
            // Close X Icon when active
            <svg className="dashboard-icon--menu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Premium 3-Dash Menu Bars Icon matching mockup view targets
            <svg className="dashboard-icon--menu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 3. CORE STRUCTURAL GRID WRAPPER */}
      <div className="dashboard-grid">
        
        {/* SIDEBAR CONTAINER FRAME: Drops under header layers instantly */}
        <aside
          className={`dashboard-sidebar ${isMobileMenuOpen ? 'dashboard-sidebar--open translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        >
          <div className="dashboard-sidebar__content">
            <span className="dashboard-sidebar__label">MEMBER</span>
            <nav className="dashboard-navigation">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`dashboard-nav-link ${item.active ? 'dashboard-nav-link--active' : ''}`}
                >
                  <span className="dashboard-nav-link__icon">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Authenticated Account Footer segment inside layout */}
          <div className="dashboard-account">
            <div className="dashboard-account__details">
              <p className="dashboard-account__email">review.member@vyonic.house</p>
              <span className="dashboard-account__role">client · member</span>
            </div>
            {/* Exit/Logout Door Action Trigger */}
            <button className="dashboard-signout-button" aria-label="Sign Out">
              <svg className="dashboard-icon--small" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </aside>

        {/* FIXED CIRCULAR QR FLOATING ACTION BUTTON */}
        <div className="dashboard-qr-action">
          <button className="dashboard-qr-button">
            {/* Embedded QR Code Grid Vector Visual */}
            <svg className="dashboard-icon--qr" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 13h6v6H3v-6zm2 2v2h2V5H5zm13-2h3v2h-3v-2zm-2 2h2v2h-2v-2zm2 2h3v2h-3v-2zm-2 2h2v2h-2v-2zm-2-4h2v2h-2v-2zm4-2h2v2h-2v-2z"/>
            </svg>
          </button>
        </div>

        {/* ACTIVE MIDDLE VIEW WINDOW FRAME */}
        <main className="dashboard-main md:pl-64 md:pt-0">
          <div className="dashboard-content px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}
