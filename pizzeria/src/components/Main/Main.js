import classes from "./Main.module.css";
import Container from "../Container/container";
import Aside from "../Basket/Basket";
export function Main(){
    return(
        <main className={classes["main-container"]}>
            <Container/>
            <Aside/>
        </main>
    );
}
export default Main;