//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import History from "./components/History"
import Blog from "./components/Blog";
import Details from "./components/Details"
import Sidebar from "./components/Sidebar"
import {Route} from "react-router-dom";
 import Particles from "react-particles-js"
 import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'




function App() {

  return (
    <div className="App">
      
     
     
      <Navbar/>
       <div className = "Background">
        <figure>
         
      <img src = "https://wallpapershome.com/images/wallpapers/ready-or-not-1280x720-tactical-fps-best-games-13487.jpg"/>
      <img src = "https://imgix.kotaku.com.au/content/uploads/sites/3/2021/06/25/9bbaf60c5f28aa02c05faab185247f0a.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1280"/>
      <img src = "https://uhdwallpapers.org/uploads/converted/19/11/03/rainbow-six-siege-4k-ultra-hd-wallpaper-1280x720_577955-mm-90.jpg"/>
     
      <img src = "https://sm.ign.com/ign_in/news/b/battlefiel/battlefield-2042-will-use-ai-bots-to-fill-multiplayer-matche_d5be.jpg"/>
      <img src = "https://wallpapershome.com/images/wallpapers/ready-or-not-1280x720-tactical-fps-best-games-13487.jpg"/> 
      
      </figure>
      </div> 
      <Route exact path = "/">
        
        </Route>
        <Route path ="/Home">
          {/* Home */}
          <div className = "together">

          <div className = "first">
            <div className = "move">
            <h3>Steam Deck just had pre-orders and it's sold out already</h3>
            </div>
       
          </div>

          <div className = "second">
           <h3>S.T.A.L.K.E.R 2 finally gets its release date since 2010</h3>
          </div>

          <div className = "third">
          <h3>Ubisoft faces backlash from fans and investors</h3>
          </div>

          <div className = "fourth">
          <h3>Rumors speculate that battlefield:2042 might implement a BR mode</h3>
          </div>
          
          </div>
         
         
        </Route>
        <Route path="/popular">
          Popular Games
          <Popular/>
          <Route exact path="/popular/:id">
          <Details/>
          </Route>
        </Route>
        <Route path="/history">
          History
          <History/>
          </Route>
          <Route exact path="/history/:id">
            <Details/>
          </Route>
          <Route path="/Blog">
             Blog
             <Blog/>
          </Route>
        <footer></footer>
    </div>
  );
}

export default App;
