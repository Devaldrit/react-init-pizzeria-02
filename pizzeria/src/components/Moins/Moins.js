import classes from "./Moins.module.css";
export function Moins(props){
    return(
        <button className={classes["quantity-decrease"]}>-</button>
    );
}
export default Moins;