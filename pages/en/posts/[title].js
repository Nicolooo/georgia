import React from 'react'
import { useRouter } from 'next/dist/client/router'
const Single = () => {
    const router = useRouter()
    const { title } = router.query
    return (
        <div>
            Wepo,{title}
        </div>
    )
}

export default Single
