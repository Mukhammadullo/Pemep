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
import Card1 from './components/Card1';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

// mui
import TextField from '@mui/material/TextField';




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
          <Button variant="text" sx={{ width: "50px", borderLeft: "2px solid" }}> <ShoppingCartIcon className='ml-[20px]'></ShoppingCartIcon>  Cart</Button>

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



      {/* section4 */}
      <section className='mt-[40px]'>

        {/* main */}
        <div >
          {/* row1 */}
          <div data-aos="fade-up" className='md:flex justify-around items-center m-[10px]'>
            {/* left */}
            <div className='mob:flex justify-center'>
              <img src='src/assets/IMAGE (18).png' />
            </div>
            {/* right */}
            <div>
              <h1 className='text-[20px] font-bold mb-[20px]'>Gold & Black Pottery</h1>
              <p className='text-[#6C6C6C]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed <br /> do eiusmod tempor incididunt ut labore dolore aua. Ut enim <br /> ad minim veniam, quis nostrud exercitationulco laboris nisi <br /> ut aliquip ex ea commodo consequatuisaute.</p>
              <p className='font-bold mt-[10px]'>View Details</p>
            </div>
          </div>

          {/* row2 */}
          <div data-aos="fade-left" className='md:flex justify-around items-center m-[10px]'>

            {/* right */}
            <div>
              <h1 className='text-[20px] font-bold mb-[20px]'>Gold & Black Pottery</h1>
              <p className='text-[#6C6C6C]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed <br /> do eiusmod tempor incididunt ut labore dolore aua. Ut enim <br /> ad minim veniam, quis nostrud exercitationulco laboris nisi <br /> ut aliquip ex ea commodo consequatuisaute.</p>
              <p className='font-bold mt-[10px]'>View Details</p>
            </div>
            {/* left */}
            <div className='mob:flex justify-center'>
              <img src='src/assets/IMAGE (19).png' />
            </div>
          </div>
        </div>
      </section>


      {/* section5 */}
      <section>


        {/* title */}

        <div className='flex flex-col  items-center justify-center'>
          <p className='text-[#D77474] font-bold   animate__animated animate__slideInLeft'>Pompeo Pottery</p>
          <h1 className='md:text-[30px] font-bold  animate__animated animate__fadeInTopRight'>Pottery Collection</h1>
        </div>


        {/* cards */}
        <div>

          {/* row1 */}
          <div data-aos="fade-up" className='md:flex justify-around'>
            <Card1 img={"src/assets/Frame (5).png"} title={"Decor Plate"} price={"$ 65.00 USD"}></Card1>
            <Card1 img={"src/assets/Frame (5).png"} title={"Mint Pottery"} price={"$ 65.00 USD"}></Card1>
            <Card1 img={"src/assets/Frame (5).png"} title={"Decor Plate"} price={"$ 65.00 USD"}></Card1>
          </div>
          {/* row2 */}
          <div data-aos="fade-down" className='md:flex justify-around mt-[20px]'>
            <Card1 img={"src/assets/Frame (5).png"} title={"Decor Plate"} price={"$ 65.00 USD"}></Card1>
            <Card1 img={"src/assets/Frame (5).png"} title={"Decor Plate"} price={"$ 65.00 USD"}></Card1>
            <Card1  img={"src/assets/Frame (5).png"} title={"Decor Plate"} price={"$ 65.00 USD"}></Card1>
          </div>


        </div>
        <div className='flex justify-center  mt-[10px]'>
          <Button variant="contained" sx={{ height: "50px", background: "#AC1313", marginTop: "20px" }}>View All Products</Button>
        </div>
      </section>


      {/* section6 */}
      <section data-aos="flip-right" className='section6 w-[100%] h-[40vh] mt-[80px] flex items-center'>
        <div className='ml-[30px]'>
          <p className='text-[#D77474] font-bold   animate__animated animate__slideInLeft'>Pompeo Pottery</p>
          <h1 className='md:text-[30px] font-bold  animate__animated animate__fadeInTopRight'>Pottery Collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum.</p>
          <Button variant="contained" sx={{ height: "50px", background: "#AC1313", marginTop: "20px" }}>View All Products</Button>
        </div>
      </section>


      {/* section7 */}
      <section data-aos="zoom-in-right">

        <div >
          <div data-aos="zoom-in-right" className='flex flex-col justify-center items-center m-[4%]'>
            <img src='src/assets/IMAGE.svg' />
            <p className='m-[20px] text-[red]'>Latest news</p>
          </div>

          <div className='flex items-center justify-center m-[3%]'>
            <h1 className='md:text-[50px] mob:text-[30px]  font-bold animate__animated animate__slideInLeft'>Porcelain</h1>
            <img src='src/assets/&.png' />
            <h1 className='md:text-[50px] mob:text-[30px]  font-bold animate__animated animate__slideInLeft'>Pottery</h1>
          </div>


          <div className='flex justify-center m-[3%]'>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ marginRight: "5px" }} />
            <Button variant="contained" sx={{ width: "150px", height: "55px", background: "black" }}>Contained</Button>
          </div>


          <div className='flex justify-center items-center  mb-[30px]'>
            <Checkbox {...label} defaultChecked color="secondary" />
            <p className='text-[#A1A1A1]'>Sign up for our newsletter</p>
          </div>
        </div>
      </section>




      {/* section8 */}
      <hr />
      <section data-aos="zoom-out-left" className='bg-[#DBDBDB1A] p-[4%]'>

        <div className='flex justify-center '>
          <div>
            <img src='src/assets/1.jpg' />
            <p className='text-[#6C6C6C]'>I have always striven to fix beauty in wood, stone,</p>
            <p className='text-[#6C6C6C]'>glass or pottery, that has been my creed.</p>
          </div>
        </div>


        <div className='md:flex justify-around  mt-[50px]'>

          <div>
            <EmailIcon></EmailIcon>
            <p className='mb-[20px]'>EMAIL</p>
            <p className='text-[#6C6C6C]'>pompeopotery@gmail.com</p>
          </div>


          <div>
            <AddLocationIcon></AddLocationIcon>
            <p className='mb-[20px]'>FIND</p>
            <p className='text-[#6C6C6C]'>Central Park, Manhattan</p>
          </div>

          <div>
            <PhoneInTalkIcon></PhoneInTalkIcon>
            <p className='mb-[20px]'>CALL</p>
            <p className='text-[#6C6C6C]'>+1 292 345 678</p>
          </div>

        </div>
      </section>

      {/* footer */}
      <hr />
      <footer  className='p-[1%]'>

        <div className='flex justify-center'>
          <h1>Template design by</h1>
          <p className='text-[#6C6C6C]'>Dorian Hoxha-Image License Info</p>
          <p className='text-[#6C6C6C]'>Powered by</p>
          <p>Webflow  </p>
        </div>
      </footer>

    </>
  )
}
export default App
