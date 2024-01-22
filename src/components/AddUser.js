import React from 'react';
//import logo from 'E:/www/src/img/logo.png'


class AddUser extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			first_name: '',
			last_name: '',
			bio: '',
			email: '',
			isHappy: false,
		}
	}
	userAdd = {}
	render() {
		return (
			<form ref={(el) => this.myForm = el}>
				<input placeholder='Name' onChange={(ev) => this.setState({first_name: ev.target.value})}></input>
				<input placeholder='Last Name' onChange={(ev) => this.setState({ last_name: ev.target.value })}></input>
				<input placeholder='Biography' onChange={(ev) => this.setState({ bio: ev.target.value })}></input>
				<input placeholder='Email' onChange={(ev) => this.setState({ email: ev.target.value })}></input>
				<label htmlFor='isHappy'>Are you happy?</label>
				<input type='checkbox' id='isHappy' onChange={(ev) => this.setState({ isHappy: ev.target.checked })}></input>
				<button type='button' onClick={()=> {
				this.myForm.reset()
				this.userAdd = {
					first_name: this.state.first_name,
					last_name: this.state.last_name,
					bio: this.state.bio,
					email: this.state.email,
					isHappy: this.state.isHappy,
				}
				if (this.props.user) {
					this.userAdd.id = this.props.user.id
				}
				this.props.onAdd(this.userAdd)
				}}>Add</button>
			</form>
		)
	}
}

export default AddUser