import '../styles/PlantItem.css'
import CareScale from './CareScale.js'

function PlantItem({id, cover, name, light, water, price}) {
    return (
        <li key={id} className="lmj-plant-item">
            <span className='lmj-plant-item-price'>{price}€</span>
            <img src={cover} className="lmj-plant-item-cover" alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem