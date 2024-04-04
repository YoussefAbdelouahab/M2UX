import "./HomeBanner.scss"

export default function HomeBanner() {
    return (
        <>
            <div className="banner">
                <div className="banner_left">
                    <img src="/assets/logo.png" alt="" />
                </div>
                <div className="banner_right">
                    <h1>Trouver un produit en france !</h1>
                    <p className="banner_subtitle">E, est une plateforme qui vous permet de<br></br> trouver un article français similaire au votre.</p>
                    <p className="banner_try">Allez-y, essayez !</p>
                    <div className="banner_search">
                        <img src="/assets/icon/search-icon.png" alt="" />
                        <input type="text" placeholder="Rechercher une marque" />
                    </div>
                </div>
            </div>
        </>
    )
}