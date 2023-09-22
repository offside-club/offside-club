import Homepage from "./components/Homepage/homepage.jsx"
// import About from "./components/About/About.jsx"
import Rewards from "./components/Rewards/Rewards.jsx"
// import Testimony from './components/Testimony/Testimony.jsx';
import Footer from "./components/Footer/Footer.jsx"
import Header from './components/Navbar/Navbar';
import Contest from './components/Contest/Contest';
import Doubt from './components/Doubt/Doubt';
import Terms from './components/TermCondition/index.jsx';
import './App.css';
import { useRoutes } from "react-router";


const Home = () => {
  return (
    <>
      <Header />
      <Homepage />
      <Rewards />
      <Contest />
      <Doubt />
      <Footer />
    </>
  );
}

const router = [
  {
    path: '',
    children: [
      {
        path: '',
        children: [
          { path: '/', element: <Home /> },
          { path: 'Term_Condition', element: <Terms /> },
          { path: '*', element: <Home /> }
        ]
      }
    ]
  },

];

const App = () => {
  const Routes = useRoutes(router);
  return Routes
}


export default App;
