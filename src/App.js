import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'


function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app_body">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Widgets></Widgets>
      </div>
    </div>
  );
}

export default App;
