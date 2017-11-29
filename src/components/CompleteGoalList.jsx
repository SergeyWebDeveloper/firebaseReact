import React, {Component} from 'react';
import {completeGoalRef} from '../firebase';
import {connect} from 'react-redux';
import {setCompleted} from '../actions';

class CompleteGoalList extends Component {
    componentDidMount(){
        completeGoalRef.on('value', snap=>{
           let completeGoals=[];
           snap.forEach(completeGoal=>{
              const {email, title} = completeGoal.val();
              completeGoals.push({email,title});
           });
           this.props.setCompleted(completeGoals);
        });
    }


    render(){
        return(
            <div>
                {
                    this.props.completeGoals.map((completeGoal,index)=>{
                        const {email,title} = completeGoal;
                        return (
                            <div key={index}>
                                <strong>{title}</strong> completed by <span>{email}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {completeGoals} = state;
    return {
        completeGoals
    }
}

export default connect(mapStateToProps,{setCompleted})(CompleteGoalList);