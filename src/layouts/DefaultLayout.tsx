import { Outlet } from 'react-router-dom';
import Header from './Header';

function DefaultLayout() {
  return (
    <main className="w-full h-screen">
      <Header />
      <div className="flex justify-start pt-12 w-full">
        <div className="relative w-[146px]">
          <div className="fixed font-bold z-[-1] left-0 top-0 rotate-90 -translate-x-4 -translate-y-[61%] tracking-[3.2rem] liner-gradient text-[200px] font-Ubuntu">
            TAIWAN
          </div>
        </div>
        <div className="pt-2 w-full h-full">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default DefaultLayout;
