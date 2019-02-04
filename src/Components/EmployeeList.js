import _ from 'lodash';
import React,{Component } from 'react';

import {View,Text,ListView } from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component{

    componentWillMount(){
       
        this.props.employeesFetch();

        this.createDataSource(this.props);
    };

    componentWillReceiveProps(nextProps){
        
        this.createDataSource(nextProps);
    }

    createDataSource({employees}){
        const ds= new ListView.DataSource({
            rowHasChanged:(r1,r2)=>r1!==r2
        });

        this.dataSource=ds.cloneWithRows(employees);
    }

    renderRow(employee){
        return <ListItem employee={employee} />;
    }
// ye ek template taiyaar hai , mere paas how we are able to render any list !!
//sabse pahle data fetch karo , in form of array and then try to convert that objects data in for of array,
//using flatList loop through that array data,
// to fetch data kuch dynamic methods and lifecycle methoods bhi use kiye hain , go through those also !!

    render(){
        console.log(this.props);
        return(
           <ListView 
           enableEmptySections
           dataSource={this.dataSource}
           renderRow={this.renderRow}
           />
        );

    }
}

const mapStateToProps= state=>{
    const employees= _.map(state.employees, (val,uid)=>{
       return{...val, uid} ;
    });
     return {employees};
};

export default connect(mapStateToProps,{employeesFetch})(EmployeeList);