import React from 'react'




const CategoryCard = (data) => {
    const { name, bgcolor, path } = data
    return (
        <div className='categorycard'>
        <p style={{
            fontSize: "18px"
        }} className='h-16 bg-black text-white
        '>
            {name}
         
        </p>
    </div>
    )
}

export default CategoryCard