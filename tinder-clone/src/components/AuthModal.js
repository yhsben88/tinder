import { useState } from 'react'

const AuthModal = ({setShowModal}) => {
    
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

    console.log(email, password, confirmPassword)

    const handleClick =() => {
        setShowModal(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const isSignup = true

    return (
        <div className="auth-modal">

            <div className = "close-icon" onClick={handleClick}>ⓧ</div>
            AUTH MODAL
            <h2>{isSignup ? "Create Account" : "Log in"}</h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
            
            <form onSubmit = {handleSubmit}>
                <input
                    type = "email"
                    id = "email"
                    name = "email"
                    placeholder = "email"
                    required = {true}
                    onChange = { (e) => setEmail(e.target.value)}
                />
                <input
                    type = "password"
                    id = "password"
                    name = "password"
                    placeholder = "password"
                    required = {true}
                    onChange = { (e) => setPassword(e.target.value)}
                />
                <input
                    type = "password-check"
                    id = "password-check"
                    name = "password-check"
                    placeholder = "confirm password"
                    required = {true}
                    onChange = { (e) => setConfirmPassword(e.target.value)}
                />
                <input className="secondary-button" type="submit"/>
                <p>{error}</p>
            </form>
            <hr/>
            <h2>GET THE APP</h2>


        </div>
    )
}

export default AuthModal;