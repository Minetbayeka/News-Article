import React from 'react'

export function Button({ title, lg, ...props }) {
  return (
    <div>
      <button
      className={`bg-[#cc3333] hover:bg-yellow-600 font-bold text-white ${
        lg ? "p-3 rounded-full" : "p-[0.25rem] "
      } text-sm`}
      {...props}
    >
      {title}
    </button>
    </div>
  )
}