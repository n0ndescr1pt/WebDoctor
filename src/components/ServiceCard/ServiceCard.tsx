import ServicesCard from "./ItemServiceCard.tsx"
import "./ServiceCard.css"



function Service() {

    return (
        <>
        <div className="serviceCardContainer">
            <div className="containerService">
                <div className="container_innerService">
                    <div className="headerService">Our services</div>
                    <div className="lineService"></div>
                    <div className="titleService">We provide to you the best choiches for you. Adjust it to your
                        health needs and make sure your undergo treatment with our highly qualified doctors you
                        can consult with us which type of service is suitable for your health</div>

                </div>
            </div>
                
            <div className="cardsServices">
                <div className="cardsServicesInner">
                    <div className="rowCard">
                        <ServicesCard imgSrc = {'./src/assets/icons/iconSearch.png'} title = {'Search doctor'} subtitle = {'Choose your doctor from thousands of specialist, general, and trusted hospitals'}/>
                        <ServicesCard imgSrc = {'./src/assets/icons/iconPills.png'} title = {'Online pharmacy'} subtitle = {'Buy  your medicines with our mobile application with a simple delivery system'}/>
                        <ServicesCard imgSrc = {'./src/assets/icons/iconIpad.png'} title = {'Consultation'} subtitle = {'Free consultation with our trusted doctors and get the best recomendations'}/>
                    </div>
                    <div className="rowCard">
                        <ServicesCard imgSrc = {'./src/assets/icons/iconCard.png'} title = {'Details info'} subtitle = {'Free consultation with our trusted doctors and get the best recomendations'}/>
                        <ServicesCard imgSrc = {'./src/assets/icons/iconCase.png'} title = {'Emergency care'} subtitle = {'You can get 24/7 urgent care for yourself or your children and yourlovely family'}/>
                        <ServicesCard imgSrc = {'./src/assets/icons/iconPad.png'} title = {'Tracking'} subtitle = {'Track and save your medical history and health data '}/>
                    </div>
                </div>
            </div>
            <div className="learnMore"><button className="learnMoreButton">Learn More</button></div>
            
        </div>
        </>
    )
}

export default Service