import { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-14 h-14 bg-slate-400 rounded-full"></div>
        <label htmlFor="picture" className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring focus:ring-orange-500 text-gray-700">
          Change
          <input id="picture" type="file" className="hidden" accept="image/*"></input>
        </label>
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email address
        </label>
        <input id="email" type="email" className="
          appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 
          focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500" required />
      </div>
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone number
        </label>
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-sm text-gray-500 select-none">+82</span>
          <input id="input" className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none placeholder-gray-500 " type="number" required />
        </div>
      </div>
      <button className="mt-5 w-full bg-orange-500 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-medium 
        hover:bg-orange-600
        focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 focus:bg-orange-600">
        Update profile
      </button>
    </div>
  )
}

export default EditProfile;