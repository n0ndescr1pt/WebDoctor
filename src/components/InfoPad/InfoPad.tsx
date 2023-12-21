import "./InfoTad.css"

function InfoPad() {

    return (
        <>
        <div className="infoPadContainer">
            <div className="innerInfoPadContainer">
                <div className="illustrationInfo"><img src="./src/assets/illustration/illustration2.png" alt="" /></div>
                <div className="infoPadText">
                    <div className="infoPadHeader">Leading healthcare providers</div>
                    <div className="lineInfoPad"></div>
                    <div className="infoPadTitle">We provides progressive, and affordable healthcare, 
                                                accessible on mobile and online for everyone. To us, it’s not just work. We take 
                                                pride in the solutions we deliver</div>
                    <div className="learnMorePad"><button className="learnMoreButton">Learn More</button></div>
                </div>
            </div>
            <div className="innerInfoPadContainer">
                <div className="infoPadTextRight">
                    <div className="infoPadHeaderRight">Download our mobile apps</div>
                    <div className="lineInfoPad"></div>
                    <div className="infoPadTitleRight">Our dedicated patient engagement app and 
                                    web portal allow you to access information instantaneously 
                                    (no tedeous form, long calls, 
                                    or administrative hassle) and securely</div>
                    <div className="learnMorePad">
                        <button className="downloadButton">Download<img className="vectorDown" src="/src/assets/vector.png" alt=""/></button>
                    </div>
                </div>
                <div className="illustrationInfo"><img src="./src/assets/illustration/illustration3.png" alt="" /></div>
            </div>
        </div>
        </>
    )
}

export default InfoPad