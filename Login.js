import React , {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            passwordError:''
        }
        this.changeEmail1=this.changeEmail1.bind(this)
        this.changePassword1=this.changePassword1.bind(this)
        this.onLogin=this.onLogin.bind(this)

    }
    valid(){
        if(this.state.password.length < 8)
        {
            this.setState({passwordError:"Set a password of minimum 8 length"})
            return false
        }else if(!/^[a-zA-Z0-9]+$/.test(this.state.password))
        {
            this.setState({passwordError:"Set password with alphanumeric value"})
            return false
        }
        return true
    }
    changeEmail1(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword1(event){
        this.setState({
            password:event.target.value
        })
    }
    onLogin(event){
        event.preventDefault()
        if(!this.valid()){
            alert("Put valid user input")
        }else{
            alert("Wait for response")
        }
        this.setState({
            email:'',
            password:''
        })
    }
    render(){
        return(
            <div className='container'>
                <div className='form-div'>
                   <p>Login Here</p>
                     <form onSubmit={this.onLogin}>
                     <div>
                            <input type='email'
                            placeholder='Email'
                            onChange={this.changeEmail1}
                            value={this.state.email}
                            className='form-control form-group'
                            />
                            <p></p>
                        </div>
                        <div>
                            <input type='password'
                            placeholder='password'
                            onChange={this.changePassword1}
                            value={this.state.password}
                            className='form-control form-group'
                            />
                            <p>{this.state.passwordError}</p>
                        </div>
                        <input type='submit' className='btn btn-danger btn-black' value='Login'/>
                     </form>
                </div>
            </div>
        )
    }
}
export default Login

