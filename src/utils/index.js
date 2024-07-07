//Agregarlo al CustomHook useShoppingCart() ... como "getTotalPrice(data)"


/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array Of Objects
 * @returns {number}
 */
export const totalPrice = (products) => {
    const sum = products.reduce((sum , product) => sum + product.price , 0)  
    return parseFloat(sum.toFixed(2))       
}


/**
 * 
 */

export const dateTime = () => {
    const today = new Date()
    var date =
    today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear()
    const time =
    today.getHours() + 'hs' + '' + today.getMinutes() + 'm' + '' + today.getSeconds() + 's'
    const dataTime = time + ' - ' + date

    return dataTime
}

/** */