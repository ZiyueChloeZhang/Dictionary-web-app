import React, { FC } from 'react'

const NotFound: FC = () => {
    return (
        <div className='flex flex-col m-auto items-center text-center gap-6'>
            <div className='text-[64px] leading-[75px]'>😕</div>
            <div className='text-md font-bold'>No Definitions Found</div>
            <div className='text-sm font-light'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</div>
        </div>
    )
}

export default NotFound;