import '../styles/display.css'
import Item from './Item'

function ItemDisplay({items, setItems}) {
    return (
        <div className='display-flex'>
            <div className="display-container">
                {items.map((item, key) => {
                    return <Item key={key} item={item} setItems={setItems} items={items} index={key}/>
                })}
            </div>
        </div>
    )
}

export default ItemDisplay