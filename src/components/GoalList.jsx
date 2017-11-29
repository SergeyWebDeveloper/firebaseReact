import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goalRef} from '../firebase';
import {setGoals} from '../actions';
import GoalItem from './GoalItem';


class GoalList extends Component{

    componentDidMount(){
        goalRef.on('value',snap=>{
            let goals=[];
           snap.forEach(goal=>{
               const {email, title} = goal.val();
               goals.push({email,title});
           });
           console.log(goals);
           this.props.setGoals(goals);
        });
    }

    render(){
        const {goals} = this.props;
        return(
            <div style={{margin: '10px'}}>
                {goals.map((goal,index)=>{
                    return (
                       <GoalItem key={index} goal={goal} />
                    )
                })}
            </div>
        )
    }
}


function mapStateToProps(state) {
    const {goals} = state;
    return {
        goals
    }
}

export default connect(mapStateToProps,{setGoals})(GoalList);