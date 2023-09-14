import { useState } from "react";
import { Footer, Header, Routing } from "./layouts";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white">
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
