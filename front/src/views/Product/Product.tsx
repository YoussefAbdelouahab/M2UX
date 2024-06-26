import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar"
import "./Product.scss"
import axios from "axios";

export default function Product() {
    const url = window.location.href;
    const product = url.split("/").pop();
    const [ProductData, setProductData] = useState(Object);

    useEffect(() => {
        const getArticleData = async () => {
            try {
                await axios.get(`https://world.openfoodfacts.org/api/v2/search?countries_tags_fr=france&page=1&page_size=1&brands_tags=${product}&fields=product_name,countries_tags_fr,categories,nutriscore_2023_tags,additives_tags,image_url,allergens_from_ingredients,stores_tags`)
                    .then(res => {
                        setProductData(res.data.products[0])
                    })
            } catch (error) {
                console.log(error);
            }
        }
        getArticleData();
    }, [product]);

    console.log(ProductData);

    return (
        <div className="product_page">
            <Navbar />
            <div className="product_banner">
                {ProductData ? <> <div className="banner_left">
                    <div className="imagecontainer">
                        <img src={ProductData.image_url} alt="" />
                    </div>
                </div>
                    <div className="banner_right">
                        <h1>{ProductData.product_name}</h1>
                        <p>Catégories : {ProductData.categories}</p>
                        <p>Nutriscore : {ProductData.nutriscore_2023_tags}</p>
                        <p>Pays desservis : {ProductData.countries_tags_fr + ""} </p>
                        {ProductData.additives_tags !== undefined && ProductData.additives_tags.length !== 0 ? <p>Additifs : {ProductData.additives_tags + " "}</p> : <p>Aucun Additif</p>}
                        {ProductData.allergens_from_ingredients !== "" ? <p>Allergènes alimentaires : {ProductData.allergens_from_ingredients + " "}</p> : <p>Aucun allergène alimentaire</p>}
                    </div></> : <>
                    <h1>L'article n'éxiste pas en france</h1>
                </>}
            </div>
        </div>
    )
}