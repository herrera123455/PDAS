function ProfileCard ({ title, handle, image}) {

    return (
        <div className="card">
        <div className="card-image">
        <figure className="image is-1by1">
        <img src={image} alt="" width={400}  height={300}/>
        </figure>
        </div>
    
        <div className="card-content">
        <div className="media-content">
        <p className="title is-4">title is{title}</p>
        <p className="subtitle is-6">handle is {handle}</p>
        </div>
        </div>

        </div>
    )
}

export default ProfileCard