
import './App.css';
import { useSelector} from 'react-redux'
import PhotosUi from './components/PhotosUi';
import BtnController from './components/BtnController';


function App() {
  const dark = useSelector((state)=>(state.button.darkMode))
  return (
    <div className= {` ${dark ? 'bg-black text-white' : 'bg-white' }`}>
      <h1 className=' text-center font-bold text-4xl pt-5'>Photo Gallery</h1>
      <BtnController/>
      <PhotosUi />
    </div>
  );
}

export default App;
