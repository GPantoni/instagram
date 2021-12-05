export default function Posts() {
    const arrayPosts = [
        {
            nome: 'meowed',
            conteudo: 'gato-telefone',
            curtida: 'respondeai',
            numeroCurtidas: 'outras 101.523 pessoas'
        },
        {
            nome: 'barked',
            conteudo: 'dog',
            curtida: 'adorable_animals',
            numeroCurtidas: 'outras 99.159 pessoas'
        }
    ];

    return (
        <div class='posts'>
            {arrayPosts.map(item => <Post nome={item.nome} conteudo={item.conteudo} curtida={item.curtida} numeroCurtidas={item.numeroCurtidas} />)}
        </div>
    )
}

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={`assets/img/${props.nome}.svg`} />
                    {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={`assets/img/${props.conteudo}.svg`} />
            </div>

            <div class="fundo">

                <FundoAcoes />

                <div class="curtidas">
                    <img src={`assets/img/${props.curtida}.svg`} />
                    <div class="texto">
                        Curtido por <strong>{props.curtida}</strong> e <strong>{props.numeroCurtidas}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FundoAcoes() {
    return (
        <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}