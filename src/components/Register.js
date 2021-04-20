//ce bloc apparait lorsque l'utilisateur clique sur l'icon user de la barre de navigation et n'est pas déjà connecté
function Register (){
    return(
        <div className='lmj-register'>
            <div className='lmj-login-form'>
                <h2>SE CONNECTER</h2>
                <form>
                    <span>Compléter tous les champs du formulaire</span>
                    <input arial-label='Saisir votre adresse email' type='email' placeholder='email : NicolasDupond@gmail.com'/>
                    <input arial-label='Choisisez un mot de passe complexe, au moins 8 caractères' type='text' placeholder='password: Merci015!!!'/>
                    <button>connexion</button>
                </form>
            </div>
            <div className='lmj-register-insitation'>
                <h2>NOUVEAU CLIENT</h2>
                <p>Inscrivez-vous maintenant pour bénéfier de nos avantages sur votre prochaine commande.</p>
                <ul>
                    <li>Bénéfier de 10% sur votre première commande en tant que membre</li>
                    <li>Parainez vos amis et obtenez des réductions</li>
                    <li>Mémorisez vos préférences dans une liste de favoris</li>
                </ul>
            </div>
        </div>
    )
}

export default Register