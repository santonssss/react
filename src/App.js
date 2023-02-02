import './App.scss';
import imgssss from './1.png'
import img2 from './2.png'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <section className='sect1'>
        <div className='left'>
          <div className='img-for_left'>
            <img src = {imgssss} />
          
          </div>
          <h3>
              Alga Yagic
            </h3>
          {/* <button className='btn'>
              <img src = {img2} />
            </button> */}
              <Button variant="contained" className='btnfrommui active'> 
              <div className='icons active-icon'>
              <img src = {img2} />
              </div>
               Contained
               </Button>
               <Button variant="contained" className='btnfrommui'> 
              <div className='icons'>
              <img src = {img2} />
              </div>
               Contained
               </Button>
               <Button variant="contained" className='btnfrommui'> 
              <div className='icons'>
              <img src = {img2} />
              </div>
               Contained
               </Button>
               <Button variant="contained" className='btnfrommui '> 
              <div className='icons'>
              <img src = {img2} />
              </div>
               Contained
               </Button>

        </div>
        <main className='main_page'>
          
        </main>
      </section>
    </div>
  );
}

export default App;
