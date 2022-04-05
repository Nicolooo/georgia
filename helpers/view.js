// import usestate and useeffect
import React, { useState, useEffect } from 'react';
export default function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)
    let observer = null
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
      )
      observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      return () => { observer.disconnect() }
    }, [])
  
    return isIntersecting
  }