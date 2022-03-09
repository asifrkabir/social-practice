import React from 'react';
import './User.css';

const User = (props) => {

    const { name, image, salary } = props.user;

    return (
        <div className="col my-5 d-flex align-items-center justify-content-center text-light">
            <div className="card user-card border-0 d-flex align-items-center">
                <img src={image} className="card-img-top profile-picture" alt="..." />
                <div className="card-body user-card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Salary: ${salary}</p>
                    <button onClick={() => props.handleAddFriends(props.user)} type="button" className="btn btn-primary"><i className="fa-solid fa-user-plus"></i> Add Friend</button>
                </div>
            </div>
        </div>
    );
};

export default User;