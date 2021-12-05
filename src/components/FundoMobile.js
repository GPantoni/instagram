export default function FundoMobile() {
    const iconesMobile = [{ name: 'home' }, { name: 'search-outline' }, { name: 'add-circle-outline' }, { name: 'heart-outline' }, { name: 'person-outline' }];

    return (
        <div class="fundo-mobile">
            {iconesMobile.map(item => iconesMobileJSX(item))}
        </div>
    )
}

function iconesMobileJSX(props) {
    return (
        <ion-icon name={props.name}></ion-icon>
    )
}