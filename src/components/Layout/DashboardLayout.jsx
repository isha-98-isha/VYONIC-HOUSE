import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './DashboardLayout.css';
import vyonicMark from '../../assets/vyonic-mark-BEL-OzHk.png';
import {
  Home,
  QrCode,
  Route,
  Calendar,
  Dumbbell,
  Activity,
  Trophy,
  ClipboardCheck,
  Wallet,
  User
} from 'lucide-react';

export default function DashboardLayout({ children }) {
   const userSession = localStorage.getItem('vyonicSession');
  const user = userSession ? JSON.parse(userSession) : null;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = () => {
    localStorage.removeItem('vyonicSession');
    window.location.assign('/signup');
  };

  const navigationItems = [
    { name: 'Home', icon: <Home size={16} />, active: true },
    { name: 'My VYONIC ID', icon: <QrCode size={16} /> },
    { name: 'My journey', icon: <Route size={16} /> },
    { name: 'Schedule', icon: <Calendar size={16} /> },
    { name: 'Train', icon: <Dumbbell size={16} /> },
    { name: 'The Floor', icon: <Activity size={16} /> },
    { name: 'Challenges', icon: <Trophy size={16} /> },
    { name: 'My numbers', icon: <ClipboardCheck size={16} /> },
    { name: 'Account', icon: <Wallet size={16} /> },
    { name: 'Me', icon: <User size={16} /> },
  ];

  return (
    <div className="dashboard-layout">
      {/* 1. Main Global Site Navbar Layer */}
      <Navbar />

      {/* 2. SUB-HEADER BAR: Combines Logo block, Grey Member panel tag, and Mobile Trigger */}
      <div className="dashboard-subheader px-4 sm:px-6 flex justify-start items-center">

        {/* LEFT SECTION (Syncs with Sidebar Width) */}
        <div className={`flex items-center overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'w-[14rem]' : 'w-8 md:w-[14rem]'}`}>

          {/* HAMBURGER (Leftmost, Mobile Only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`dashboard-menu-button flex-shrink-0 p-0 ${isMobileMenuOpen ? 'hidden' : 'flex md:hidden'}`}
            aria-label="Toggle Navigation Drawer"
          >
            <svg className="dashboard-icon--menu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* VYONIC HOUSE BRANDING */}
          <div className={`dashboard-brand transition-opacity duration-300 flex-shrink-0 flex items-center gap-2 ${isMobileMenuOpen ? 'ml-4 opacity-100' : 'ml-0 opacity-0 md:opacity-100'}`}>
            <img src={vyonicMark} alt="VYONIC Logo" className="h-3.5 w-5.5 flex-shrink-0" />
            <span><b>VYONIC</b></span>
            <span className="dashboard-brand__dot">•</span>
            <span className="dashboard-brand__section">HOUSE</span>
          </div>

        </div>

        {/* MAIN/CONTENT SECTION */}
        <div className="flex-1 flex items-center">
          {/* Hidden on mobile when sidebar is open; always visible on desktop */}
          <span className={`dashboard-member-label !static !pl-4 !py-0 items-center h-full ml-2 ${isMobileMenuOpen ? 'hidden md:flex' : 'flex'}`}>
            <b>Member</b>
          </span>
        </div>

      </div>

      {/* 3. CORE STRUCTURAL GRID WRAPPER */}
      <div className="dashboard-grid">

        {/* Mobile Backdrop Overlay (Dims content when sidebar is open) */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/60 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

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
                  onClick={() => setIsMobileMenuOpen(false)}
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
              {/* Dynamically loads current user's email */}
              <p className="dashboard-account__email">
                {user?.email || 'review.member@vyonic.house'}
              </p>
              {/* Dynamically loads current user's role */}
              <span className="dashboard-account__role">
                {user?.role || 'client · member'}
              </span>
            </div>
            {/* Exit/Logout Door Action Trigger */}
            <button className="dashboard-signout-button" aria-label="Sign Out" onClick={handleSignOut}>
              <svg className="dashboard-icon--small" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>

        </aside>

        {/* FIXED CIRCULAR QR FLOATING ACTION BUTTON */}
        <div className="dashboard-qr-action">
          <button className="dashboard-qr-button">
            {/* Lucide React QR Code Icon styled to 24px independently */}
            <QrCode className="dashboard-icon--qr" size={24} />
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
