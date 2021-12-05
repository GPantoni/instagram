export default function Navbar() {
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <Icones class='logo-mobile' name={['logo-instagram']} />

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <Icones class='icones' name={['paper-plane-outline', 'compass-outline', 'heart-outline', 'person-outline']} />

                <Icones class='icones-mobile' name={['paper-plane-outline']} />
            </div>
        </div>
    )
}

function Icones(props) {
    return (
        <div class='{props.class}'>
            {props.name.map(item => <ion-icon name={item}></ion-icon>)}
        </div>
    )
}