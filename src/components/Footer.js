import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    function handleBlur() {
        if(!inputValue.includes('@')){
            alert('Adresse non valide')
        }
    }

    function handleInput(e) {
        setInputValue(e.target.value)
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input placeholder='Entrez votre mail' onBlur={handleBlur} value={inputValue} onChange={handleInput} />
		</footer>
	)
}

export default Footer