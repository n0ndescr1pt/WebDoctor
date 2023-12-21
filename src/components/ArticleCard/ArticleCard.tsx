import ItemArticleCard from "./ItemArticleCard.tsx"
import "./Article.css"



function ArticleCard() {

    return (
        <>
        <div className="articleCardContainer">
            <div className="articleTitle">Check out our latest article</div>
                <div className="lineService"></div>
                <div className="articleCardRow">
                    <ItemArticleCard imgSrc = {'./src/assets/firstArticleCard.png'} title = {'Disease detection, check up in the laboratory'} subtitle = {'In this case, the role of the health laboratory is very important to doa disease detection...'}/>
                    <ItemArticleCard imgSrc = {'./src/assets/secondArticleCard.png'} title = {'Herbal medicines that are safe for consumption'} subtitle = {'Herbal medicine is very widely used at this time because of its very good for your health...'}/>
                    <ItemArticleCard imgSrc = {'./src/assets/thirdArticleCard.png'} title = {'Natural care for healthy facial skin'} subtitle = {'A healthy lifestyle should start from now and also for your skin health.There are some...'}/>
                </div>
                <div className="learnMore"><button className="learnMoreButton">View All</button></div>
        </div>
            
            
        </>
    )
}

export default ArticleCard