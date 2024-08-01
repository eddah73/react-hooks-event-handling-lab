// Code Keypad Component Here

function Keypad (){
    function handleClick(event){
        console.log('Entering password...')

    }
    return (
        <div>
            <input type="password" onChange={handleClick}/>
        </div>
    )
}

export default Keypad;