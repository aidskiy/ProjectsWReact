import profilePic from './assets/grad.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Aida's date</h2>
            <p className='card-text'> I am catching feelings for a boy too fast, it's stupid, im panicking, what if he breaks up with me and finds someone better for him</p>
        </div>
    );
}
export default Card