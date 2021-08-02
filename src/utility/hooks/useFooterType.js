// ** React Imports
import { useState } from 'react'


export const useFooterType = () => {
  // ** State
  const [footerType, setFooterType] = useState(() => {
    try {
      return 'static'
    } catch (error) {
      // ** If error also initialValue
      console.log(error)
      return 'static'
    }
  })

  // ** Return a wrapped version of useState's setter function
  const setValue = value => {
    try {
      // ** Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(footerType) : value

      // ** Set state
      setFooterType(valueToStore)
    } catch (error) {
      // ** A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  return [footerType, setValue]
}