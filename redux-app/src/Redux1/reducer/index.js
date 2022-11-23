import{createStore} from "redux";
import scrollbar from "./scrollbar";

function configureStore(state = {alert:true}){
    return createStore(scrollbar,state)
}
export default configureStore;
