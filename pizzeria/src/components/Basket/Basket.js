import classes from "./Basket.module.css";
export function Basket(props) {
    return(
        <aside className={classes["cart-section"]}>
            <h2 className={classes["cart-title"]}>Votre Panier</h2>
            <div className={classes["cart-items"]}></div>
            <p className={classes["cart-total"]}>Total : 0.00 €</p>
        </aside>
    );
}
export default Basket;