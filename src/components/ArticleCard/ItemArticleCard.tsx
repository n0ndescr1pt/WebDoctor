import "./Article.css"

interface ServiceCardProps {
    imgSrc: string;
    title: string;
    subtitle: string;
}

function ArticleCard({ imgSrc, title, subtitle }: ServiceCardProps) {
    return (
        <div className="articleCard">
                            <div className="articleIconCard"><img src={imgSrc} alt="" /></div>
                            <div className="articleContent">
                                <div className="articleTitleCard">{title}</div>
                                <div className="articleSubTitleCard">{subtitle}</div>
                                <div className="readMore">Read more <img src="/src/assets/vector.png" alt="" className="vectorRight" /></div>
                            </div>
                        </div>
    )
}

export default ArticleCard