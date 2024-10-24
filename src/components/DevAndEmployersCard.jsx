import React from 'react'

const DevAndEmployersCard = ({children, bg='bg-gray-100'}) => {
    return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
    )
}

export default DevAndEmployersCard