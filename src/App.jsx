import React, { useState, useEffect } from 'react';
import './style.css'; // Import the main style.css
import appData from './data.js'; // Import appData

// Import all section components
import AssessmentSection from './components/AssessmentSection';
import LearningPathSection from './components/LearningPathSection';
import ProjectsSection from './components/ProjectsSection';
import LeetPromptSection from './components/LeetPromptSection';
import CodeEditorSection from './components/CodeEditorSection';
import AIFlowBuilderSection from './components/AIFlowBuilderSection';
import CodeQuestSection from './components/CodeQuestSection';
import EchoDeepakSection from './components/EchoDeepakSection';
import CoursesSection from './components/CoursesSection';
import MentorshipSection from './components/MentorshipSection';
import TalentPoolSection from './components/TalentPoolSection';
import InterviewQuestionsSection from './components/InterviewQuestionsSection';
import IndustryRealityCheckSection from './components/IndustryRealityCheckSection';
import ResumeOptimizerSection from './components/ResumeOptimizerSection';
import CommunitySection from './components/CommunitySection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import ActivitySection from './components/ActivitySection';
import LinkedInSection from './components/LinkedInSection';
import SkillsSection from './components/SkillsSection';
import LeetPromptStats from './components/LeetPromptStats';
import ProjectStats from './components/ProjectStats';

// NavLink Component
const NavLink = ({ item, isActive, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(item.sectionId);
  };

  return (
    <li className="nav-item" style={{ animationDelay: item.delay }}>
      <a
        href="#"
        className={`nav-link ${isActive ? 'active' : ''}`}
        onClick={handleClick}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(8px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
      >
        <i className={`fas fa-${item.icon} nav-icon`}></i>
        <span className="nav-text">{item.name}</span>
        <div className="nav-link-hover"></div>
      </a>
    </li>
  );
};

// NavSection Component (optional, for better organization if needed later)
// For now, we'll inline the list rendering in App.jsx

// DashboardHeader Component
const DashboardHeader = () => {
  const [hidevsScore, setHidevsScore] = useState(0);
  const [currentLevel, setCurrentLevel] = useState('Beginner');
  const [leetpromptCount, setLeetpromptCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [linkedinStreak, setLinkedinStreak] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setHidevsScore(1250);
        setCurrentLevel('Intermediate');
        setLeetpromptCount(47);
        setProjectsCount(12);
        setLinkedinStreak(8);
      }, 500);
    };
    fetchData();
  }, []);

  return (
    <header className="dashboard-header">
      <div className="header-content">
        <div className="welcome-section">
          <h1>Hi, there!</h1>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-label">HiDevs Score</span>
              <span className="stat-value" id="hidevs-score">{hidevsScore}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Current Level</span>
              <span className="stat-value" id="current-level">{currentLevel}</span>
            </div>
          </div>
        </div>
        
        <div className="header-counters">
          <div className="counter-item">
            <span className="counter-value" id="leetprompt-count">{leetpromptCount}</span>
            <span className="counter-label">LeetPrompt</span>
          </div>
          <div className="counter-item">
            <span className="counter-value" id="projects-count">{projectsCount}</span>
            <span className="counter-label">Projects</span>
          </div>
          <div className="counter-item">
            <span className="counter-value" id="linkedin-streak">{linkedinStreak}</span>
            <span className="counter-label">LinkedIn Streak</span>
          </div>
        </div>
      </div>
    </header>
  );
};

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('hidevs-theme');
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });
  const [activeSection, setActiveSection] = useState('dashboardSection');

  useEffect(() => {
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    localStorage.setItem('hidevs-theme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    document.documentElement.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 300);
    // showNotification(`Switched to ${newTheme} theme 🌙`); // Re-enable once notification component is ready
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prevState => !prevState);
  };

  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    // showNotification(`Navigating to ${sectionId}... 🚀`); // Re-enable once notification component is ready
  };

  const getThemeIcon = () => {
    return currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboardSection':
        return (
          <>
            <AssessmentSection />
            <LearningPathSection />
            <div className="dashboard-grid" id="dashboardSection">
              <div className="dashboard-row">
                <ActivitySection />
                <LinkedInSection />
              </div>
              <div className="dashboard-row">
                <SkillsSection />
                <div className="stats-section">
                  <div className="stats-grid">
                    <LeetPromptStats />
                    <ProjectStats />
                  </div>
                </div>
              </div>
              <div className="dashboard-row">
                <CodeQuestSection />
                <ProjectsSection />
              </div>
            </div>
            <CommunitySection />
            <TestimonialsSection />
            <PricingSection />
          </>
        );
      case 'learningPathSection':
        return <LearningPathSection />;
      case 'projectsSection':
        return <ProjectsSection />;
      case 'leetpromptSection':
        return <LeetPromptSection />;
      case 'aiFlowBuilderSection':
        return <AIFlowBuilderSection />;
      case 'codeQuestSection':
        return <CodeQuestSection />;
      case 'echoDeepakSection':
        return <EchoDeepakSection />;
      case 'coursesSection':
        return <CoursesSection />;
      case 'mentorshipSection':
        return <MentorshipSection />;
      case 'talentPoolSection':
        return <TalentPoolSection />;
      case 'interviewQuestionsSection':
        return <InterviewQuestionsSection />;
      case 'industryRealityCheckSection':
        return <IndustryRealityCheckSection />;
      case 'resumeOptimizerSection':
        return <ResumeOptimizerSection />;
      case 'communitySection':
        return <CommunitySection />;
      case 'testimonialsSection':
        return <TestimonialsSection />;
      case 'pricingSection':
        return <PricingSection />;
      case 'codeEditorSection':
        return <CodeEditorSection />;
      default:
        return <DashboardSection />;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <nav className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`} id="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <i className="fas fa-code"></i>
            <span className="logo-text">HiDevs</span>
          </div>
          <div className="sidebar-controls">
            <button className="theme-toggle" id="themeToggle" aria-label="Toggle theme" onClick={toggleTheme}>
              <i className={getThemeIcon()}></i>
            </button>
            <button className="sidebar-toggle" id="sidebarToggle" aria-label="Toggle sidebar" onClick={toggleSidebar}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        
        <div className="sidebar-menu">
          <div className="nav-section">
            <ul className="nav-list">
              {appData.navigation_items.map((item, index) => (
                <NavLink 
                  key={item.name} 
                  item={{ ...item, delay: `${index * 0.1}s` }} 
                  isActive={activeSection === item.sectionId} 
                  onClick={handleNavLinkClick} 
                />
              ))}
            </ul>
          </div>
          
          <div className="nav-section">
            <ul className="nav-list">
              {appData.additional_nav_items.map((item, index) => (
                <NavLink 
                  key={item.name} 
                  item={{ ...item, delay: `${(appData.navigation_items.length + index) * 0.1}s` }} 
                  isActive={activeSection === item.sectionId} 
                  onClick={handleNavLinkClick} 
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content" id="mainContent" style={{ marginLeft: isSidebarCollapsed ? '80px' : '280px' }}>
        <DashboardHeader />
        {renderContent()}
      </main>
    </div>
  );
}

export default App; 