import classes from "./Popup.module.css";
export function Popup(props){
    return(
        <div className={classes["modal"]} style={{display: "block"}}>
            <div className={classes["modal-content"]}>
                <span className={classes["close"]}>x</span>
                <img className={classes["modal-thumbnail"]} src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&amp;auto=format" alt="Pizza Image"/>
                <h2 className={classes["modal-title"]}></h2>
                <p className={classes["modal-price"]}></p>
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