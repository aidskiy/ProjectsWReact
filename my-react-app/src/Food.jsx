function Food(){
    const food1="banana";
    const food2="orange"

    return(
        <ul>
            <li>apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food