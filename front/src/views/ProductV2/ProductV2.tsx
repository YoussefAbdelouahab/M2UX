import { useEffect, useState } from "react";
import "./ProductV2.scss"
import axios from "axios";

export default function ProductV2() {
    const url = window.location.href;
    const product = url.split("/").pop();
    const [getData, setGetData] = useState(Object)
    useEffect(() => {
        const getArticleData = async () => {
            try {
                await axios.get(`https://world.openfoodfacts.org/api/v2/search?countries_tags_fr=france&page=1&page_size=1&brands_tags=${product}&fields=product_name,countries_tags_fr,categories,nutriscore_2023_tags,additives_tags,image_url,allergens_from_ingredients,stores_tags`)
                    .then(res => {
                        setGetData(res.data.products[0])
                    })
            } catch (error) {
                console.log(error);
            }
        }

        getArticleData();

    }, [product]);
    return (
        <>
            <div className="container">
                <h1>Produit {getData.product_name}</h1>
                <img src={getData.image_url} alt="" />
                <div className="product_infos">
                    <p>Catégories : {getData.categories}</p>
                    <p>Nutriscore : {getData.nutriscore_2023_tags}</p>
                    <p>Pays desservis : {getData.countries_tags_fr + ""} </p>
                    {getData.additives_tags !== undefined && getData.additives_tags.length !== 0 ? <p>Additifs : {getData.additives_tags + " "}</p> : <p>Aucun Additif</p>}
                    {getData.allergens_from_ingredients !== "" ? <p>Allergènes alimentaires : {getData.allergens_from_ingredients + " "}</p> : <p>Aucun allergène alimentaire</p>}
                </div>
            </div>
        </>
    )
}