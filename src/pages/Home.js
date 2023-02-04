import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AddUserModal from './AddUserModal';
import UserTable from './UserTable';

const Home = () => {

    const [users, setUsers] = useState([]);

    const loaderUser = () => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data.reverse()))
    }
    console.log(users)
    useEffect(() => {
        loaderUser()
    }, [users])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('delete success')
                    loaderUser()
                }
            })
    }




    return (
        <div className='py-16 min-h-screen bg-slate-100'>
            <div className='flex  flex-col items-center justify-start'>
                <div className='w-10/12'>
                    <AddUserModal></AddUserModal>
                </div>
            </div>
            <div className="overflow-x-auto flex  flex-col items-center justify-center">
                <table className="table w-10/12">
                    <thead className=''>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th className='items-center justify-center flex '>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, i) =>
                            <UserTable
                                key={user?._id}
                                item={i}
                                user={user}
                                handleDelete={handleDelete}
                            ></UserTable>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;