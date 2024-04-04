import { useState } from "react"
import "./Navbar.scss"
export default function Navbar({ page = "" }) {
    const [Active, setActive] = useState(false);

    function ShowSearch() {
        setActive(true);
    }
    function HideSearch() {
        setActive(false)
    }
    return (
        <>
            <div className="header">
                <div className="head_container">
                    <a href="/">
                        <div className="nav_logo">
                            <img src="/assets/logo.png" alt="" />
                        </div>
                    </a>

                    <div className="nav_links">
                        <ul>
                            <a href="/" className={page === 'home' ? 'page' : ''}><li>Accueil</li></a>
                            {/* <a href="/produit" className={page === 'product' ? 'page' : ''}><li>Produit</li></a> */}
                            <a href="/comparer" className={page === 'compare' ? 'page' : ''}><li>Comparaison</li></a>
                        </ul>
                    </div>
                    <div className="nav_icons" onClick={() => ShowSearch()}>
                        <img src="/assets/icon/search-icon.png" alt="" />
                    </div>
                    <div className={Active ? "nav_search active" : "nav_search"}>
                        <img src="/assets/icon/search-icon.png" alt="" />
                        <input type="text" placeholder="Rechercher une marque" />
                        <img src="/assets/icon/cross-icon.png" alt="" className="cross" onClick={() => HideSearch()} />
                    </div>
                </div>
            </div>
        </>
    )
}