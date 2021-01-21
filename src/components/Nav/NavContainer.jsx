import React from 'react'
import Nav from './Nav'
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        sidebarReducer: () => {
            dispatch(sidebarReducer())
        }
    }
}
const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)
export default NavContainer