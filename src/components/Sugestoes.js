export default function Sugestoes() {
    const arraySugestoes = [
        {
            nome: 'bad.vibes.memes',
            eSeguidor: 'Segue você'
        },
        {
            nome: 'chibirdart',
            eSeguidor: 'Segue você'
        },
        {
            nome: 'razoesparaacreditar',
            eSeguidor: 'Novo no Instagram'
        },
        {
            nome: 'adorable_animals',
            eSeguidor: 'Segue você'
        },
        {
            nome: 'smallcutecats',
            eSeguidor: 'Segue você'
        }
    ];
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {arraySugestoes.map(item => <Sugestao nome={item.nome} eSeguidor={item.eSeguidor} />)}

        </div>
    )
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={`assets/img/${props.nome}.svg`} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.eSeguidor}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}