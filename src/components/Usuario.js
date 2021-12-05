export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={`assets/img/${props.nome}.svg`} />
            <div class="texto">
                <strong>{props.nome}</strong>
                {props.subNome}
            </div>
        </div>
    )
}