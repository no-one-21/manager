import React, {Component} from 'react';
import {View,Text,Picker} from 'react-native';
import {CardSection,Input} from './Common';
import {connect} from 'react-redux';
import {employeeUpdate } from '../actions';


class EmployeeForm extends Component {
    render(){
        return(
            <View>
                <CardSection>
                   <Input 
                   label="Name"
                   placeholder="Rohit"
                   value={this.props.name}  
                   onChangeText={text=>this.props.employeeUpdate({prop:'name',value:text})}
                   />
               </CardSection>
               <CardSection>
                   <Input 
                   label="Phone"
                   placeholder="827938840"
                   value={this.props.phone} 
                   onChangeText={text=>this.props.employeeUpdate({prop:'phone',value:text})}/>
               </CardSection>
               <CardSection>
                   <Text style={styles.pickerTextStyle}>shift</Text>
                   <Picker
                   style={{flex:1}}
                   selectedValue={this.props.shift}
                   onValueChange={day=> this.props.employeeUpdate({prop:'shift', value:day })}
                   >
                       <Picker.Item label="Monday" value="Mon" />
                       <Picker.Item label="Tuesday" value="Tue" />
                       <Picker.Item label="Wednesday" value="Wed" />
                       <Picker.Item label="Thursday" value="Thu" />
                       <Picker.Item label="Friday" value="Fri" />
                       <Picker.Item label="Saturday" value="Sat" />
                       <Picker.Item label="Sunday" value="Sun" />
                   </Picker>
               </CardSection>
            </View>
        );
    }
}

const styles={
    pickerTextStyle:{
        fontSize:18,
        paddingLeft:20
    }
}
const mapStateToProps= state =>{
    const{name,phone,shift}=state.employeeForm;
    return{name,phone,shift};
};

export default connect(mapStateToProps,{employeeUpdate}) (EmployeeForm);