import "./ServiceCard.css"

interface ServiceCardProps {
    imgSrc: string;
    title: string;
    subtitle: string;
}

function ServiceCard({ imgSrc, title, subtitle }: ServiceCardProps) {
    return (
        <div className="card">
                            <div className="iconCard"><img src={imgSrc} alt="" /></div>
                            <div className="titleCard">{title}</div>
                            <div className="subTitleCard">{subtitle}</div>
                        </div>
    )
}

export default ServiceCard