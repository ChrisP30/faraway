import '../styles/display.css'

function Item({item, items, setItems, index }) {
    

    const handleChange = (e) => {
        if(!e.target.checked) {
            item.packed = true
        } else {
            item.packed = false
        }
    }
    
    const deleteItem = () => {
        const editedArr = items.filter((_, idx) => idx !== index)
        setItems(editedArr)
    }
    return (
        <div className='item-container'>
            <input type="checkbox" id='is-checked' value={item.packed} onChange={handleChange}/>
            <p className={item.packed ? 'checked': ''}>{item.num} {item.desc}</p>
            <p id='delete-key' onClick={deleteItem}>&times;</p>
        </div>
    )
}

export default Item