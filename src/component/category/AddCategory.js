import React from 'react';

function AddCategory() {
    return (
        <>
            <h4 className='mt-3'>Add New Category</h4>
            <div className='card mt-4'>
                <div className='card-body'>
                    <form className='row form-group'>
                        <div className='col-md-6'>
                            <label for="title">Category Name</label>
                            <input type="text" className='form-control mb-2' id="title" placeholder="New Category" />
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex jsutify-content-start gap-3 pt-4 mt-1'>
                                <input type="submit" className='btn btn-primary' value="Submit" />
                                <input type="submit" className='btn btn-cancel' value="cancel" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddCategory;