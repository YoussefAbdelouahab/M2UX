import { useEffect, useState } from "react";
import "./ResultV2.scss"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ResultV2() {
    const url = window.location.href;
    const product = url.split("/").pop();
    const [product1Data, setProduct1Data] = useState<any[]>([]);
    const [ProductData, setProductData] = useState(Object);
    const [SearchedWord, setSearchedWord] = useState("");

    var IA_MODEL = ""
    var IA_URL = ""
    var API_KEY = ""
    const navigate = useNavigate()
    //On créé la requete a l'ia
    let content = "Répond en deux mots et avec deux mots différent, donne-moi des marques française équivalente à : " + product

    //on definie le model et le message à l'ia
    const data = {
        model: IA_MODEL,
        messages: [{ role: "user", content: content }],
        temperature: 0,
    };

    //On prépare la configuration avec la clef d'api openia et le type
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    };

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
        const getSimilarData = async () => {
            try {
                const response = await axios.post(IA_URL, data, config)
                var products = response.data.choices[0].message.content.split(", ");
                products.forEach((element: any) => {
                    axios.get(`https://world.openfoodfacts.org/api/v2/search?countries_tags_fr=france&page=1&page_size=1&brands_tags=${element}&fields=product_name,countries_tags_fr,categories,nutriscore_2023_tags,additives_tags,image_url,allergens_from_ingredients,stores_tags`)
                        .then(res => {
                            if (res.data.products[0] != null) {
                                setProduct1Data((product1Data: any) => [...product1Data, res.data.products[0]]);
                            }
                        })
                });
                product1Data.shift();
            } catch (error) {
                console.log(error)
            }
        }
        getArticleData();
        getSimilarData();

    }, [product]);

    async function redirectTo(product: string){
        navigate(`/produit/${product}`)
    }

    async function SearchWord() {
      
        // Requete axios a l'api open ai
        const response = await axios.post(IA_URL, data, config) 
        navigate(`/resultat/${response.data.choices[0].message.content}`)
    }
    return (
        <>
            <div className="search_button">
                <input type="text" placeholder="..."  onChange={(e) => setSearchedWord(e.target.value)} />
                <img src="/assets/icon/search-icon.png" alt="" />
                <button onClick={() => SearchWord()}>rechercher</button>
            </div>
            <div className="product_section">
                <img src={ProductData.image_url} alt="" />
                <h1>{ProductData.product_name}</h1>
                <a href={`/produit/${product}`}>En savoir plus</a>
            </div>
            <div className="similar_section">
                {product1Data.map((item) => (
                    <>
                        <div className="box" onClick={() => redirectTo(item.product_name)}>
                            <img src={item.image_url} alt="" />
                            <h3>{item.product_name}</h3>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}