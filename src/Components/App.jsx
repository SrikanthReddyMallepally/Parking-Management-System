import React, {useState} from 'react';
import '../Styles/App.css';
import Landing from './LandingPage';
import Footer from './Footer';
import Login from './Login';
import Auth from './Auth';

function App() {
  const[loginPage, setLoginPage]= useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleLoginPage = () => {
    setLoginPage(false);
  };
  
  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  }
  return (
    <div>
      {loginPage ? (
      <div>
        <Landing showLogin={handleLoginPage} />
        <Footer />
      </div>
    ) : (
      isAuthenticated ? (
        <Login />
      ) : (
        <Auth onAuthSuccess={handleAuthSuccess} />
      )
    )}
    </div>
   
  );
}
export default App;
