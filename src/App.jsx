import './App.css'


// animate css
import 'animate.css';


// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

// mui icon
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from 'react';

function App() {

  // aos
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>


      {/* header */}
      <header className='flex justify-between shadow-xl p-[2%]'>
        {/* left */}
        <div>
          <img src='src/assets/1.jpg' />
        </div>
        {/* right */}
        <div className='flex items-center'>

          <ul className='flex mob:hidden md:inline-flex '>
            <li className='mr-[40px]'>HOME</li>
            <li className='mr-[40px]'>ABOUT</li>
            <li className='mr-[40px]'>SHOP</li>
            <li className='mr-[40px]'>CONTACT</li>
          </ul>
          <Button variant="text" sx={{ width: "50px", borderLeft: "2px solid" }}><ShoppingCartIcon></ShoppingCartIcon>  Cart</Button>

          <div className='md:hidden ml-[20px]'>
            <MenuIcon></MenuIcon>
          </div>
        </div>
      </header>



      {/* section1 */}
      <section className='section1 w-[100%] h-[80vh] md:flex justify-around items-center '>

        <div className='md:flex justify-around items-center'>

          {/* left */}
          <div className='mob:flex  flex-col items-center justify-center mob:mb-[20px] md:items-start'>
            <p className='text-[#D77474] font-bold   animate__animated animate__slideInLeft'>Pompeo Pottery</p>
            <div className='flex items-center'>
              <h1 className='md:text-[50px] mob:text-[30px]  font-bold animate__animated animate__slideInLeft'>Unique Porcelain</h1>
              <img src='src/assets/&.png' />
            </div>
            <h1 className='md:text-[50px] mob:text-[30px] font-bold  animate__animated animate__rotateInUpRight'>Stone Collection</h1>
            <p className='text-[#6C6C6C] mob:text-[10px] md:text-[18px]'>Unique & modern pottery made by our master in porcelain & stones</p>
            <Button variant="contained" sx={{ height: "50px", background: "#AC1313", marginTop: "20px" }}>SHOP COLLECTION</Button>
          </div>

          {/* right */}
          <div>
            <img src='src/assets/image (17).png' />
          </div>
        </div>
      </section>



      {/* section2 */}
      <section className='mt-[40px]'>

        {/* title */}
        <div className='flex flex-col items-center justify-center '>
          <p className='text-[#D77474] font-bold   animate__animated animate__slideInLeft'>Pompeo Pottery</p>
          <div className='flex items-center'>
            <h1 className='md:text-[50px] mob:text-[30px]  font-bold animate__animated animate__slideInLeft'>Porcelain</h1>
            <img src='src/assets/&.png' />
            <h1 className='md:text-[50px] mob:text-[30px]  font-bold animate__animated animate__slideInLeft'>Pottery</h1>
          </div>
        </div>

        <div data-aos="zoom-in-down" className='flex flex-wrap justify-around '>
          <img src='src/assets/Frame (2).png' className='m-[10px]' />
          <img src='src/assets/Frame (3).png' className='m-[10px]' />
          <img src='src/assets/Frame (4).png' className='m-[10px]' />
        </div>


        <div data-aos="zoom-out-down" className='md:flex justify-around mt-[40px]'>
          {/* left */}
          <div className='m-[10px]'>
            <h1 className=' md:text-[40px] mob:text-[30px] font-bold'>Hand Grafted</h1>
            <h1 className=' md:text-[40px] mob:text-[30px] font-bold'>Pottery since 1990</h1>
            <p className='text-[#6C6C6C]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius <br /> enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor  <br />interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et  <br />justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
          </div>
          {/* right */}
          <div className='m-[10px]'>
            <h1 className='md:text-[40px] mob:text-[30px] font-bold'>Hand Grafted</h1>
            <h1 className='md:text-[40px] mob:text-[30px] font-bold'>Pottery since 1990</h1>
            <p className='text-[#6C6C6C]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius <br /> enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor  <br />interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et  <br />justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>

          </div>

        </div>


      </section>

    </>
  )
}
export default App
