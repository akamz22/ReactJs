import React from "react";
import { Component } from "react";
class Profile extends Component {
    constructor(props) {
        super(props);
        //Create State
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location"
            }
        }
        // console.log("Child - constructor " + this.props.name);
    }

    async componentDidMount() {

        // Best place to call api 
        // this.timer = setInterval(() => {
        //     console.log("Namaste React Op");
        // }, 1000);

        // console.log("Child - ComponentDidMount " + this.props?.name);
        const data = await fetch('https://api.github.com/users/akamz22');
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo:json,
        });
    }
    componentDidUpdate(prevProps, prevState) {

        if (this.state.count !== prevState.count) {

        } {
            //code--------------------------------
        }
        if (this.state.count !== prevState.count2) {

        } {
            //code--------------------------------
        }
        // console.log("Child - componentDidUpdate");
    }
    componentWillUnmount() {
        clearInterval(this.timer);
        // console.log("Child - componentWillUnmount");
    }
    render() {
        // console.log("Child - Render " + this.props?.name);
        return (
            <div>
                <h1>My Profile</h1>
                <img src={"https://avatars.githubusercontent.com/u/81897979?v=4"} />
                <h2>Name : {this.state?.userInfo?.name}</h2>
                <h2>Location : {this.state?.userInfo?.location}</h2>
              
            </div>
        )
    }
};

export default Profile;


/*
Child - componentWillUnmount
 Child - constructor First Child
 Child - Render First Child
 Child - ComponentDidMount First Child
 API Call------------------------------------
 {login: 'akamz22', id: 81897979, node_id: 'MDQ6VXNlcjgxODk3OTc5', avatar_url: 'https://avatars.githubusercontent.com/u/81897979?v=4', gravatar_id: '', …}
 Child - Render First Child
 Child - componentDidUpdate
 */