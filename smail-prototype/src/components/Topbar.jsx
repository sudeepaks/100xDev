import React from 'react'

function Topbar() {
  return (
    <div className="flex size p-4 ">
        <div className="mx-6">
            <img className="size-6" src="TopbarImages/back to inbox.png" alt="Back to inbox" />
        </div>
        <div className="mx-6">
            <img className="size-6" src="TopbarImages/archive.png" alt="Archive" />  
        </div>
        <div className="mx-6">
            <img className="size-6" src="TopbarImages/spam.png" alt="Report spam" />
        </div>
        <div className="mx-6">
            <img className="size-6" src="TopbarImages/trash.png" alt="Delete" />
        </div>
        <div className="mx-6">
            <img className="size-6" src="TopbarImages/mark_email_unread.png" alt="Mark as unread" />
        </div>
        <div className="mx-3">
            <img className="size-6" src="TopbarImages/move to.png" alt="Move to" />
        </div>
        <div className="mx-3">
            <img className="size-6" src="TopbarImages/more.png" alt="More" />
        </div>
        <div className="mx-3">
            <img className="size-6" src="TopbarImages/arrow_back.png" alt="Newer" />
        </div>
        <div className="mx-3">
            <img className="size-6" src="TopbarImages/older.png" alt="Older" />
        </div>
    </div>
  )
}

export default Topbar