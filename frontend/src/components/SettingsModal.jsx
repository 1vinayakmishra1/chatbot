import '../components/settingsModal.css'
import ProfilePic from "../assets/loadingSpinnerGif.gif"

function SettingsModal({ modal, toggleModal }) {
  return (
    modal && 
    <div className="settings-modal">
  <div className="settings-header">
    <h2>Settings</h2>
    <button onClick={toggleModal} className="close-btn">&times;</button>
  </div>

  <div className="settings-content">
      <div className="profile-pic">
        <img src={ProfilePic} alt="Profile" />
      </div>

    <div className="account-section">
      <button className="login-btn">Log In</button>
      <button className="password-btn">Change Password</button>
    </div>
  </div>
</div>

  );
}

export default SettingsModal;