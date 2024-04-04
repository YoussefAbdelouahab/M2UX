import { useState } from "react"
import "./HomeV2.scss"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomeV2() {
    const [ShowSearch, setShowSearch] = useState(false)
    const [SearchedWord, setSearchedWord] = useState("");
    const navigate = useNavigate()

    async function SearchWord() {
        setShowSearch(false);
        var IA_MODEL = ""
        var IA_URL = ""
        var API_KEY = ""
        let content = "Répond moi en un seul mot, donne-moi une marque de produit équivalent en France : " + SearchedWord
        const data = {
            model: IA_MODEL,
            messages: [{ role: "user", content: content }],
            temperature: 0,
        };
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
        };
        // Requete axios a l'api open ai
        const response = await axios.post(IA_URL, data, config) 
        navigate(`/resultat/${response.data.choices[0].message.content}`)
    }
    return (
        <>
            {ShowSearch ? <div className="modal_container">
                <div className="card_container">
                    <p>Entrer une marque</p>
                    <input type="text" placeholder="..." onChange={(e) => setSearchedWord(e.target.value)}/>
                    <button onClick={() => SearchWord()}>Chercher</button>
                </div>
            </div> : null}
            <div className="section-1">
            </div>
            <div className="button_container">
                <div className="compare_btn">
                    <img src="/assets/compare.png" alt="" />
                </div>
                <div className="search_btn" onClick={() => setShowSearch(true)}>
                    <img src="/assets/icon/search-icon.png" alt="" />
                </div>
            </div>
            <div className="showoff">
                <h2>À la une</h2>
                <div className="boxs">
                    <div className="box">

                    </div>
                    <div className="box">

                    </div>
                </div>
            </div>
        </>
    )
}