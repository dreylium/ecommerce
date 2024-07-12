import { fetchRemoveAccount } from '@lib/fetch';

const DeleteAccount = () => {
  const handleRemoveAccount = (e: React.FormEvent) => {
    e.preventDefault();

    const { password } = e.target as HTMLFormElement;

    if (confirm('Are you sure you want to remove your account?') || password !== '') {
      fetchRemoveAccount(password.value);
    }
  };

  return (
    <form onSubmit={handleRemoveAccount}>
      <h2 className="mb-8 text-xl text-clr-Secondary2 max-md:text-center">Remove Your Account?</h2>
      <label htmlFor="password">
        <span className="block">Password</span>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          className="mb-4 bg-clr-Secondary p-4"
        />
      </label>
      <button
        type="submit"
        className="block w-full rounded bg-clr-ButtonRed py-3 font-medium text-white md:max-w-sm"
      >
        Remove Account
      </button>
    </form>
  );
};

export default DeleteAccount;
