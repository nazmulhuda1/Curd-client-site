import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddUserModal = () => {
    const naviget = useNavigate()
    // const location = 

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target
        const user = {
            name: form.name.value,
            email: form.email.value
        }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('user create successfully')
                    naviget('/')
                    event.target.reset()
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className=''>
            <label htmlFor="my-modal-3" className="flex items-center justify-center w-16 mb-6  cursor-pointer ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-4xl bg-slate-200 p-2 shadow rounded text-purple-800">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
            </label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className=" text-2xl text-black cursor-pointer btn-sm btn-circle absolute right-2 top-2 justify-center">✕</label>
                    <div>
                        <div className=" py-10 px-5 rounded  bg-base-200">
                            <div className="hero-content ">
                                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control mt-6">
                                                <button className="btn btn-primary">Add User</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUserModal;