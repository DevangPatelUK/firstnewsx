import {logo} from '../assets';
 

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
     <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <img src={logo} alt='sumz_logo' className='w-28 object-contain'/>
      <button 
      type='button' 
      onClick={() => window.open('https://github.com/DevangPatelUK/')}
      className='black_btn'
      >
        Github
      </button>
     </nav>
     <h1 className='head_text'>
       Summary of Anything with AI on <br className='max-md:hidden'/>
      <span className='orange_gradient'>
        First News X 
      </span>
     </h1>
     <h2 className='desc'>
      Use AI to save time 
     </h2>
    </header>
  )
}

export default Hero