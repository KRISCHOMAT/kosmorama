import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import VideoStill from "./components/VideoStill";
import CustomPlayer from "./components/CustomPlayer";
import Profile from "./components/Profile";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Header />
        <About />
        <VideoStill />
        <CustomPlayer />
        <Profile />
        <Contact />
      </ParallaxProvider>
    </div>
  );
}

export default App;
