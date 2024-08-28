import star from "../assets/star.png";

interface CardProps {
    ticketsLeft: number;
    price: number;
    destination: string;
    origin: string;
    coverImage: string;
    stats: {
        rating: number;
        ratingCount: number;
    };
}

export default function Card(props: CardProps) {
    let badgeText: string | undefined;
    if (props.ticketsLeft === 0) {
        badgeText = 'SOLD OUT';
    }
    else if (props.ticketsLeft < 5) {
        badgeText = 'FEW LEFT'
    }

    return (
        <div className="card">
            { badgeText && <div className="card--badge">{badgeText}</div> }
            <img src={`/covers/${props.coverImage}`} className="card--cover"></img>
            <div className="card--details">
                <div className="card--stats">
                    <img src={star} className="card--star"></img>
                    <span className="card--rating"><b>{props.stats.rating}</b> ({props.stats.ratingCount})</span>
                </div>
                <div className="card--location">
                    <p className="card--location--detail">FROM</p>
                    <h3 className="card--location--main">{props.origin}</h3>
                </div>
                <div className="card--location">
                    <p className="card--location--detail">TO</p>
                    <h3 className="card--location--main">{props.destination}</h3>
                </div>
                <div className="card--price">
                    <p className="card--price--detail">from</p>
                    <p className="card--price--main">{props.price} €</p>
                    <p className="card--price--detail">per person</p>
                </div>
            </div>
        </div>
    );
};