import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import {connect} from 'react-redux';

class App extends Component{

    signOut(){
        firebaseApp.auth().signOut();
    }

    render(){
        return(
            <div>
                App
                <button
                    className="btn btn-danger"
                    onClick={()=>this.signOut()}
                >
                    Выйти
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state: ', state);
    return {};
}

export default connect(mapStateToProps,null)(App);