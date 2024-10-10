import '../styles/form.css'
import { useState } from 'react'

function Form({ items, setItems, id, setId }) {
    const [input, setInput] = useState('')
    const [select, setSelect] = useState(1);

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSelectChange = (e) => {
        setSelect(e.target.value)
    }

    const addItem = () => {
        setId(id + 1)
        setItems([...items, {desc: input, num: select, id: id, packed: false}])
    }
    

    let numOfItems = Array.from({length: 20}, (value, index) => value = index + 1)
    return (
        <div className='form-container'>
            <p>What do you need for your trip?</p>
            <select name="" id="select-filed" onChange={handleSelectChange}>
                {numOfItems.map((item) => {
                    return <option key={item} value={item} id='select-value'>{item}</option>
                })}
            </select>
            <input type="text" id='input-field' placeholder='Item...' onChange={handleInputChange}/>
            <button id='submit-btn' onClick={addItem}>ADD</button>
        </div>
    )
}

export default Form