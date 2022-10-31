

export const Reducer = (state,action) => {
    switch(action.type){
        case'Login':
return state.map((user)=> {
if(user.username === action.username){
    return{...user,username:'Krittesh Gaikwad'}
}
else{
    return user
}
})   
case'Register':
alert('Register')
return state;
default:
    return state;
 }
}
