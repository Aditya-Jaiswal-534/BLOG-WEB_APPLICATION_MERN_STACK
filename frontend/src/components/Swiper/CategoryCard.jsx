import React from 'react'




const CategoryCard = (data) => {
    const { name, bgcolor, path } = data
    return (
        <div className='categorycard bg-slate-700 text-white flex justify-center p-2 mb-10 mt-5 rounded-3xl  w-64 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:duration-500'>
        {name}
    </div>
    )
}

export default CategoryCard