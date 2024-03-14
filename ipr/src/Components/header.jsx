
// import ParticlesBg from "particles-bg";
// import banner from '../../public/img/bg2.jpg';
// import bgImage from '../Components/Images/bg.jpeg';

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        {/* <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} /> */}

        {/* <img src=""/> */}
        {/* <img src={banner} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 , opacity: 0.2, }} />
        */}
        <div className='overlay'>
          <div className='container'>
          
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Get Started
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}