import './App.scss';
import Timers from './components/timers/timers.component';
import facebook from './assets/images/icon-facebook.svg';
import pintrest from './assets/images/icon-pinterest.svg';
import instagram from './assets/images/icon-instagram.svg';
function App() {
  return (
    <div className="App">
      <h1 className='text-white desktop:text-3xl tracking-widest'>WE'RE LAUNCHING SOON</h1>
      <Timers />
      <div className='flex flex-row items-center justify-center gap-6 mx-auto'>
        <img src={facebook} alt="facebook" className='cursor-pointer'/>
        <img src={pintrest} alt="pintrest" className='cursor-pointer'/>
        <img src={instagram} alt="instagram" className='cursor-pointer'/>
      </div>
    </div>
  );
}

export default App;
