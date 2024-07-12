import { useUI } from '@lib/Context';
import { fetchLogout } from '@lib/fetch';
import { Link } from 'react-router-dom';

const ShowAccount: React.FC<{ currentRef: React.RefObject<HTMLDivElement> }> = ({ currentRef }) => {
  const { ui } = useUI();

  return (
    <div
      className={`absolute right-1 top-full -z-10 block rounded bg-white px-4 py-2 text-sm shadow-[0_0_2px_0_rgba(0,0,0,0.5)] duration-300 md:text-base ${ui.openAccount ? 'translate-y-[calc(0%+1rem)] opacity-100' : '-translate-y-full opacity-0'}`}
      ref={currentRef}
    >
      <div className="grid gap-y-1">
        <Link to="/account" className="p-4 hover:text-clr-ButtonRed hover:underline">
          My Account
        </Link>
        <button
          type="button"
          className="p-4 hover:text-clr-ButtonRed hover:underline"
          onClick={fetchLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default ShowAccount;
