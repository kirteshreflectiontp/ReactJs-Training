import {ShowScrollbar} from './Redux1/actions'
import './App.css';
import {connect} from 'react-redux';
function App(props) {
console.log(props)
  return (
    <div>
      <button onClick={() => props.ShowScrollbar({
name:'Kritesh',
salery:'40000',
job:'traine'
      })}>Button</button>
    </div>
  );
}
const mapStateToProps = state =>({
...state
})
const mapDispatchToProps = dispatch =>({
  ShowScrollbar:(payload)=> dispatch(ShowScrollbar(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
