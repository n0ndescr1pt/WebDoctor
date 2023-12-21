import './Header.css'


function Header() {

    return (
        <>
            <div className="menu">
                <div className="container">
                    <div className="menu_inner">
                        <div className="logo_and_title">
                            <div className="logo">
                                <div className="logo_title">T</div>
                            </div>
                            <div className="title">HealthCare</div>
                        </div>
                        <ul className="nav">
                            <li ><a href="#" className="first">Home</a></li>
                            <li><a href="#">Find a doctor</a></li>
                            <li><a href="#">Apps</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">About us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container2">
                    <div className="container2_inner">
                        <div className="description">
                            <h1 className="header1">Virtual healthcare for you</h1>
                            <div className="descriptionText">Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</div>
                            <button className ="consultButton">Consult today</button>
                        </div>

                        <div className="illustration"><img src="./src/assets/illustration/illustration1.png" alt="" /></div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header