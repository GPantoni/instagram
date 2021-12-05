export default function Stories() {
    const arrayStories = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet'];

    return (
        <div class='stories'>

            {arrayStories.map(item => <Story stories={item} />)};

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={`assets/img/${props.stories}.svg`} />
            </div>
            <div class="usuario">
                {props.stories}
            </div>
        </div>
    )
}