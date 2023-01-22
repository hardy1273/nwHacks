import React from 'react';
import {categories} from '../utils/data';
import Link from 'next/link';


function Sidebar({closeToggle, user}) {

    const handleCloseSidebar = () => {
        if (closeToggle) closeToggle(false);
      };

    return (
        <div class ="d-flex flex-col justify-left px-4 pt-2 bg-white  overflow-y-scroll flex-3 hide-scrollbar"
        style={{height:  "100%", backgroundColor: "#fffff !important" }}>
            <div class=" d-flex flex-col">
                <Link href="/"
                class="d-flex flex-col  gap-2 my-6 pt-1 w-190 items-center"
                onClick={handleCloseSidebar}>
                
                </Link>
                <div className="flex flex-col gap-5">
                <p class="mt-2 fs-3 fw-bold">Discover categories</p>
                {categories.slice(0, categories.length - 1).map ((category)=> (
                    <Link
                    href={`/category/${category.name}`}
                    class="d-flex items-center py-2 gap-3 fs-4 fs-semi-bold text-black"
                    style ={{color: "#5465FF" }}
                    onClick ={handleCloseSidebar}
                    key={category.name}
                    >
                        <img src={category.image} class="img-fluid " style={{borderRadius: 50 , width: 30 , height: 30 }}/>
                        {category.name}
                    </Link>
                ))}


            </div>


            </div>
        {user && (
            <Link 
            to={`user-profile/${user._id}`}
            class="d-flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-4 shadow-lg mx-3"
            oClick={handleCloseSidebar}
            >
                
                <img src ={user.image}
                class="custom-img" style="width: 2rem; height: 2rem;"
                alt="user-profile"/>
                <p>{user.userName}</p>

            </Link>
        )}
        </div>

  )
}

export default Sidebar