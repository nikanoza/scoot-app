import { useState } from "react";
import { Header, Routing } from "./layouts";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <Routing />
    </div>
  );
}

export default App;
