import React from 'react'

function Navbar() {
  return (
    <div>
        <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-between">
            <div className=" size-10 bg-slate-500 main menu">
                <img src="../public/NavbarImages/menu.png" />
            </div>
            <div className="size-10 logo">
                <img src="../public/NavbarImages/google_icon.png" />
               <h1> Gmail </h1>
            </div>
            <div className="size-35 relative flex h-0 items-center justify-between rounded-2xl">         
                    <img className="size-12 p" src="../public/NavbarImages/search.png" />
                    <input className="rounded-2xl bg-slate-300" type="text" placeholder="Search mail"/>
                    <img className="size-12" src="../public/NavbarImages/manage_search.png" />      
            </div>
            <div className="size-10 mx-4 support icon">
                <img src="../public/NavbarImages/help.png"/>
            </div>
            <div className="size-10 settings icon">
                <img src="../public/NavbarImages/settings.png" />
            </div>
            <div className="size-10 google apps icon">
                <img src="../public/NavbarImages/apps.png" />
            </div>
            <div className=" size-10  flex place-items-end justify-end">
                <img src="../public/NavbarImages/account_circle.png" />
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar