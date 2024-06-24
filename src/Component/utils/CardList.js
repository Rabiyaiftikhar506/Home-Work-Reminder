import React from 'react';


export default function CardList(props) {
  return (
    <div className='w-full'>
      <div className="m-3 mb-5 p-3 rounded-lg bg-slate-100 shadow">
        <div className="flex justify-between items-center bg-white rounded p-2 shadow">
          <div className="w-full flex">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
              <p className='ml-2 mr-5'>{props.deadline}</p>
            </div>
            <div className="flex items-center border-l-2 pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className='ml-2'>{props.time}</p>
            </div>
          </div>
          <div className="">
            {props.button}
          </div>
        </div>
        <div className="ml-2">
          <h1 className='text-2xl font-semibold capitalize mt-3 mb-2'>{props.label}</h1>
          <p className='text-lg text-slate-500'>{props.description}</p>
        </div>
      </div>
    </div>

  )
}
