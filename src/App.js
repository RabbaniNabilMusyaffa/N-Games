import './style/first.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import TopSeller from './components/TopSeller';

function App() {
  return (
   <div>
    {/* intro / homepage */}
    <div className='myBg'>
      <NavigationBar />
      <Intro />
    </div>
    {/* end of intro / homepage */}

    {/* // Trending Section */}
    <div className='trending'>
      <Trending />
    </div>
    {/* end of trending */}


    <div className="topSeller">
      <TopSeller />
    </div>
   </div>
  );
}

export default App;
