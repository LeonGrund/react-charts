import { connect } from 'react-redux';
import App from '../App'
import {
  initializeData,
  deleteData,
  addData,
} from '../actions/actions'


const mapStateToProps = (state, props) => ({
  chart: state.chart,
});

const mapDispatchToProps = {
  initializeData,
  deleteData,
  addData,
}

const AppContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
