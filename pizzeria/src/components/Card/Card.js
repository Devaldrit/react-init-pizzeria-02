import classes from "./Card.module.css";
import Button from "../Button/Button";
export function Card(props) {
    return(
        <div className={classes["pizza-card"]}>
                <img src={props.imgLink} alt={props.alt}/>
                <h2>{props.nom}</h2>
                <p className={classes["description"]}>{props.description}</p>
                <p className={classes["price"]}>{props.prix}</p>
                <div className={classes["buttons"]}>
                    <Button/>
                </div>
        </div>
    );
}
export default Card