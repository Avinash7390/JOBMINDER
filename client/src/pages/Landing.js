import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing'
import {Logo} from '../components'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
     <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className="container page">
            <div className='info'>

                <h1>job <span>tracking</span> app</h1>
                <p>
                Welcome to Jobminder, your personalized job application management solution. 
                Tired of keeping track of numerous job applications across different platforms? 
                Look no further! Our user-friendly platform simplifies the job application process,
                 allowing you to effortlessly track and manage all your applications in one place.

                </p>
                <Link to='/register' className= 'btn btn-hero'>
                    Login/register
                </Link>

            </div>
            <img src={main} alt="job hunt" className='img main-img'/>
        </div>
     </Wrapper>
  )
}

export default Landing