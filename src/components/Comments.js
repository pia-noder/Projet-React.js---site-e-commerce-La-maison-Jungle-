//components
import CreateComment from './CreateComment'
//style
import '../styles/Comments.css'
function Comments(){
    return(
        <div className='lmj-comments'>
            <h2>Laissez-nous un commentaire</h2>
            <CreateComment />
        </div>
    )
}

export default Comments