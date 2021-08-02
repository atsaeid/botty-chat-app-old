import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import '@styles/base/pages/page-misc.scss'

const Error = () => {
  return (
    <div className='misc-wrapper'>
      <a className='brand-logo' href='/'>
        <h2 className='brand-text text-primary ml-1'>Botty</h2>
      </a>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <h2 className='mb-1'>Page Not Found</h2>
        </div>
      </div>
    </div>
  )
}
export default Error
