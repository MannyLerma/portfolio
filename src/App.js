import './App.css';
import TopNavBar from "./components/topNavBar/top-bar";
import Intro from './components/introduction/intro';
import Projects from './components/selected-works/projects';

function App() {
  return (
    <div className='container'>
        <TopNavBar />
        <Intro />
        <Projects />

    </div>
  );
}

export default App;
