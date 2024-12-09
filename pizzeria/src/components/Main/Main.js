import classes from "./Main.module.css";
import Container from "../Container/container";
import Aside from "../Basket/Basket";
export function Main({pizza, onGetPizza}){
    return(
        <main className={classes["main-container"]}>
            <Container pizza={pizza} onGetPizza={onGetPizza}/>
            <Aside/>
        </main>
    );
}
export default Main;