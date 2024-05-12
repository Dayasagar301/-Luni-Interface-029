import { Link } from 'react-router-dom';
import './LoginCard.css';
import { useState } from 'react';

const LoginCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Here you can implement the logic to authenticate the user
        // For simplicity, let's just redirect to a different page after login
        // Replace '/dashboard' with the desired page after successful login
        window.location.href = '/';
    }

    return ( 
        <div className="login__card__container">
            <div className="login__card">
                <div className="login__header">
                    <h1>Login</h1>
                </div>
                <div className="login__inputs">
                    <div className="email__input__container input__container">
                        <label className="email__label input__label">Email</label>
                        <input type="email" className="email__input login__input" placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="password__input__container input__container">
                        <label className="password__label input__label" >Password</label>
                        <input type="password" className="password__input login__input" placeholder='**********' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="login__button__container">
                        <button className="login__button" onClick={handleLogin}>LOGIN</button>
                    </div>
                </div>
                <div className="login__other__actions">
                    <div className="login__forgot__password">Forgot password?</div>
                    <div className="login__new__account">Don't have an account? <Link to="/account/register">Create account</Link> </div>
                </div>
            </div>
        </div>
    );
}
 
export default LoginCard;
