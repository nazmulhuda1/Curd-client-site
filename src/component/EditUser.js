import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState([])
    const [updateUser, setUpdateUser] = useState([])
    const navigete = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/users/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('user Updated')
                    console.log(data);
                    navigete('/')
                }
            })
    }

    // input fild
    const handleInputChange = event => {
        const name = event.target.name;
        const email = event.target.value;
        const newUser = { ...user }
        newUser[name] = email;
        setUpdateUser(newUser);
    }




    return (
        <div>
            <div className=" py-10 px-5 rounded  bg-base-200">
                <div className="hero-content ">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleUpdate}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        onChange={handleInputChange}
                                        defaultValue={user.name}
                                        type="text" name='name' placeholder="Name" className="input input-bordered"
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        onChange={handleInputChange}
                                        defaultValue={user.email}
                                        type="email" name='email' placeholder="Email" className="input input-bordered"
                                        required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUser;