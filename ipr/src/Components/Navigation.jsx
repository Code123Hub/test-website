

import { Link, useNavigate  } from "react-router-dom"


export const Navigation = (props) => {

  const navigate = useNavigate();

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
           The IPR Gorilla
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/' className='page-scroll'>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            
            <li>
              <a href='#services' className='page-scroll'>
                Sponsors
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Past Events
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#agenda' className='page-scroll'>
                Agenda
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
            <li>
            
            <button className='btn btn-custom btn-lg' onClick={() => navigate("/login")}>
                Login
              </button>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}