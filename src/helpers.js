export const getItemsFroLocalStoreage = key => {
    const value = localStorage.getItem(key)

    let toDoItems = null;


    try {
        const parsedJSON = JSON.parse(value)

        if (Array.isArray(parsedJSON)) {
            toDoItems = parsedJSON
        }
    } catch (e) {
        toDoItems = []
    }
    return toDoItems
}

export const saveTodoItemsToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
