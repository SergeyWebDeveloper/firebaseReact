import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import {Link} from 'react-router';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signUp(){
        const {email,password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email,password)
            .catch(error=>{
                console.log('error',this.setState({error}))
        })
    }

    render(){
        return(
            <div className="form-inline">
                <h2>Зарегистрироваться</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="email"
                        onChange={event=>this.setState({email: event.target.value})}
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange={event=>this.setState({password: event.target.value})}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={()=>this.signUp()}
                    >
                        Зарегистрироваться
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signin'}>Уже имеешь учетную запись?</Link></div>
            </div>
        )
    }
}
export default SignUp;