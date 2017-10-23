import {connect} from 'react-redux';
import FortuneShow from './fortunes';
import {fetchFortune, fetchFortunes} from '../actions/fortune_actions';
import {selectAll} from '../reducers/selectors';


const mapStateToProps = (state, {match}) => {
  // console.log(state);

// console.log(state);
  return {
    fortune: selectAll(state.fortunes)
    // fortune: fetchFortunes()
  };

};

const mapDispatchToProps = dispatch => ({
  fetchFortune: id => dispatch(fetchFortune(id)),
  fetchFortunes: () => dispatch(fetchFortunes()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FortuneShow);
