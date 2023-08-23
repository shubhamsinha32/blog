import React, { useState } from 'react';

function ViewCategory() {
    const [isActive, setIsActive] = useState(true);

    const handleSwitchChange = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <h4 className='mt-3'>View Category</h4>
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
                                    <th scope='col'>Category Name</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Change Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>1</th>
                                    <td>Category Name</td>
                                    <td><span class="approved">Active</span></td>
                                    <td>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switch1" checked={isActive} onChange={handleSwitchChange} />
                                            <label class="form-check-label" for="switch1">
                                                {isActive ? 'Active' : 'Inactive'}
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>2</th>
                                    <td>Category Name</td>
                                    <td><span class="rejected">Inactive</span></td>
                                    <td>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switch2" checked={isActive} onChange={handleSwitchChange} />
                                            <label class="form-check-label" for="switch2">
                                                {isActive ? 'Active' : 'Inactive'}
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>3</th>
                                    <td>Category Name</td>
                                    <td><span class="approved">Active</span></td>
                                    <td>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switch3" checked={isActive} onChange={handleSwitchChange} />
                                            <label class="form-check-label" for="switch3">
                                                {isActive ? 'Active' : 'Inactive'}
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>4</th>
                                    <td>Category Name</td>
                                    <td><span class="rejected">Inactive</span></td>
                                    <td>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switch4" checked={isActive} onChange={handleSwitchChange} />
                                            <label class="form-check-label" for="switch4">
                                                {isActive ? 'Active' : 'Inactive'}
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>5</th>
                                    <td>Category Name</td>
                                    <td><span class="approved">Active</span></td>
                                    <td>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switch5" checked={isActive} onChange={handleSwitchChange} />
                                            <label class="form-check-label" for="switch5">
                                                {isActive ? 'Active' : 'Inactive'}
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>6</th>
                                    <td>Category Name</td>
                                    <td><span class="rejected">Inactive</span></td>
                                    <td>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switch6" checked={isActive} onChange={handleSwitchChange} />
                                            <label class="form-check-label" for="switch6">
                                                {isActive ? 'Active' : 'Inactive'}
                                            </label>
                                        </div>
                                    </td>
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

export default ViewCategory;