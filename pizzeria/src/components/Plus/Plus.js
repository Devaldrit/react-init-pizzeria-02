import classes from "./Plus.module.css";
export function Plus(props){
    return(
        <button className={classes["quantity-increase"]}>+</button>
    );
}
export default Plus;