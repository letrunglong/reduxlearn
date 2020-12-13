import React, { Component } from 'react';
import { connect } from 'react-redux';



class New extends Component {
    // changeStatus = ()=>{
    //     var {dispatch} = this.props;
    //     dispatch({type:'CHANGE_STATUS'})
    // }
    render() {
        return (
            <div>
                This is New component
                <button onClick = {()=>this.props.changeStatus()}>Change Status</button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStatus: () => {
            dispatch({type:'CHANGE_STATUS'})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(New);