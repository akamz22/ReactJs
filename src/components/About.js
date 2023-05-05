import React from "react";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
import Profile from "./Profile";
import userContext from "../utils/userContext";
class About extends Component {
    constructor(props) {
        super(props)
        // console.log("Parent - Constructor");


    }

    async componentDidMount() {
        // console.log("Parent - componentDidMount")
    }
    render() {
        // console.log("Parent - Render");
        return (
            <div>
                <userContext.Consumer>
                    {({user}) => <h4 className="font-bold text-xl">{user.name} - {user.email}</h4>}
                </userContext.Consumer>
                <h1>About Us</h1>
                <h2> This is about us page</h2>
                <ProfileClass name={"Second Child"} />
                <Profile name={"First Child"} />
            </div>
        )
    }
}
export default About;

/*
1.Parent Constructor
2.Parent Render
3.First Child Constructor
4.First Child Render
5.Second Child Constructor
6.Second Child Render
  Dom is updated
7.First Child componetDidMount
8.Second Child componetDidMount
9.ParentcomponetDidMount
 */