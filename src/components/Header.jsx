import react from 'react';
import Navigation from './Navigation';
import Search from './Search';
import TabBox from './TabBox';

function Header(){

    return(
        <>
                <header className="flex justify-center items-center p-4 bg-blue-600 text-white">
                <div className="absolute inset-x-0 top-0 z-50">
                    <Navigation/>
                </div>
          <div className='text-center z-10'>
            <h1 className="text-6xl font-bold mb-3">Explore Your City</h1>
          <p className='text-lg mt-1'>Let's uncover the best places to eat, drink, and shop nearest to you.</p>
          <div className="mt-2">
          <Search/>
          </div>
          <div className="mt-2">
          <TabBox/>
          </div>
          </div>
        
  </header>
        </>
    )
}

export default Header;