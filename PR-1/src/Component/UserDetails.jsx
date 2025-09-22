import React from "react";

class UserDetails extends React.Component {
    render() {
        return (
            <div className="user-card">
                <ul>
                    <li><span>Name:</span> {this.props.name}</li>
                    <li><span>Surname:</span> {this.props.surname}</li>
                    <li><span>Age:</span> {this.props.age}</li>
                    <img src={this.props.img} alt="User" />
                    <li><span>Address:</span> {this.props.address}</li>
                </ul>
            </div>
        )
    }
}

export default UserDetails;
