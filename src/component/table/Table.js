import React from 'react';

function Tablelisting() {

    return (
        <>
            <h4 className='mt-3'>View List</h4>
            <div className='card mt-4'>
                <div className='card-body'>
                    <div>
                        <form className='d-flex gap-3 justify-content-start form-group mb-3'>
                            <input type="text" className='form-control' placeholder="Search" />
                            <input type="date" className='form-control' />
                            <input type="button" className='btn btn-primary' value="Search" />
                        </form>
                    </div>
                    <div className='table-responsive'>
                        <table className='table table-bordered mytable'>
                            <thead>
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>Blog Name</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Image</th>
                                    <th scope='col'>Created on</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>1</th>
                                    <td>First Blog</td>
                                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                    <td><i class="fas fa-blog"></i></td>
                                    <td>01-08-2023</td>
                                    <td><span class="approved">Approved</span></td>
                                    <td>Active</td>
                                </tr>
                                <tr>
                                    <th scope='row'>2</th>
                                    <td>First Blog</td>
                                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                    <td><i class="fas fa-blog"></i></td>
                                    <td>01-08-2023</td>
                                    <td><span class="rejected">Rejected</span></td>
                                    <td>Active</td>
                                </tr>
                                <tr>
                                    <th scope='row'>3</th>
                                    <td>First Blog</td>
                                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                    <td><i class="fas fa-blog"></i></td>
                                    <td>01-08-2023</td>
                                    <td><span class="Pending">Pending</span></td>
                                    <td>Active</td>
                                </tr>
                                <tr>
                                    <th scope='row'>4</th>
                                    <td>First Blog</td>
                                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                    <td><i class="fas fa-blog"></i></td>
                                    <td>01-08-2023</td>
                                    <td><span class="rejected">Rejected</span></td>
                                    <td>Active</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Tablelisting;