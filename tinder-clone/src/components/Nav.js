import colorlogo from '../images/color-tinder-logo.png'
import whitelogo from '../images/white-tinder-logo.png'

const Nav=({minimal, authToken})=>{
    return(
        <nav>
            <div className="logo-container">
                <img className="logo" src={ minimal ? colorlogo : whitelogo } alt="tinder logo"/>
            </div>

            {!authToken && <button className="nav-button"> Log in</button>}
        </nav>
    )
}
export default Nav;
