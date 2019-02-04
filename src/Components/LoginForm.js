import React,{ Component} from 'react';
import { Card ,CardSection ,Input ,Button,Spinner } from './Common';
import {connect } from 'react-redux';
import {View,Text} from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
class LoginForm extends Component{
//from here we will provide the action with its data
//these are event handlers
    onEmailChange(text){
        //this is a action creator:email changed which will return a action
         this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const{email,password}=this.props;
        this.props.loginUser({email,password});
    }

    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroundColor:'white'}}>
                    <Text style={styles.errorTextStyle} >
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton=()=>{
        if(this.props.loading){
            return <Spinner size="large" />;
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                    label= 'Email'
                    value={this.props.email}
                    placeholder='user@gmail.com' 
                    onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                    secureTextEntry
                    label='Password'
                    placeholder='password'
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    />

                </CardSection>
                {this.renderError()}
                <CardSection>
                   {this.renderButton()}
                    
                </CardSection>


            </Card>
        );
    }
}

const mapStateToProps = state =>{
    return{
        email: state.auth.email,
        password: state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading,
        
    };
};

const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }

}

export default connect(mapStateToProps,{emailChanged , passwordChanged,loginUser}) (LoginForm);
//this will allow emailchanged to pass as a prop in this file , always remember this ....how it is done...
// connect ke do arguments hain, pehla hai mapStateToProps aur dusra hai action creators

// with this connect , i have connected this email changed with the store ....
//and in passing reducers in store , i have given this as a action in Auth reducer.js file ....
// so bahar se using connect is action ko store se connect kia , fir usmein wo store mein pass kia , toe wo as a action pass kar dia in reducers