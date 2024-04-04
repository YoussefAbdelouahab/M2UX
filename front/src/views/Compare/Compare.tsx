import "./Compare.scss"
import Navbar from "../../components/Navbar/Navbar"

import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Compare() {
    const [Brand1, setBrand1] = useState("");
    const [Brand2, setBrand2] = useState("");
    const [Brand1Data, setBRand1Data] = useState(Object);
    const [Brand2Data, setBRand2Data] = useState(Object);
    const navigate = useNavigate();

    async function CompareBrands() {
        await axios.get(`https://world.openfoodfacts.org/api/v2/search?countries_tags_fr=france&page=1&page_size=1&brands_tags=${Brand1}&fields=product_name,countries_tags_fr,categories,nutriscore_2023_tags,additives_tags,image_url,allergens_from_ingredients,stores_tags`)
            .then(res => {
                setBRand1Data(res.data.products[0])
            })
        await axios.get(`https://world.openfoodfacts.org/api/v2/search?countries_tags_fr=france&page=1&page_size=1&brands_tags=${Brand2}&fields=product_name,countries_tags_fr,categories,nutriscore_2023_tags,additives_tags,image_url,allergens_from_ingredients,stores_tags`)
            .then(res => {
                setBRand2Data(res.data.products[0])
            })
        navigate("#compargin")
    }
    return (
        <>
            <Navbar />
            <div className="compare_banner">
                <div className="banner_left">
                    <img src="/assets/compare.png" alt="" />
                </div>
                <div className="banner_right">
                    <h1>Comparer des produits français !</h1>
                    <p className="banner_subtitle">Vous ne savez pas quel marque choisir ? Ici vous pourrez vous décider</p>
                    <p className="banner_try">Allez-y, essayez !</p>
                    <div className="banner_search_compare">
                        <div className="banner_search">
                            <img src="/assets/icon/search-icon.png" alt="" />
                            <input id="article1" type="text" placeholder="Rechercher la première marque" onChange={e => setBrand1(e.target.value)} />
                        </div>
                        <div className="banner_search">
                            <img src="/assets/icon/search-icon.png" alt="" />
                            <input id="article1" type="text" placeholder="Rechercher la deuxième marque" onChange={e => setBrand2(e.target.value)} />
                        </div>
                        <button onClick={() => CompareBrands()}>Comparer les marques</button>
                    </div>
                </div>
            </div>

            {Brand1Data === undefined || Brand2Data === undefined || Object.keys(Brand1Data).length === 0 || Object.keys(Brand2Data).length === 0 ?
                null : <>
                    <section id="comparing" className={Brand1Data === undefined || Brand2Data === undefined || Object.keys(Brand1Data).length === 0 || Object.keys(Brand2Data).length === 0 ?
                        "compare_data" : "compare_data active"}>
                        <div className="brand brand1">
                            <div className="box">
                                <p>Marque</p>
                                <h2>{Brand1Data.product_name}</h2>
                            </div>
                            <hr />
                            <div className="box">
                                <p>Catégories</p>
                                <h2>{Brand1Data.categories}</h2>
                            </div>
                            <hr />
                            <div className="box">
                                <p>Pays desservis</p>
                                <h2>{Brand1Data.countries_tags_fr + " "}</h2>
                            </div>
                            <hr />
                            <div className="box">
                                <p>NutriScore</p>
                                <h2>{Brand1Data.nutriscore_2023_tags}</h2>
                            </div>
                            <hr />
                            <div className="box">
                                <p>Additifs</p>
                                {Brand1Data.additives_tags !== undefined && Brand1Data.additives_tags.length !== 0 ? <h2>{Brand1Data.additives_tags + " "}</h2> : <h2>Aucun Additif</h2>}
                            </div>
                            <hr />
                            <div className="box">
                                <p>Allergènes alimentaires</p>
                                {Brand1Data.allergens_from_ingredients !== "" ? <h2>{Brand1Data.allergens_from_ingredients + " "}</h2> : <h2>Aucun allergène alimentaire</h2>}
                            </div>
                        </div>
                        <div className="brand brand2">
                            <div className="box">
                                <p>Marque</p>
                                <h2>{Brand2Data.product_name}</h2>
                            </div>
                            <hr />
                            <div className="box">
                                <p>Catégories</p>
                                <h2>{Brand2Data.categories}</h2>
                            </div>
                            <hr />
                            <div className="box">
                                <p>Pays desservis</p>
                                <h2>{Brand2Data.countries_tags_fr + " "}</h2>
                            </div>
                            <hr />
                            <div className="box">
                                <p>NutriScore</p>
                                <h2>{Brand2Data.nutriscore_2023_tags}</h2>
                            </div>
                            <hr />
                            <div className="box">
                                <p>Additifs</p>
                                {Brand2Data.additives_tags !== undefined && Brand2Data.additives_tags.length !== 0 ? <h2>{Brand2Data.additives_tags + " "}</h2> : <h2>Aucun Additif</h2>}
                            </div>
                            <hr />
                            <div className="box">
                                <p>Allergènes alimentaires</p>
                                {Brand2Data.allergens_from_ingredients !== "" ? <h2>{Brand2Data.allergens_from_ingredients + " "}</h2> : <h2>Aucun allergène alimentaire</h2>}
                            </div>
                        </div>
                    </section>
                </>}
        </>
    )
}