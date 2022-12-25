import './card.styles.css'

export const Card = (props) => {
    
    return (
        <div className='card-container'> 
            <img src={`https://robohash.org/${props.kittie.id}?set=set4&size=180x180`} alt="kittie_img" />
            <h2> { props.kittie.name } </h2> 
            <p> {props.kittie.email} </p>
        </div>
    )
}