import React from 'react';
import dp from '../../images/dp.jpg';
import './Admin.css';

const Admin = ({friends}) => {

    const totalSalary = friends.reduce((sum, friend) => sum + friend.salary, 0);

    return (
        <div className="row admin-card d-flex align-items-center justify-content-center text-light p-5 my-5">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <img src={dp} className="card-img-top" alt="..."></img>
            </div>
            <div className="col-md-8 text-start">
                <h1 className="text-primary text-uppercase">Asif Rezwan Kabir</h1>
                <br />
                <h3>Friends: {friends.length}</h3>
                <h3>Total Salary of Friends: ${totalSalary}</h3>
            </div>

        </div>
    );
};

export default Admin;