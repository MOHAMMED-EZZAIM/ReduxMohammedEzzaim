import React from 'react'
import {useSelector} from 'react-redux'
function Page() {
    const data=useSelector((state)=>state.lina.value)
  return (
    <div>
      <h1>nom:{data.email}</h1>
    </div>
  )
}

export default Page
