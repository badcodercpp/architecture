
import { connect } from 'react-redux';
import DemoComponent from '../component/demo.component';

const mapStateToProps = state => ({
    name: state.name
})