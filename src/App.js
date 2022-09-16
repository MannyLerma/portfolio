import './App.css';
import TopNavBar from "./components/topNavBar/top-bar";
import Intro from './components/introduction/intro';
import Projects from './components/selected-works/projects';
import Resume from './components/resume/resume'

function App() {
  return (
    <div className='container'>
        <TopNavBar />
        <Intro />
        <Projects />
        <Resume />

    </div>
  );
}

export default App;
