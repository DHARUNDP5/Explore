import React from 'react'
import { useState, useEffect } from 'react'
import VectorLogo from "../Images/Vector.svg"
import google from "../Images/google-logo-transparent-alphabet-4.png"
import { signup } from '../../Redux/Slice/signupSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import "../signup/signup.css"

const Signup = () => {

    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const { data, loading } = useSelector((state) => state.sigupdata);
    const [loginStatus, setLoginStatus] = useState({status: 0, message: ''});

    useEffect(() => {
        if (data.response === 'success') {
            setLoginStatus({
                status: 1,
                message: 'success'
            })
            // Navigate('/LandingPage')
        } else if(data.response === 'failure') {
            setLoginStatus({
                status: 1,
                message: 'failure'
            })
        }

    }, [data])
    const enter = (e) => {
        e.preventDefault();
        const userFirstname = e.target.elements[0].value;
        const userLastname = e.target.elements[1].value;
        const userEmail = e.target.elements[2].value;
        const userPassword = e.target.elements[3].value;
        const userPhoneNumber = e.target.elements[4].value;
        e.target.elements[0].value = "";
        e.target.elements[1].value = "";
        e.target.elements[2].value = "";
        e.target.elements[3].value = "";
        e.target.elements[4].value = "";
        dispatch(signup({ userFirstname, userLastname, userEmail, userPassword, userPhoneNumber }));
    }



    return (
        <>
       
        <div className='singup-container'>
        {
            loginStatus.status>0 && 
                <div className='signup-status--container'>
                {loginStatus.message === 'success' && <span className="signup-success">Signup Success!! Signin now</span>}
                {loginStatus.message === 'failure' &&<span className="signup-failure">Check the user date given</span>}
                </div>
        }
        
        <form className="singup-container--form" onSubmit={enter}>
            <img className='signuplogo' src={VectorLogo} />
            <p className='signup' > SIGN UP </p>
            <div className="name" >
                <input type="text" placeholder='   First Name *' required className='box1'></input>
                <input type="text" placeholder='   Last Name *' required className='box2'></input>
            </div>
            <input type="text" placeholder='   Email Address *' required className='box3' ></input>
            <input type="text" placeholder='   Password *' required className='box4' ></input>
            <input type="text" placeholder='    Phone Number *' required className='box5'></input>
            <button className='Sign-in-btn' > SIGN UP </button>
            <button className='Sign-in-btn-glg' > < img className='Googlelogo' src={google} />GOOGLE SIGN UP</button >
            <p className='Login-link' > Already Have An Account ? <Link to="/" >LOGIN</Link></p >
        </form>
        </div>
        </>
        


    )

}

export default Signup