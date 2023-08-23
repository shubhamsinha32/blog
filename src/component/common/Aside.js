import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilepic from "../../../src/Assets/img/dp.jpg";

function Aside() {
    const [activeItem, setActiveItem] = useState('Dashboard'); // Set the default active item

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <>
            <aside className="aside-expanded" id="asideBox">
                <div className='text-center'>
                    <img src={profilepic} className='profilepic navtext' />
                    <h6 className='pt-2 mb-0'>Admin</h6>
                </div>
                <ul className="aside-navbar pt-3">
                    <li className={activeItem === 'Dashboard' ? 'active' : ''}>
                        <Link to="/home" onClick={() => handleItemClick('Dashboard')}>
                            <i className="fas fa-tachometer-alt"></i> <span className="navtext">Dashboard</span>
                        </Link>
                    </li>
                    <li className={activeItem === 'Form' ? 'active' : ''}>
                        <Link to="/Newform" onClick={() => handleItemClick('Form')}>
                            <i className="fab fa-wpforms"></i> <span className="navtext">Form</span>
                        </Link>
                    </li>
                    <li className={activeItem === 'Table' ? 'active' : ''}>
                        <Link to="/Table" onClick={() => handleItemClick('Table')}>
                            <i className="fas fa-list"></i> <span className="navtext">Table</span>
                        </Link>
                    </li>
                    <li className={`dropdown ${activeItem === 'addblog' || activeItem === 'viewblog' ? 'active' : ''}`}>
                        <a href="#"><i className='fas fa-blog'></i> <span className='navtext'>Blog</span></a>
                        <ul className="dropdown-content">
                            <li><Link to="/addblog" onClick={() => handleItemClick('addblog')}>Add Blog</Link></li>
                            <li><Link to="/viewblog" onClick={() => handleItemClick('viewblog')}>View Blog</Link></li>
                        </ul>
                    </li>
                    <li className={`dropdown ${activeItem === 'addcategory' || activeItem === 'viewcategory' ? 'active' : ''}`}>
                        <a href="#"><i class="fas fa-volleyball-ball"></i> <span className='navtext'>Category</span></a>
                        <ul className="dropdown-content">
                            <li><Link to="/addcategory" onClick={() => handleItemClick('addcategory')}>Add Category</Link></li>
                            <li><Link to="/viewcategory" onClick={() => handleItemClick('viewcategory')}>View Category</Link></li>
                        </ul>
                    </li>
                </ul>
                <Link to="/" className='logout'><i className='fas fa-power-off'></i> <span className="navtext">Logout</span></Link>
            </aside>
        </>
    );
}

export default Aside;
