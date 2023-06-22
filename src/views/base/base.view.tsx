import { Outlet } from 'react-router-dom';
import NavigationBar from '../../common/components/navigation-bar/navigation-bar.component';

export default function Base() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
