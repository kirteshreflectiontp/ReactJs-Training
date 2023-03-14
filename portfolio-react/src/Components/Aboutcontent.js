import './Aboutcontent.css'
import React from 'react'
import { Link } from 'react-router-dom'
import React1 from '../Images/projectcard.webp'

const Aboutcontent = () => {
    return (
        <div className='about'>
            <div className='left_abt'>
                <h1>Who Am I ?</h1>
                <p>
                    <div>Im a react frontend developer trainee, graduated B.E in Electrical Engineering in 2022 from Nagpur University.
                    </div>
                    <br />
                    <div>
                        I've created some projects and I can perfectly execute any task assigned to me.
                        I am open for react developer roles, in the field of Software Engineering.
                        You can reach out to me for any such opportunity at : kriteshgaikwad11@gmail.com
                    </div>
                </p>
                <Link to="/contactus">
                    <button className='btn'>Conatct Me</button>
                </Link>
            </div>
            <div className='right_abt'>
                <div className='img-container'>
                    <div className='img-stack a-top'>
                        <img src={React1} className="img" alt='img' />
                    </div>

                    <div className='img-stack a-bottom'>
                        <img src={React1} className="img" alt='img' />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Aboutcontent