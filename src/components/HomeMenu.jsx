import "./HomeMenu.css/";
function HomeMenu() {
  return (
    <div className="homeMenuBackground">
      <div className="homeMenuButtons">
        <button className="widgetsButton">Widgets</button>
        <button className="appsButton">Apps</button>
        <button className="settingsButton">Settings</button>
      </div>
      <div>{/* <button className="returnButton">return</button> */}</div>
    </div>
  );
}

export default HomeMenu;
