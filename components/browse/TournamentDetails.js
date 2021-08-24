import React from 'react'
import Overview from '../organize/Manage/Overview'

function TournamentDetails({data}) {
    console.log(data)
    return (
        <div className='max-w-6xl mx-auto py-20'>
            <Overview data={data}/>
        </div>
    )
}

export default TournamentDetails
