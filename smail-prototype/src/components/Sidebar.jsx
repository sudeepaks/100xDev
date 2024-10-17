import React from 'react'

function Sidebar() {
  return (
    <div>
        <div className="m-2  grid gap-y-3 w-70 ">
            <div className=" flex bg-slate-300 hover:bg-slate-400 rounded-2xl">
                <img className="size-8"src="SidebarImages/compose.png" alt="" />
                <p className="w-15 mx-8 ">Compose</p>
            </div>
            <div className="w-60  bg-slate-300 ">
                <div className="size-10 flex ">
                      <img className="size-8 " src="../public/SidebarImages/all mail.png" alt="" /> 
                      <p className=" w-15 mx-8">Inbox</p>
                </div>
                <div className="size-8 flex">
                    <img className="size-8" src="./public/SidebarImages/starred.png" alt="" />
                    <p className=" w-15 mx-8">Starred</p>
                </div>
                <div className="size-8 flex">
                    <img className="" src="./public/SidebarImages/snoozed.png" alt="" />
                    <p className=" w-15 mx-8">Snoozed</p>
                </div>
                <div className="size-8 flex">
                    <img className="" src="./public/SidebarImages/sent.png" alt="" />
                    <p className=" w-15 mx-8">Sent</p>
                </div>
                <div className="size-8 flex">
                    <img className="" src="./public/SidebarImages/drafts.png" alt="" />
                    <p className=" w-15 mx-8">Drafts</p>
                </div>
                <div className="size-8 flex">
                    <img className="" src="./public/SidebarImages/important.png" alt="" />
                    <p className=" w-15 mx-8">Important</p>
                </div>
                <div className="size-8 flex">
                    <img className="" src="./public/SidebarImages/chats.png" alt="" />
                    <p className=" w-15 mx-8">Chats</p>
                </div>
                <div className="size-8 flex">
                    <img className="" src="./public/SidebarImages/schedled.png" alt="" />
                    <p className=" w-15 mx-8">Scheduled</p>
                </div>
                <div className="size-8 flex">
                    <img className="" src="./public/SidebarImages/all mail.png" alt="" />
                    <p className=" size-10 w-15 mx-8">AllMail</p>
                </div>
                <div className="size-8 flex">
                    <img className="" src="./public/SidebarImages/spam.png" alt="" />
                    <p className=" w-15 mx-8">Spam</p>
                </div>
                <div className="size-8 flex">
                    <img className="" src="./public/SidebarImages/trash.png" alt="" />
                    <p className=" w-15 mx-8">Trash</p>
                </div>
                <div className="size-8 flex">
                    <img className="" src="./public/SidebarImages/categories.png" alt="" />
                    <p className=" w-15 mx-8">Categories</p>
                </div>
                <div className="size-8 flex">
                    <img className="" src="./public/SidebarImages/manage labels.png" alt="" />
                    <p className=" w-15 mx-8">Managelabels</p>
                </div>
                
            </div>
            <div className=" ">Lables
                <button>+</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar