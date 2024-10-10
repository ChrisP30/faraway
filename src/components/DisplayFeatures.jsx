import '../styles/display.css'

function DisplayFeatures({ items, setItems, setId}) {

    const clearList = () => {
        const confirmed = window.confirm(
            'Are you sure you want to clear your list?'
        )
        if(confirmed) {
            setItems([])
            setId(0)
        }
    }

    const handleChange = (e) => {
        if(e.target.value === 'sort-input') {
            const newArr = items.map((item) => item)
            newArr.sort((a, b) => a.id - b.id)
            setItems(newArr)
        } else if(e.target.value === 'sort-description') {
            const newArr = items.map((item) => item)
            newArr.sort((a, b) => {
                const nameA = a.desc.toUpperCase();
                const nameB = b.desc.toUpperCase()

                if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }
                  return 0;
            })
            setItems(newArr)
        } else if(e.target.value === 'sort-packed') {
            console.log(e.target.value)
            const sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));
            setItems(sortedItems)
        }
    }

    return (
        <div className="features-container">
            <select name="" id="" onChange={handleChange}>
                <option value="sort-input">SORT BY INPUT ORDER</option>
                <option value="sort-description">SORT BY DESCRIPTION</option>
                <option value="sort-packed">SORT BY PACKED STATUS</option>
            </select>
            <button onClick={clearList}>CLEAR LIST</button>
        </div>
    )
}

export default DisplayFeatures