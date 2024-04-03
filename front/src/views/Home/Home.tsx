import "./Home.scss"
import Navbar from "../../components/Navbar/Navbar"
import HomeBanner from "../../components/Banner/HomeBanner"

export default function Home() {
    return (
        <>
            <Navbar page="home" />
            <HomeBanner />
            <div className="frontline">
                <div className="frontline_head">
                    <h2>Nos sponsors</h2>
                    <p>Plusieurs sponsors nous ont déjà rejoints, ils nous font confiance.</p>
                    <div className="sponsors">
                        <a href="https://www.carrefour.fr"><img src="/assets/carrefour.png" alt="" /></a>
                        <a href="https://www.danone.fr"><img src="/assets/danone.svg" alt="" /></a>
                        <a href="https://www.stmichel.fr"><img src="/assets/stmichel.png" alt="" /></a>
                    </div>
                </div>
                <div className="frontline_content">
                    <h2>À la une</h2>
                    <p>Les produits, le plus réputé et consommé en France.</p>
                    <div className="product_card">
                        <div className="card">
                            <div className="card_pict1">
                            </div>
                            <p className="title">Nutella</p>
                            <div className="card_content">
                                <p>Quantité : 1 kg</p>
                                <p>Catégories : Petit-déjeuners</p>
                                <p>Magasins : Auchan, E. Leclerc, Carrefour</p>
                                <p>Nutri-Score: E</p>

                            </div>
                        </div>
                        <div className="card">
                            <div className="card_pict2">
                            </div>
                            <p className="title">Velouté</p>
                            <div className="card_content">
                                <p>Quantité : 2 kg</p>
                                <p>Catégorie: Produits laitiers</p>
                                <p>Magasins : Leclerc, carrefour.fr</p>
                                <p>Nutri-Score: B</p>

                            </div>
                        </div>
                        <div className="card">
                            <div className="card_pict3">
                            </div>
                            <p className="title">Madelaines</p>
                            <div className="card_content">
                                <p>Quantité : 500 g</p>
                                <p>Catégorie : Snacks</p>
                                <p>Magasins : Netto, Magasins U, Casino, carrefour.fr</p>
                                <p>Nutri-Score: D</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}