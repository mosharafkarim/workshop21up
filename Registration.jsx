import React , {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


class Registration extends Component {
    constructor(){
        super()
        this.state={
            fullName:'',
            Mobile:'',
            email:'',
            password:'',
            confirmpassword:'',
            nameError:'',
            mobileError:'',
            passwordError:'',
            CpasswordError:''
        }
        this.changeFullName=this.changeFullName.bind(this)
        this.changeMobile=this.changeMobile.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changePassword=this.changePassword.bind(this)
        this.changeconfirmpassword=this.changeconfirmpassword.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeMobile(event){
        this.setState({
            Mobile:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    changeconfirmpassword(event){
        this.setState({
            confirmpassword:event.target.value
        })
    }
    valid(){
        if(!this.state.fullName)
        {
            this.setState({nameError:"Name can't be null"})
            return false
        }else if(this.state.Mobile.length !== 10)
        {
            this.setState({mobileError:"Put valid mobile number"})
            return false
        }else if(this.state.password.length<8)
        {
            this.setState({passwordError:"Set a password of minimum 8 length"})
            return false
        }else if(!/^[a-zA-Z0-9]+$/.test(this.state.password))
        {
            this.setState({passwordError:"Set password with alphanumeric value"})
            return false
        }else if(this.state.confirmpassword !== this.state.password)
        {
            this.setState({CpasswordError:"Password isn't match"})
            return false
        }
        return true
    }
    onSubmit(event){
        event.preventDefault()

        const registered={
            fullName:this.state.fullName,
            Mobile:this.state.Mobile,
            email:this.state.email,
            password:this.state.password,
            confirmpassword:this.state.confirmpassword
        }
        if(!this.valid())
        {
            alert("Form is not submitted")
        }
        else{
        axios.post('http://localhost:4000/app/signup' , registered)
        .then(res => console.log(res.data))

        this.setState({
            fullName:'',
            Mobile:'',
            email:'',
            password:'',
            confirmpassword:''
        })
    }
 }
    render() {
        return ( 
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <p>Create your account</p>
                        <form onSubmit={this.onSubmit}>
                        <div>
                            <input type='text'
                            placeholder='Full Name'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                            />
                            <p>{this.state.nameError}</p>
                        </div>
                        <div>
                            <input type='number'
                            placeholder='Mobile'
                            onChange={this.changeMobile}
                            value={this.state.Mobile}
                            className='form-control form-group'
                            />
                            <p>{this.state.mobileError}</p>
                        </div>
                        <div>
                            <input type='email'
                            placeholder='E-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />
                            <p></p>
                        </div>
                        <div>
                            <input type='password'
                            placeholder='password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />
                            <p>{this.state.passwordError}</p>
                        </div>
                        <div >
                            <input type='password'
                            placeholder='confirm password'
                            onChange={this.changeconfirmpassword}
                            value={this.state.confirmpassword}
                            className='form-control form-group'
                            />
                            <p>{this.state.CpasswordError}</p>
                        </div>
                            <input type='submit' className='btn btn-danger btn-black' value='Submit'/>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}

export default Registration;