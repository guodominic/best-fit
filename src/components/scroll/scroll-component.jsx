import React from 'react'

const ScrollComponent = ({ children }) => {
    return (
        <div style={{ overflowY: 'scroll', border: '0px solid white' }}>
            {children}
        </div>

    )
}

export default ScrollComponent