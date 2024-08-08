import colorlogo from '../images/color-tinder-logo.png'
import whitelogo from '../images/white-tinder-logo.png'

const Nav=({minimal, authToken, setShowModal, showModal})=>{
    
    const handleClick = ()=> {
        setShowModal(true)
    }

    return(
        <nav>
            <div className="logo-container">
                <img className="logo" src={ minimal ? colorlogo : whitelogo } alt="tinder logo"/>
            </div>

            {!authToken && !minimal && 
                <button className="nav-button" onClick = {handleClick}
                    disabled = {showModal}> Log in</button>}
        </nav>
    )
}
export default Nav;
