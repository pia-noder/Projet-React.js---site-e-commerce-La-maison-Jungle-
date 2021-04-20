//assets
import bgSakura from '../assets/sakura.png'
//styles
import '../styles/Home.css'
//components
import PlantItem from './PlantItem'
import NewItem from './NewItem'
//datas
import NewPlantsList from '../datas/NewPlantsList'
import PlantList from '../datas/PlantList'


function Home (){
    return(
        <div>
            <header>
                <div className='lmj-bandeau'>
                    <p className='lmj-banderau-text'>Livraison offerte pour toutes commande supérieur à 35€ !</p>
                </div>
                <img src={bgSakura} alt='gif sakura incrusté de fleur de sakura rose'/>
            </header>
            <main>
                <div className='event'>
                    <p className='event-slogan'>Admirer la beauté de l'éphémère</p>
                    <a className='event-link' href='/'>En savoir plus</a>
                </div>
                <div className='lmj-sell-items'>
                    <h2>Nouveautés</h2>
                    {NewPlantsList.map((newPlant, index) => (
                        <div key={newPlant.id}>
                            <NewItem index={index} newPlant={newPlant}/>
                        </div>
                    ))}
                </div>
                <div className='lmj-bestSells'>
                    <h2>Meilleurs ventes</h2>
                    <div className='lmj-topPlants'>
                        {PlantList.map((plant)=>(
                            plant.top ? (
                                <div key={plant.id}>
                                    <PlantItem key={plant.id} plantList={plant}/>    
                                </div>
                            ) : null
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;