
function ProfilePicture() {
    const imageUrl = './src/assets/grad.jpg';
    //when you click on a button it disappears
    const handleClick = (e) => e.target.style.display = "none";
    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}
export default ProfilePicture