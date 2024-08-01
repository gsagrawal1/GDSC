import React from 'react'
import { format } from 'date-fns'
import { useContext } from 'react'
import DataContext from './Context/DataContext';
const LastFooter = () => {
    const {width} = useContext(DataContext)
    const currentYear = format(new Date(), 'yyyy');
    const nextYear = parseInt(currentYear) + 1;
  return (
    <div className={width > 992 ? ('LastFooter w-full'): ('LastFooter w-small')}>
      <span>Copyright &copy; {currentYear}-{nextYear}. All rights reserved </span>
    </div>
  )
}

export default LastFooter
