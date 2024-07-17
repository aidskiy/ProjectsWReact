import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import ProfilePicture from "./ProfilePicture";
function App() {
  const fruits = [
    {id: 1, name: "apple", calories: 95}, 
    {id: 2, name: "orange", calories: 40}, 
    {id: 3, name: "coconut", calories: 50}, 
    {id: 4, name: "pineapple", calories: 160}, 
    {id: 5, name: "banana", calories: 170}, 
  ]
  const veggies = [
    {id: 5, name: "cucumber", calories: 20}, 
    {id: 6, name: "corn", calories: 50}, 
    {id: 7, name: "potato", calories: 50}, 
    {id: 8, name: "onion", calories: 160}, 
    {id: 9, name: "carrot", calories: 170}, 
  ]
  return(
    <>
      <ProfilePicture />
      <Header />
      
      {fruits.length > 0 && <List items={fruits} category = "Fruits" />}

      {veggies.length > 0 && <List items={veggies} category = "Vegetable" />}
      
      <UserGreeting isLoggedIn={false} username="Aida" />
      <Button />
      
      <Food />
      <Card />
      <Card />
      <Footer />
      <Student name="Rohan" age = {22} isStudent={true}/>
      <Student name="Ko" age = {30} isStudent={false}/>
      <Student />
    
    </>
  );
}
Student.PropTypes = {

}
export default App
