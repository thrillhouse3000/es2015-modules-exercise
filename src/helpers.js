function choice(items) {
    let rand = Math.floor(Math.random() * items.length)
    return items[rand]
}

function remove(items, item) {
    if (items.includes(item)) {
        let idx = items.findIndex(item => item)
        items.splice(idx, 1);
        return items
    } else {
        return undefined
    }
}

export {choice, remove}