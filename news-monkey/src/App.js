import React from "react";
import Navbar from "./Navbar";
import News from "./News";




function App() {
  return (
    <div>
      <Navbar/>
      <News pageSize={4} country="in" category="sports" />
   
    </div>
  );
}

export default App;
