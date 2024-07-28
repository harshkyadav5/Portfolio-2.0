import Face from "../assets/Face.png";
import "./QuickGlance.css";

function QuickGlance() {
    return <>
    <div className="quickGlance">
        {/* Photo and Name */}
        <div className="intro">
            <div className="imageBox">
                <img src={Face} alt="face" height="80px"/>
            </div>
            <div>
                <h1>
                    Harsh Yadav
                </h1>
                <p>
                    Web Developer
                </p>
            </div>
            <button>
                <span>Show Contacts</span>
                <ion-icon name="chevron-down"></ion-icon>
            </button>
        </div>

        {/* More contact info */}
        <div className="details">
            <div className="separator"></div>
            <ul>
                <li>
                    <div className="iconBox">
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                    <div>
                        <p>EMAIL</p>
                        <a href="mailto:harshkyadav5@gmail.com">harshkyadav5@gmail.com</a>
                    </div>
                </li>
                <li>
                    <div className="iconBox">
                    <ion-icon name="phone-portrait-outline"></ion-icon>
                    </div>
                    <div>
                        <p>PHONE</p>
                        <a href="tel:+919560555555">+91 9560555555</a>
                    </div>
                </li>
                <li>
                    <div className="iconBox">
                    <ion-icon name="calendar-outline"></ion-icon>
                    </div>
                    <div>
                        <p>BIRTHDAY</p>
                        {/* <time dateTime="2005-06-21">June 21,2005</time> */}
                        <p>June 21,2005</p>
                    </div>
                </li>
                <li>
                    <div className="iconBox">
                    <ion-icon name="location-outline"></ion-icon>
                    </div>
                    <div>
                        <p>LOCATION</p>
                        <address>Sacramento, California, USA</address>
                    </div>
                </li>
            </ul>
            <div className="separator"></div>
            <ul>
                <li>
                    <a href=""><ion-icon name="logo-facebook"></ion-icon></a>
                </li>
                <li>
                    <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
                </li>
                <li>
                    <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
                </li>
            </ul>
        </div>
    </div>
    </>;
}
  
export default QuickGlance;