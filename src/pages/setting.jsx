import React from 'react'

const Setting = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
        <h2 className="text-xl font-bold mb-4">Account Settings</h2>
        <div className="flex flex-col items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQ-4Iue5GllXgqoVIbuStLOJ49ot8DFslQQ&s" 
            alt="Profile"
            className="w-22 h-22 rounded-full mb-2 object-cover"
          />
          <h3 className="text-lg font-semibold">Marry Doe</h3>
          <p className="text-gray-500">Marry@Gmail.Com</p>
          <p className="text-sm text-gray-600 mt-3">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  )
}

export default Setting
