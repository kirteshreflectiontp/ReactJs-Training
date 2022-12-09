import{createStore} from "redux";
import handler from "./handler";

function configureStore(state = {}){
    return createStore(handler,state)
}
export default configureStore;
