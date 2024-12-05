import classes from "./Popup.module.css";
export function Popup(props){
    return(
        <div className={classes["modal"]} style={{display: "block"}}>
            <div className={classes["modal-content"]}>
                <span className={classes["close"]}>x</span>
                {/* <img className={classes["modal-thumbnail"]} src="#?w=500&amp;auto=format" alt="Pizza Image"/> */}
                <h2 className={classes["modal-title"]}>test</h2>
                <p className={classes["modal-price"]}>Test</p>
                <div className={classes["quantity-selector"]}>
                    <button className={classes["quantity-decrease"]}>-</button>
                    <span className={classes["quantity"]}>1</span>
                    <button className={classes["quantity-increase"]}>+</button>
                </div>
                <button className={classes["add-to-cart"]}>Ajouter au panier</button>
            </div>
        </div>
    );
}
export default Popup;