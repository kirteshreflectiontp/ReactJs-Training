export default(state = [],action) => {
    switch(action.type){
        case 'UPDATE_PRODUCT':
            return{
                ...state,
                products:action.products
            };
            case 'ADD_PRODUCT':
            return{
                ...state,
                products:{arrayOfProducts:action.products}
            };
            default:
                return{
                    ...state,
                };
    }
}