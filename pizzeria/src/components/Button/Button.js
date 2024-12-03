import classes from "./Button.module.css";
export function Button(props){
    return(
        <div className={classes["buttons"]}>
            <button className={classes["btn order"]}>Commander</button>
        </div>
    );
}
export default Button;