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
                products: {arrayOfProducts: action.products}
            };
            case 'updateProfile':
                const userList = localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
                return{
                    ...state,
                    user:userList
                };
                case 'addProfile':
                    alert('addd profile updated')
                    localStorage.setItem('users',JSON.stringify(action.users))
                    return{
                        ...state,
                        user:action.users,
                        addProfile:action.addProfile
                    };
            default:
                return{
                    ...state,
                };
    }
    
}