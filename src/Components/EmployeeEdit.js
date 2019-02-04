import React,{Component} from 'react';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {Card,CardSection,Button,Confirm } from './Common';
import {employeeUpdate,employeeSave,employeeDelete} from '../actions';
import _ from 'lodash';
import Communications from 'react-native-communications';
class EmployeeEdit extends Component {
    state={showModal:false};
    componentWillMount(){
        _.each(this.props.employee, (value,prop)=>{
            this.props.employeeUpdate({prop,value});
        });
    }
    onAccept(){
        const {uid}=this.props.employee;
        this.props.employeeDelete({uid});
    }

    onDecline(){
        this.setState({showModal:false})
    }

    onButtonPress(){
        const{name,phone,shift}=this.props;
        this.props.employeeSave({name,phone,shift,uid:this.props.employee.uid})
         
    }

    onTextPress(){
        const{phone, shift} = this.props;
        Communications.text(phone, `your upcoming shift is on ${shift}`)
    }

    render(){
        return(
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Textt Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={()=>this.setState({showModal:!this.state.showModal})}>
                        Fire!!
                    </Button>
                </CardSection>
                <Confirm visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}>
                    Are you sure you want to fire this employee?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps= state =>{
    const {name,phone,shift} =state.employeeForm;
    return{ name,phone,shift};
};

export default connect(mapStateToProps,{employeeUpdate,employeeSave,employeeDelete})(EmployeeEdit);