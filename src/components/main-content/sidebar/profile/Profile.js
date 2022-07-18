function Profile(props) {
    return(
        <div class="perfil-sidebar">
            <img src="./assets/img/catanacomics.png" alt={props.userName} />
            <div>
                <p>{props.userName}</p>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default Profile;