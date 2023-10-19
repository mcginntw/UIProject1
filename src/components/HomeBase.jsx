import { useState } from "react"; //added so we can access React's useState hook
import "../App.css/";
import HomeButton from "./HomeButton";
import HomeMenu from "./HomeMenu";

function HomeBase() {
  const [isActive, setActive] = useState(false);
  return (
    <div>
      {isActive === true && <HomeMenu />}
      <HomeButton onClick={() => setActive(true)} />
    </div>
  );
}

export default HomeBase;
