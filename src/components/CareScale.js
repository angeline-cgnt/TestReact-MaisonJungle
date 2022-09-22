import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantity = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
}

function CareScale({ scaleValue, careType}) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? (<img src={Sun} alt="sun" />) : (<img src={Water} alt="water" />)
    
    return (
        <div onClick={() => 
            alert(`Cette plante requiert ${quantity[scaleValue]} ${careType === 'light' ? 'de lumière' : 'd\'eau'}`)
        }>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (<span key={rangeElem.toString()}>{scaleType}</span>) : null
            )}
        </div>
    )
}

export default CareScale