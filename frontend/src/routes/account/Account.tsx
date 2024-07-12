import { useState } from 'react';
import Profile from './Profile';
import RemoveAccount from './RemoveAccount';

const Account = () => {
  const [current, setCurrent] = useState('profile');

  return (
    <div className="layout-p py-20 leading-normal">
      <div className="mx-auto grid max-w-screen-2xl gap-10 md:grid-cols-[auto_1fr] lg:gap-24">
        <aside className="flex flex-col items-start [&_h2]:font-medium">
          <div>
            <h2 className="">Account</h2>
            <div className="grid gap-2 py-4 ps-5 lg:ps-9 [&>button]:text-start">
              <button
                type="button"
                onClick={() => setCurrent('profile')}
                className={current === 'profile' ? 'text-clr-ButtonRed' : 'text-gray-500'}
              >
                Profile
              </button>
              <button
                type="button"
                onClick={() => setCurrent('removeAccount')}
                className={current === 'removeAccount' ? 'text-clr-ButtonRed' : 'text-gray-500'}
              >
                Remove Account
              </button>
            </div>
          </div>
        </aside>
        {/* Content */}
        <div className="p-6 shadow-[0_0_5px_0_rgba(0,0,0,0.15)] sm:px-10 sm:py-10 lg:px-20">
          {current === 'profile' && <Profile />}
          {current === 'removeAccount' && <RemoveAccount />}
        </div>
      </div>
    </div>
  );
};
export default Account;
