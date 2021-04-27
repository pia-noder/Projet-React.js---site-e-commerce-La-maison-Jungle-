//assets
import userAvatarDefault from '../assets/profile-user.png'
//icons
import { MdImage } from "react-icons/md";
import { MdGif } from "react-icons/md";
//style
import '../styles/CreateComment.css'

function CreateComment(){
    return(
        <div className="comment-wrapper">
            <div className='avatar'>
                <img className='avatarimg' src={userAvatarDefault} alt='avatar par default'  />
            </div>
            <div className='textarea-outer-wrapper'>
                <div className='textarea-wrapper'>
                    <textarea placeholder='Laissez-nous un commentaire...'>

                    </textarea>
                    <div className='post-action'>
                        <div className='post-action__icon'>
                            <div>
                                <MdImage size={30} value={{ className: 'user' }} />
                            </div>
                            <div>
                                <MdGif size={30} value={{ className: 'user' }} />
                            </div>
                            <div className='text-editor-btn'>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default CreateComment