import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


const range = [1, 2, 3]
// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale ({scaleValue, careType}) {

     const scaleType = careType === 'light' ? (
        <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    )

    

    //1) Mise en place d'un fonction au click sur l'élément qui va déclencher une alerte 
    //2)on fait une boucle sur range, pour chacun des éléments on regarde si la valeur de l'élément est >= scaleValue (compris entre 1 et 3) si c'est le cas alors on affiche un élément soeil ou pluie
    return (
        <div onClick={() =>
            alert(
                `Cette plante requiert ${quantityLabel[scaleValue]} ${
                    careType === 'light' ? 'de lumière' : "d'arrosage"
                }`
            )
        }>

            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}
export default CareScale