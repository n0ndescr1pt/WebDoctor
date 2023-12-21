import './Footer.css'

function Footer() {

    return (
        <>
            <div className="footerContainer">
                <div className="firstTab">
                    <div className="logo_and_title paddingB22px">
                        <div className="logo whiteBackground">
                            <div className="logo_title blueColor">T</div>
                        </div>
                            <div className="title  whiteColor">HealthCare</div>
                    </div>
                    
                    <div className="footerText width391px">HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</div>
                    <div className="footerSubText width391px">©HealthCare PTY LTD 2023. All rights reserved</div>
                </div>
                <div className="secondTab">
                    <div className="footerTitle">Company</div>
                    <a href=""><div className="footerSubTitle">About</div></a>
                    <a href=""><div className="footerSubTitle">Testimonials</div></a>
                    <a href=""><div className="footerSubTitle">Find a doctor</div></a>
                    <a href=""><div className="footerSubTitle">Apps</div></a>
                </div>
                <div className="thirdTab">
                    <div className="footerTitle">Region</div>
                    <a href=""><div className="footerSubTitle">Indonesia</div></a>
                    <a href=""><div className="footerSubTitle">Singapore</div></a>
                    <a href=""><div className="footerSubTitle">Hongkong</div></a>
                    <a href=""><div className="footerSubTitle">Canada</div></a>
                </div>
                <div className="fourth">
                    <div className="footerTitle">Help</div>
                    <a href=""><div className="footerSubTitle">Help center</div></a>
                    <a href=""><div className="footerSubTitle">Contact support</div></a>
                    <a href=""><div className="footerSubTitle">Instructions</div></a>
                    <a href=""><div className="footerSubTitle">How it works</div></a>
                </div>
            </div>
        </>
    )
}

export default Footer