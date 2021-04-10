import './StartScreen.css'
import logo from '../wwyd.png'
export default function StartScreen() {
    return (
        <div id="wrapper">
            <div className="slide" id="slide0">
                <span>if the sky was falling,</span>
                <span>if the world was breaking,</span>
                <span>if the only way to survive was to collaborate - </span>
                <span>would you put your trust in other people?</span>
            </div>
            <div className="slide" id="slide1">
                <h1>What would you do?</h1>
            {/* <img src={logo} /> */}
            </div>
            <div className="slide" id="slide2">
                <h2>You could try to save the world... or you could just save yourself.</h2>
                <ul><li><span>Try to save the world in this exciting, collaborative game (...that also serves as a psychological experiment.)</span></li>
                <li>Multiple Scenarios: save the world by reacting to scenarios like zombie attacks, exploding toasters, and several other scenarios!</li>
                <li>Trust or betray? In the spirit of rekindling connections, we've decided to make an environment where things are either friendly, or the opposite 😁.</li>
                </ul>
            </div>
            {/* <div className="slide" id="slide3.5"></div> */}
            <div className="slide" id="slide3">
                <span>More details coming soon</span>
                <span>A project of Jose Sanchez, coming soon to a hackathon near you. <a href="https://files.josesanchez.dev/index.php/apps/forms/wQJe9tjbJbBJo5YZ">Get notified when it happens</a></span>
            </div>
        </div>
    )
}