import '../components/settingsModal.css'
import ProfilePic from "../assets/loadingSpinnerGif.gif"

function SettingsModal({ modal }) {
  return (
    modal && 
    <div className="settings-modal">
  <div className="settings-header">
    <h2>Settings</h2>
    <button className="close-btn">&times;</button>
  </div>

  <div className="settings-content">
    <div className="profile-section">
      <div className="profile-pic">
        {/* Placeholder for profile picture */}
        <img src={ProfilePic} alt="Profile" />
      </div>
      <button className="profile-btn">View Profile</button>
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