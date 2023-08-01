import '../components/Navbar.css'
import { FaAngleDoubleRight } from 'react-icons/fa';
import pic from "../image/hero-banner.png"

const Navbar = () => {
    return (
        <>
            <header>
                <div className="container  topnav">
                    <a href="#" className="logo">
                        <span><FaAngleDoubleRight />Task Manager </span>
                    </a>
                </div>
            </header>

            <section className="hero" id="home">
                <div className="container">

                    <div className="hero-content">

                        <h1 className="h1 hero-title">Write your first draft with your heart</h1>

                        <p className="hero-text">
                            Capture and retrieve your lists across devices to help you stay organized at work, home, and on the go.
                        </p>

                        <button className="btn">Get started</button>

                    </div>

                    <div className="hero-banner"></div>

                </div>

                <div className='images '>
                    <img src={pic} alt="shape" className="shape-content" />
                </div>
            </section>
        </>
    )
}

export default Navbar
