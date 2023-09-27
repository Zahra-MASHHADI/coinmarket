import Style from "./style";

export default function Coin(item){
    const {id , symbol ,name , image , market_cap , current_price , price_change_percentage_24h} = item.data
    return(
        <Style>
            <div className="nameImg">
                <img src={image} alt={id} width="30px" height="30px" />
                <p>{name}</p>
            </div>
            <div className="info">
                <p style={{width:"10%"}}>{symbol.toUpperCase()}</p>
                <p style={{width:"20%"}}> ${current_price.toLocaleString()}  </p>
                <p style={price_change_percentage_24h > 0 ? {color:"green"} : {color:"red"}}>
                    {price_change_percentage_24h?.toFixed(2)}
                </p>
                <p style={{width:"20%"}}>${market_cap.toLocaleString()}</p>
            </div>
            
        </Style>
    )
}