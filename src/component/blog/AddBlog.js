import React from 'react';

function AddBlog() {
    return (
        <>
            <h4 className='mt-3'>Add New Blog</h4>
            <div className='card mt-4'>
                <div className='card-body'>
                    <form className='row form-group'>
                        <div className='col-md-6'>
                            <label for="title">Title</label>
                            <input type="text" className='form-control mb-2' id="title" placeholder="Title" />
                        </div>
                        <div className='col-md-6'>
                            <label for="Image">Thumbnail</label>
                            <input type="file" id="Image" className='form-control mb-2' />
                        </div>
                        <div className='col-md-6'>
                            <label for="desc">Description</label>
                            <textarea className='form-control mb-2' rows="4" placeholder='Description'></textarea>
                        </div>
                        <div className='col-md-6'>
                            <div>
                                <label for="category">Category</label>
                                <select class="form-select mb-3" aria-label="select Category">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div>
                                <label className='d-block'>Status</label>
                                <div class="form-check form-check-inline" id="status">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="active" value="active" checked />
                                    <label class="form-check-label" for="active">Active</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inactive" value="inactive" />
                                    <label class="form-check-label" for="inactive">Inactive</label>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex jsutify-content-start gap-3'>
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

export default AddBlog;