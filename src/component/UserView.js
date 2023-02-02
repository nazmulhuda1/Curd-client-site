import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserView = () => {

    const [user, setUser] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/users/${id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [id])


    return (
        <div className=''>
            <div className=" py-10 px-5 rounded min-h-screen  bg-base-200">
                <div className="hero-content ">
                    <div className="card flex-shrink-0 w-96  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-xl text-gray-700 font-semibold'>Name :</h3>
                                    <h3>{user.name}</h3>
                                </div>
                                <div className='flex items-center justify-between mt-3'>
                                    <h3 className='text-xl text-gray-700 font-semibold'>Email :</h3>
                                    <h3>{user.email}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserView;