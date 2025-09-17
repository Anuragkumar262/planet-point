import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Utilities & Data
import { hideLoadingScreen } from './utils/loading';
import { showNotification } from './utils/notifications';
import { applicationData } from './data/applicationData';
import { animateValue } from './utils/animate';

// Page Components
import LandingPage from './pages/LandingPage';

// Layout Components
import Navbar from './components/layout/Navbar'; 
import StudentSidebar from './components/layout/StudentSidebar';
import AdminSidebar from './components/layout/AdminSidebar';

// Student Section Components
import Overview from './components/sections/student/Overview';
import Challenges from './components/sections/student/Challenges';
import Progress from './components/sections/student/Progress';
import Leaderboard from './components/sections/student/Leaderboard';
import Community from './components/sections/student/Community';
import Profile from './components/sections/student/Profile';

// Interface Components
import QuizInterface from './components/sections/interfaces/QuizInterface';
import ActionInterface from './components/sections/interfaces/ActionInterface';

// Admin Section Components
import AdminOverview from './components/sections/admin/AdminOverview';
import StudentReview from './components/sections/admin/StudentReview';

// Common UI Components
import PointsModal from './components/common/PointsModal';
import ThemeToggle from './components/common/ThemeToggle';

// Main App Component
function App() {
  // Corrected and consolidated state management
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [currentSection, setCurrentSection] = useState('overview');
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showAction, setShowAction] = useState(false);
  const [showPointsModal, setShowPointsModal] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [pointsMessage, setPointsMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar ki visibility state

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // User stats state
  const [userStats, setUserStats] = useState({
    points: 1250,
    level: 5,
    badges: 9,
    rank: 3,
    completedChallenges: 28,
    streak: 5
  });

  // Function to update user profile data from the Profile component
  const updateProfileData = (newProfileData) => {
    setUser(prevUser => ({
      ...prevUser,
      ...newProfileData
    }));
    showNotification('Success', 'Profile updated!', 'success');
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      hideLoadingScreen();
    }, 2000);
  }, []);

  const handleLogin = (type, userData) => {
    console.log('🧑‍💻 Logging in with type:', type);
    setUserType(type);
    setUser(userData);
    setCurrentSection(type === 'admin' ? 'adminOverview' : 'overview');
    showNotification('Welcome!', `Hello ${userData.studentName || userData.adminName}!`, 'success');
  };

  const handleLogout = () => {
    setUser(null);
    setUserType(null);
    setCurrentSection('overview');
    setCurrentChallenge(null);
    setShowQuiz(false);
    setShowAction(false);
    showNotification('Logged Out', 'You have been successfully logged out', 'info');
  };

  const handleChallengeSelect = (challenge) => {
    console.log('✅ App received challenge:', challenge.title);
    setCurrentChallenge(challenge);
    if (challenge.type === 'quiz') {
      setShowQuiz(true);
    } else {
      setShowAction(true);
    }
  };

  const handleChallengeComplete = (score, points) => {
    setShowQuiz(false);
    setShowAction(false);
    setCurrentChallenge(null);

    setUserStats(prev => ({
      ...prev,
      points: prev.points + points,
      completedChallenges: prev.completedChallenges + 1,
      badges: prev.badges + (Math.random() > 0.7 ? 1 : 0)
    }));

    setEarnedPoints(points);
    setPointsMessage(`Excellent work! You scored ${score}% and earned ${points} points!`);
    setShowPointsModal(true);

    setTimeout(() => setShowPointsModal(false), 4000);
    setCurrentSection('challenges');
  };

  const handleBackToOverview = () => {
    setShowQuiz(false);
    setShowAction(false);
    setCurrentChallenge(null);
    setCurrentSection('challenges');
  };

  const handleQuickAction = (actionId) => {
    if (actionId === 'quiz') {
      const quizChallenges = applicationData.challenges.filter(c => c.type === 'quiz');
      const randomQuiz = quizChallenges[Math.floor(Math.random() * quizChallenges.length)];
      handleChallengeSelect(randomQuiz);
    } else if (actionId === 'action') {
      const actionChallenges = applicationData.challenges.filter(c => c.type === 'action');
      const randomAction = actionChallenges[Math.floor(Math.random() * actionChallenges.length)];
      handleChallengeSelect(randomAction);
    } else if (actionId === 'share') {
      showNotification('Share', 'Navigate to Community to share your achievements!', 'info');
      setCurrentSection('community');
    }
  };

  const handleSearch = (query) => {
    showNotification('Search', `Searching for: ${query}`, 'info');
    // Implement your search logic here
    // e.g., filter challenges, users, etc., based on the query
  };

  const handleLogoClick = () => {
    if (userType === 'student') {
      navigate('/student/dashboard');
    } else if (userType === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/');
    }
  };

  const handleProfileClick = () => {
    navigate('/student/profile');
  };

  const toggleTheme = () => {
    setIsDark(prevIsDark => !prevIsDark);
    document.body.classList.toggle('dark', !isDark);
  };









// Helper function to render dashboard
  const renderDashboard = () => (
    <div className={`dashboard${isDark ? ' dark' : ''}`}>
      <Navbar
        user={user}
        onLogoClick={handleLogoClick}
        onSearch={handleSearch}
        onProfileClick={handleProfileClick}
        onLogout={handleLogout}
        onToggleSidebar={toggleSidebar}
        isDark={isDark}
      />
      <div className="dashboard-layout">
        {userType === 'student' ?
          <StudentSidebar
            onSectionChange={navigate}
            user={user}
            onLogout={handleLogout}
            isOpen={isSidebarOpen}
            onClose={toggleSidebar}
          /> :
          <AdminSidebar
            onSectionChange={navigate}
            user={user}
            onLogout={handleLogout}
            isOpen={isSidebarOpen}
            onClose={toggleSidebar}
          />
        }
        <main className={`main-content${isSidebarOpen ? ' shifted' : ''}`}>
          <Routes>
            {/* Student Routes */}
            <Route path="/student/dashboard" element={<Overview userStats={userStats} onQuickAction={handleQuickAction} />} />
            <Route path="/student/challenges" element={<Challenges onChallengeSelect={handleChallengeSelect} />} />
            <Route path="/student/progress" element={<Progress userStats={userStats} />} />
            <Route path="/student/leaderboard" element={<Leaderboard currentUser={user} />} />
            <Route path="/student/community" element={<Community currentUser={user} />} />
            <Route path="/student/profile" element={<Profile user={user} userStats={userStats} updateProfileData={updateProfileData} />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminOverview />} />
            <Route path="/admin/student-review" element={<StudentReview />} />
          </Routes>
        </main>
      </div>
      <PointsModal show={showPointsModal} points={earnedPoints} message={pointsMessage} onClose={() => setShowPointsModal(false)} />
      <ThemeToggle onToggleTheme={toggleTheme} isDark={isDark} />
    </div>
  );
























  if (loading) {
    return React.createElement('div', null);
  }

  // Render LandingPage if user is not logged in
  if (!user) {
    return React.createElement(React.Fragment, null,
      React.createElement(LandingPage, { onLogin: handleLogin }),
      React.createElement(ThemeToggle, { onToggleTheme: toggleTheme, isDark: isDark })
    );
  }

  // Render main dashboard after login
  const renderStudentSection = () => {
    if (showQuiz && currentChallenge) {
      return React.createElement(QuizInterface, {
        challenge: currentChallenge,
        onBack: handleBackToOverview,
        onComplete: handleChallengeComplete
      });
    }

    if (showAction && currentChallenge) {
      return React.createElement(ActionInterface, {
        challenge: currentChallenge,
        onBack: handleBackToOverview,
        onComplete: handleChallengeComplete
      });
    }

    switch (currentSection) {
      case 'overview':
        return React.createElement(Overview, {
          userStats,
          onQuickAction: handleQuickAction
        });
      case 'challenges':
        return React.createElement(Challenges, {
          onChallengeSelect: handleChallengeSelect
        });
      case 'progress':
        return React.createElement(Progress, { userStats });
      case 'leaderboard':
        return React.createElement(Leaderboard, { currentUser: user });
      case 'community':
        return React.createElement(Community, { currentUser: user });
      case 'profile':
        // Pass the update function to the Profile component
        return React.createElement(Profile, { user, userStats, updateProfileData });
      default:
        return React.createElement(Overview, {
          userStats,
          onQuickAction: handleQuickAction
        });
    }
  };

  const renderAdminSection = () => {
    switch (currentSection) {
      case 'adminOverview':
        return React.createElement(AdminOverview);
      case 'studentReview':
        return React.createElement(StudentReview);
      default:
        return React.createElement(AdminOverview);
    }
  };

  return React.createElement('div', { className: 'dashboard' },
    React.createElement(Navbar, {
      user,
      onLogoClick: handleLogoClick,
      onSearch: handleSearch,
      onProfileClick: handleProfileClick,
      onLogout: handleLogout,
      onToggleTheme: toggleTheme,
      onToggleSidebar: toggleSidebar,
      isDark
    }),
    React.createElement('div', { className: 'dashboard-layout' },
      userType === 'student' ?
        React.createElement(StudentSidebar, {
          currentSection,
          onSectionChange: setCurrentSection,
          user,
          onLogout: handleLogout,
          isOpen: isSidebarOpen,
          onClose: toggleSidebar
        }) :
        React.createElement(AdminSidebar, {
          currentSection,
          onSectionChange: setCurrentSection,
          user,
          onLogout: handleLogout,
          isOpen: isSidebarOpen,
          onClose: toggleSidebar
        }),
      React.createElement('main', { className: 'main-content' },
        userType === 'student' ? renderStudentSection() : renderAdminSection()
      )
    ),
    React.createElement(PointsModal, {
      show: showPointsModal,
      points: earnedPoints,
      message: pointsMessage,
      onClose: () => setShowPointsModal(false)
    }),
    React.createElement(ThemeToggle, { onToggleTheme: toggleTheme, isDark: isDark })
  );








  
}

export default App;
