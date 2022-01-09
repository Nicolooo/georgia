import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Title from '../../../comp/SEO/title'
const Single = () => {
    
    const router = useRouter()
    const { title } = router.query
    return (
        <div>
            <Title title={title}/>

        </div>
    )
}

export default Single
