import logo from '../assets/logo.svg'
const Header = () => {
  return (
    <div className="bg-main flex items-center justify-between md:px-12 px-5 py-2 border-b-[1.5px] border-zinc-300 shadow-sm shadow-zinc-200">
        <div className="flex-1">
          <div className='flex gap-2 items-center'>
            <div className="text-white font-medium text-lg">
              <img src={logo} alt="logo" className='md:w-9 w-7' />
            </div>
            <div className='flex flex-col'>
              <h3 className="md:text-xl text-lg md:leading-6 leading-none font-bold text-white tracking-wide">Statistics Calculator</h3>
              <p className="text-sm text-slate-50 tracking-wide">Developed by: Mackiee</p>
            </div>
          </div>
            
        </div>
        
      
    </div>
  )
}

export default Header
