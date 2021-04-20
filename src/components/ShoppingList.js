import plantList from '../datas/PlantList'
import '../styles/shoppingList.css'
import PlantItem from './PlantItem'
import Categories from './categories'
import {useState} from 'react'


function ShoppingList({cart, updateCart}) {
    //Déclaration du state pour categories valeur courante : activeCategory et fonction de modication : setActiveCategory; valeur de départ ''
    
    const [activeCategory, setActiveCategory] = useState('');
    //Constituer une nouvelle liste de manière dynamique qui extrait les catégories uniques de plantes (une seule fois chaque catégorie)
    const categories = plantList.reduce(
		(acc, plant) =>
        //Si dans l'accumulateur il y a déjà un équivalent du plant.category de la boucle 
        //alors renvoyer uniqement l'acc tel qu'il est sinon renvoyer un tableau avec l'ajoute/concaténation de la nouvelle catégorie.
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
        
    function addToCart (name, price) {
        //Vérifier si la plante ajouter au cart est déjà présente, si oui alors juste augmenter amount + 1, si non ajouter les info sur la plante et un un amount de 1;

        //Vérifier dans cart si la plante est déjà présente
        const plantAlreadyAdded = cart.find((plant) => plant.name === name);
        if(plantAlreadyAdded){
            const cartFilteredWithCurrentPlants = cart.filter((plant) => plant.name !== name);
            updateCart([ ...cartFilteredWithCurrentPlants,
            {name, price, amount: plantAlreadyAdded.amount + 1}])
            alert ( name + ' ajouté au panier')
        } else {
            updateCart([...cart, {name, price, amount: 1 }])
            alert ( name + ' ajouté au panier')
        }
    }

    return(
        <div className="lmj-plant-list">
            {/* Passe en props le tableau des catégorie + les valeurs du State associé à categories */}
           <Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
            <ul className='lmj-plant-list'>
            {plantList.map((plant) => (
                
                !activeCategory || activeCategory === plant.category ? (

                    <div key={plant.id}>
                        <PlantItem key={`${plant.id}`} plantList={plant}/>
                        <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter au panier</button>
                    </div>
                     
                ) : null
            ))}
            
            
            </ul>
        </div>
    )
}

export default ShoppingList