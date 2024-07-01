import NavigationBar from "./components/navigationBar/NavigationBar"
import './homepage.css'
import shopImage from '../src/assets/shop.jpg'
import forestImage from '../src/assets/forest.jpg'

function Homepage() {

  return (
    <>
    <NavigationBar/>
    <header>
        <h1>Mon magasin</h1>
    </header>


    <div className="container">
        <section>
            <h2>Notre Vision</h2>
            <p>Chez Mon magasin, nous croyons fermement qu'il est possible de conjuguer consommation et conscience. Notre vision est de devenir le leader du commerce éthique, où chaque produit acheté contribue à un avenir meilleur pour notre planète et ses habitants. Nous nous engageons à offrir à nos clients des articles qui incarnent la qualité, la durabilité et l'équité.</p>
            <img src={shopImage} />

        </section>

        <section>
            <h2>Nos Produits</h2>
            <p>Notre gamme de produits est vaste et soigneusement sélectionnée pour répondre aux attentes de notre clientèle diversifiée. Vous trouverez chez nous :</p>
            <ul>
                <li><strong>Mode éthique</strong> : Vêtements et accessoires fabriqués à partir de matériaux organiques et recyclés, provenant de fournisseurs certifiés Fair Trade.</li>
                <li><strong>Produits de beauté naturels</strong> : Cosmétiques et soins de la peau élaborés sans produits chimiques nocifs, non testés sur les animaux et emballés de manière éco-responsable.</li>
                <li><strong>Articles pour la maison</strong> : Meubles, décorations et ustensiles fabriqués localement avec des matériaux durables et éco-conçus.</li>
                <li><strong>Alimentation biologique</strong> : Une sélection de produits alimentaires biologiques, locaux et équitables pour une alimentation saine et respectueuse de l'environnement.</li>
            </ul>
        </section>

        <section>
            <h2>Qualité et Durabilité</h2>
            <p>La qualité est au cœur de notre démarche. Chaque produit que nous proposons est rigoureusement testé pour garantir sa longévité et sa performance. Nous privilégions des fournisseurs qui partagent notre engagement pour la durabilité, en utilisant des matériaux de haute qualité et des procédés de fabrication respectueux de l'environnement.</p>
        </section>

        <section className="environementDiv">
            <div>
            <h2>Engagement Environnemental</h2>
            <p>Mon magasin s'engage à minimiser son empreinte écologique à chaque étape de son activité. Nous adoptons des pratiques durables telles que :</p>
            <ul>
                <li>Réduction des emballages plastiques et utilisation de matériaux recyclés.</li>
                <li>Approvisionnement local pour réduire les émissions de carbone liées au transport.</li>
                <li>Mise en place de programmes de recyclage et de réduction des déchets au sein de notre magasin.</li>
            </ul>
            </div>
            <img src={forestImage} style={{width:600}}/>
        </section>

        <section>
            <h2>Impact Sociétal</h2>
            <p>Nous sommes convaincus que le succès d'une entreprise se mesure également par son impact positif sur la société. Mon magasin soutient des initiatives communautaires et des projets sociaux, en collaborant avec des artisans locaux et des coopératives pour favoriser l'économie locale et les conditions de travail justes. Nous organisons régulièrement des ateliers et des événements éducatifs pour sensibiliser nos clients aux pratiques durables et responsables.</p>
        </section>

        <section>
            <h2>Notre Équipe</h2>
            <p>Notre équipe passionnée est toujours prête à vous accueillir avec le sourire et à vous offrir un service personnalisé. Formée pour vous conseiller et vous guider dans vos choix, elle partage notre engagement pour la qualité, l'environnement et le bien-être de la société.</p>
        </section>

        <section>
            <h2>Conclusion</h2>
            <p>Chez Mon magasin, nous ne nous contentons pas de vendre des produits ; nous offrons une nouvelle façon de consommer, plus respectueuse, plus consciente et plus humaine. Rejoignez-nous dans notre mission pour un monde meilleur et découvrez une expérience d'achat qui fait la différence.</p>
            <p><strong>Mon magasin</strong> - Parce que chaque achat compte.</p>
            <p>Pour plus d'informations ou pour découvrir nos produits, visitez notre site web <a href="">www.monmagasin.com</a> ou passez nous voir en magasin. Ensemble, construisons un avenir durable et équitable.</p>
        </section>
    </div>

    <footer>
        <p>&copy; 2024 Mon magasin. Tous droits réservés.</p>
    </footer>
    </>
  )
}

export default Homepage

