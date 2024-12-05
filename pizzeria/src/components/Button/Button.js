import classes from "./Button.module.css";
export function Button(props){
    return(
        <div className={classes["buttons"]}>
            <button className={`${classes.order} ${classes.btn}`}>Commander</button>
        </div>
    );
}
export default Button;