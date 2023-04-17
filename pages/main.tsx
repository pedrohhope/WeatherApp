
interface Iprops{
    inputValue:string;
    SetInputValue:any;
    handleClick:any;
    discription?:string;
    tempMax:string;
    tempMin:string;
    Statename:any;
    Time:any;
}

export default function Main(props:Iprops){
    return (
        <div className="main-content"  style={{backgroundImage: `url("bg-temp-now.jpg")` }}>
            <div className="main-container">

            <div className="state">
                <h1>{props.Statename}</h1>
            </div>

            <div className="stateTime">
                <p>{props.Time}</p>
            </div>
                
                <div className="main-submit">
                    <input type="text" value={props.inputValue} onChange={(event) => props.SetInputValue(event.target.value)} placeholder="Escreva Uma Localidade"/>
                    <button onClick={props.handleClick}>Pesquisar</button>
                </div>

                <div className="main-text">
                    <p id="graus-text">{props.discription + '°'}</p>
                    <div className="main-text-span">
                        <p>MAX: <span>{props.tempMax}</span> </p>
                        <p>MIN: <span>{props.tempMin}</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}