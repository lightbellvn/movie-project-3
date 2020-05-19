import React, { Component } from "react";
import './headerStyle.css'
import { connect } from "react-redux";
import * as actions from './../../../../Redux/Actions/index.js'

class Header extends Component {
   render() {
      return (
         
            <div className="heading">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12 ">
                       
                        <div className="searchHeader">
                           <a className="text-light" href='#'> <i className="fa fa-search"></i></a>


                        </div>
                        <div 
                        className='sign_up text-light' 
                        data-toggle="modal" 
                        data-target="#myModalSignUp"
                        onClick = {this.props.actResetFormSignUp}
                        >
                           <a href='#' className="text-light">
                           <i className="fa fa-user-plus mr-1"/>
                           SIGN UP

                           </a>

                        </div>
                        
                     </div>

                  </div>
               </div>
            </div>
        

      );
   }
}
const mapDispatchToProps = (dispatch, props) =>{
   return {
      actResetFormSignUp : ()=>{
         dispatch(actions.actResetFormSignUp())
      }
   }
}

export default connect (null, mapDispatchToProps) (Header)
