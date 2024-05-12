import { Link } from 'react-router-dom';
import './RegisterCard.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RegisterCard = () => {
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    const fetchdata = async () => {
        try {
            const response = await axios.post('http://localhost:2000/users/register', {
                firstname,
                lastname,
                email,
                password
            });
            console.log('Response:', response.data); // You can handle the response as per your requirement
            // Optionally, you can reset the form fields after successful registration
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            navigate('/account/login')
        } catch (error) {
            console.error('Error:', error); // Handle error appropriately
        }
    };
    
    return ( 
        <div className="register__card__container">
            <div className="register__card">
                <div className="register__header">
                    <h1>Create Account</h1>
                </div>
                <div className="register__inputs">
                <div className="fname__input__container reg__input__container">
                        <label className="fname__label input__label">First name</label>
                        <input type="text" className="fname__input register__input" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
                    </div>
                    <div className="lname__input__container reg__input__container">
                        <label className="lname__label input__label">Last name</label>
                        <input type="text" className="lname__input register__input"value={lastname} onChange={(e)=>{setLastname(e.target.value)}}/>
                    </div>
                    <div className="email__input__container reg__input__container">
                        <label className="email__label input__label">Email</label>
                        <input type="email" className="email__input register__input" placeholder='example@gmail.com'value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div className="password__input__container reg__input__container">
                        <label className="password__label input__label">Password</label>
                        <input type="password" className="password__input register__input" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className="register__button__container">
                        <button className="register__button"onClick={fetchdata} >Create Account</button>
                    </div>
                </div>
                <div className="register__other__actions">
                    <div className="register__login__account">Already have account? <Link to="/account/login">Login</Link></div>
                </div>
            </div>
        </div>
     );
}
 
export default RegisterCard;