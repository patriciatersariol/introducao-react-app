import './card.css'

const Card = ({ titulo, texto }) => {
    return (
        <div className="card">
            <h1>{titulo}</h1>
            <div>
                {texto}
            </div>
        </div>
    );
}

export default Card;
