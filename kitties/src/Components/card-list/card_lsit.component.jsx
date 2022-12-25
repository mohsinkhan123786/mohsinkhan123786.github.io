import './card_list.styles.css'

import { Card } from '../card/card.component'

export const CardList = (props) => {
    return (
    <div className='card-list'> 
        {props.kitties.map(kittie => 
            <Card key={kittie.id} kittie={ kittie } />)}
    </div>)
}   