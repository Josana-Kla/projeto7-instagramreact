import Footer from "./footer/Footer";
import Profile from "./profile/Profile";
import SugestionList from "./sugestions-list/SugestionList";

function Sidebar() {
  return (
    <div class="sidebar">
      <Profile />
      <SugestionList />
      <Footer />
    </div>
  )
}

export default Sidebar;