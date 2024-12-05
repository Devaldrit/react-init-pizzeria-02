import Card from "../Card/Card";
import classes from "./container.module.css";
const users = [
    {
        imgLink:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format",
        alt:"Margherita",
        nom:"Margherita",
        description:"Tomate, mozzarella, basilic frais",
        price:"12.90 €",
    },
    {
        imgLink:"https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&auto=format",
        alt:"Regina",
        nom:"Regina",
        description:"Tomate, mozzarella, jambon, champignons",
        price:"14.90 €",
    },
    {
        imgLink:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format",
        alt:"Calzone",
        nom:"Calzone",
        description:"Tomate, mozzarella, jambon, œuf",
        price:"15.90 €",
    },
    {
        imgLink:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format",
        alt:"Végétarienne",
        nom:"Végétarienne",
        description:"Tomate, légumes grillés, olives",
        price:"13.90 €",
    },
];

const userTableau = users.map(function(user){
    return <Card 
                imgLink={user.imgLink}
                alt={user.alt}
                nom={user.nom}
                description={user.description}
                prix={user.price}
            />
})

export function Container(){
    return(
        <section className={classes["main-container"]}>
            {userTableau}
        </section>
    );
}
export default Container;