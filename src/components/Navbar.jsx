import { useState } from 'react'
import { close, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>

      <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-semibold cursor-pointer md:transform md:hover:scale-125 md:transition md:duration-300
              text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
              text-[#8B5E3B]`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>

        ))}
      </ul>

      <div className='sm:hidden flex flex-1
         justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#33160C]
                absolute top-20 right-0 mx-4 
                my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-primary
                            font-normal cursor-pointer 
                            text-[16px] ${index === 
                            navLinks.length - 1 ? 'mr-0' 
                            : 'mb-4'}
                            text-white`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>

            ))}
          </ul>

        </div>
      </div>

    </nav>
  )
}

export default Navbar