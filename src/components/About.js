//assets
import illustrationShop from '../assets/etiquette_helena-hertz.jpg'
import illustrationMission from '../assets/freedom_sergey-shmidt.jpg'
//style
import '../styles/About.css'
//components
import Comments from './Comments.js'
function About(){
    return(
        <div className='lmj-about'>
            <div className='lmj-headerQui'>
                <h2>Qui sommes-nous ?</h2>
                 <img className='lmj-imgQui' src={illustrationShop} alt='Un ensemble de plantes vertes devant une fenêtre'/>
            </div>
            <div className='lmj-mission'>
                <h3>Notre mission : vous permettre d'avoir un bout de nature<br/> chez vous relaxante et belle. </h3>
                <img className='lmj-imgMission' src={illustrationMission} alt='Champ de fleurs jaune au vent'/>
            </div>
            <div className='lmj-moreInfo'>
                <div className='lmj-marque'>
                    <h3>Marque de plantes de qualités</h3>
                    <h4>Paragraphe Title</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor nisl non diam gravida, 
                    in consectetur lectus suscipit. Cras non faucibus elit. Aenean a mauris vel purus convallis auctor. 
                    </p>
                    <h4>Paragraphe Title</h4>
                    <p>
                    Cras vestibulum est sed porta luctus. Nunc luctus id velit at auctor. Sed sollicitudin risus sit amet quam auctor interdum. 
                    Duis ex ex, maximus eu iaculis at, laoreet vel metus. Morbi varius enim at interdum vulputate. 
                    </p>
                    <h4>Paragraphe Title</h4>
                    <p>
                    Vestibulum orci diam, consectetur id enim placerat, rutrum pellentesque justo. Fusce fermentum justo urna, 
                    eget maximus justo ornare vestibulum. Etiam quis semper nisl. Duis magna elit, ultricies id pretium vitae, laoreet vel risus.
                    </p>
                </div>
                <div className='lmj-conseils'>
                    <h3>Site de conseils en botanique</h3>
                    <h4>Paragraphe Title</h4>
                    <p>Aliquam vitae mi libero. Suspendisse efficitur sem eros, ornare euismod lacus condimentum nec. Nam malesuada auctor nibh a blandit. 
                        Integer efficitur placerat tortor egestas maximus. Duis sem quam, consectetur vel nunc vitae, gravida maximus neque.</p>
                    <h4>Paragraphe Title</h4>
                    <p>Praesent vehicula massa nec fringilla lobortis. In hac habitasse platea dictumst. Ut vel viverra nibh. </p>
                    <h4>Paragraphe Title</h4>
                    <p>Vivamus viverra placerat faucibus. Curabitur at vestibulum leo, sed congue sapien. Fusce ultrices ipsum id nulla accumsan pulvinar.</p>
                </div>
            </div>
            <div className='lmj-comments'>
                <Comments/>
            </div>
        </div>
    )
}

export default About