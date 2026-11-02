import '../components/settingsModal.css'
import ProfilePic from "../assets/loadingSpinnerGif.gif"
import { useState } from 'react';

function SettingsModal({ modal, toggleModal }) {
  const [view, setView] = useState('settings');

  const handleSubmit = (event) => {
    event.preventDefault();

    if(view === 'sign-up') {
      const password = event.target.password.value;
      const confirmPassword = event.target.confirmPassword.value;

      if (password !== confirmPassword) {
        alert('password do not match');
        return;
      }
    }
  }

  return (
    modal &&
    <div className="settings-modal">
      <div className="settings-header">
        <h2>
          {view === 'settings' && 'Settings'}
          {view === 'login' && 'Log In'}
          {view === 'sign-up' && 'Sign Up'}
        </h2>
        <button onClick={toggleModal} className="close-btn">&times;</button>
      </div>

      {view === 'settings' ?
        (<div className="settings-content">
          <div className="profile-pic">
            <img src={ProfilePic} alt="Profile" />
          </div>

          <div className="account-section">
            <button className="login-btn" onClick={() => {setView('login')}}>Log In</button>
            <button className="SignUp-btn" onClick={() => {setView('sign-up')}}>Sign Up</button>
          </div>
        </div>)
        : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <input className="auth-input" type="email" placeholder="Email" required />
            <input className="auth-input" name="password" type="password" placeholder="Password" required />

            {view === 'sign-up' &&
            (<input className="auth-input" name="confirmPassword" type="password" placeholder="Confirm Password" required />)}

            <button className="auth-submit-btn" type="submit">
              {view === 'login' ? 'Log In' : 'Sign Up'}
            </button>

            <button className="auth-back-btn" type="button" onClick={() => {setView('settings')}}>Back</button>
            
          </form>
        )}
    </div>

  );
}

export default SettingsModal;
