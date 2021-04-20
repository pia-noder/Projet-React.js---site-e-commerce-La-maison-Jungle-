import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem(props) {
    const plant = props.plantList;

    return(

        <li 
        className='lmj-plant-item' key={plant.id} onClick={() => handleClick} >
            <img className='lmj-plant-item-cover' src={plant.cover}  alt='plante monstera'/>
            {plant.name}
            {plant.isSpecialOffer ? <div className="lmj-sales">Soldes</div> : null}
            <div>
                <CareScale  careType='light' scaleValue={plant.light} />
                <CareScale  careType='water' scaleValue={plant.water} /> 
            </div>
            
        </li>

    )
}
export default PlantItem