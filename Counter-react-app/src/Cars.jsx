import React, {useState} from 'react';

function Cars(){
    const [cars, setCars] = useState([]);//{year:2024, make:'Ford', model:'Mustang'}
    const [carYear, setCarYear] = useState(new Date(). getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    
    function handleAddCar(){
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }
        setCars(c => [...c, newCar])
        setCarMake(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }
    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !== index))
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
        //setCar(car => ({...car, year: event.target.value}));
    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
        //setCar(car=>({...car, make:event.target.value}));
    }
    function handleModelChange(event){
        setCarModel(event.target.value);
        //setCar(car=>({...car, model:event.target.value}));
    }
    


    return(<div>
        <h2>List of Car objects</h2>
        <ul>
            {cars.map((car, index) => 
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>
            )}

        </ul>
        
        <input type="number" value={carYear} onChange={handleYearChange}
        placeholder='Enter Year'></input><br/>
        <input type="text" value={carMake} onChange={handleMakeChange}
        placeholder='Enter Brand'></input><br/>
        <input type="text" value={carModel} onChange={handleModelChange}
        placeholder='Enter Model'></input><br/>
        <button onClick={handleAddCar}>Add Car</button>
        
    </div>);
    //<p> Your favourite car is: {car.year} {car.make} {car.model} </p>
}

export default Cars