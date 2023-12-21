
import "./Slider.css"



function Slider() {

    return (
        <>
            <div className="sliderContainer">
                <div className="inner_sliderContainer">
                    <div className="sliderTitle">What our customer are saying</div>
                    <div className="sliderLine"></div>
                    <div className="sliderInfoPeople">
                        <div className="sliderPhoto"><img src="/src/assets/edward.png" alt="" /></div>
                        <div className="sliderName_job">
                            <div className="sliderName">Edward Newgate</div>
                            <div className="sliderJob">Founder Circle</div>
                        </div>
                        <div className="sliderDescription">“Our dedicated patient engagement app and 
                            web portal allow you to access information instantaneously (no tedeous form, long calls, 
                            or administrative hassle) and securely”</div>
                    </div>
                            
                </div>
                <div className="slidarNavigation">
                    <a href=""><img src="/src/assets/vectorLeft.png" alt="" /></a>
                    <a href=""><img src="/src/assets/slider.png" alt="" className="sliderDots" /></a>
                    <a href=""><img src="/src/assets/vectorRight.png" alt="" /></a>
                </div>
            </div>
        </>
    )
}

export default Slider