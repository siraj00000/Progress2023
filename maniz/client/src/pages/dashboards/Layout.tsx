import { Outlet } from 'react-router-dom';

type Props = {}

const DashboardLayout = (props: Props) => {
  return (
    <div><Outlet /></div>
  )
}

export default DashboardLayout