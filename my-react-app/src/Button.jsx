

function Button(){
    //changes the button sign
    //const handleClick = (e) => e.target.textContent = "Ouch!";
    
    //let count = 0;

    //const handleClick = (name) => {
        //if(count<3){
         //   count++;
         //   console.log('you clicked me %d time/s', count);
        //} else{
        //    console.log('${name} stop clicking me!', name);
        //}
    //}
    //const handleClick2 = (name) => console.log('${name} stop clicking me');
    return(<button className="button" onClick={(e) => handleClick(e)}>Click Me</button>);
}

export default Button