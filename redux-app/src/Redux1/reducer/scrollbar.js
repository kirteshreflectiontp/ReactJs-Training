export default(State = [],action) =>{
    switch(action.type){
        case 'SHOW_SCROLLER':
            alert('Showing Scrollbar');
            return{
                ...State,
                Click:true,
                alert:'success',
                name:action.payload,
                page:'Event Called'
            };
            default:
                return{
                    ...State,
                    page:'initialized'
                };
    }
}