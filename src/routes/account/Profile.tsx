import { useClient } from '@lib/Context';
import { useState } from 'react';
import { fetchSetProfile, fetchSetPassword } from '@lib/fetch';

const Profile = () => {
  const {
    client: { username, email },
  } = useClient();
  const [isProfileChanged, setProfileChanged] = useState(false);
  const [isPasswordChanged, setPasswordChanged] = useState(false);

  const handleSubmitProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    const { username, email } = e.target as HTMLFormElement;
    const result = await fetchSetProfile(username.value, email.value);
    if (result) setProfileChanged(false);
  };
  const handleSubmitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const { password, newPassword, reNewPassword } = e.target as HTMLFormElement;
    if (newPassword.value === reNewPassword.value) {
      const result = await fetchSetPassword(password.value, newPassword.value);
      if (result === 'success') {
        setPasswordChanged(false);
        alert('Successfully updated password');
        password.value = '';
        newPassword.value = '';
        reNewPassword.value = '';
      } else alert(result);
    } else {
      alert('Passwords do not match');
    }
  };
  const handleProfileChange = () => setProfileChanged(true);
  const handlePasswordChange = () => setPasswordChanged(true);

  return (
    <>
      <h2 className="mb-4 text-xl text-clr-Secondary2">Edit Your Profile</h2>
      {/* Form */}
      <div className="grid gap-4 [&_input]:bg-clr-Secondary [&_input]:p-[12px_1rem]">
        <form
          method="post"
          onSubmit={handleSubmitProfile}
          className="mb-4 grid gap-4 md:grid-cols-2"
        >
          <label htmlFor="username">
            <span className="mb-2 block">Username</span>
            <input
              className="w-full"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              defaultValue={username}
              onChange={handleProfileChange}
              required
            />
          </label>
          <label htmlFor="email" className="block w-full">
            <span className="mb-2 block">Email</span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              defaultValue={email}
              onChange={handleProfileChange}
              required
            />
          </label>
          <button
            className="ml-auto w-full rounded bg-clr-ButtonRed py-4 text-white disabled:bg-gray-400 md:col-start-2"
            type="submit"
            disabled={!isProfileChanged}
          >
            Update Profile
          </button>
        </form>
        <form method="post" onSubmit={handleSubmitPassword} className="grid gap-4">
          <label htmlFor="password">
            <span className="mb-2 block">Password Changes</span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Current Password"
              onChange={handlePasswordChange}
            />
          </label>
          <label htmlFor="newPassword">
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              placeholder="New Password"
              onChange={handlePasswordChange}
            />
          </label>
          <label htmlFor="reNewPassword">
            <input
              type="password"
              name="reNewPassword"
              id="reNewPassword"
              placeholder="Confirm New Password"
              onChange={handlePasswordChange}
            />
          </label>
          <button
            className="ml-auto w-full rounded bg-clr-ButtonRed py-4 text-white disabled:bg-gray-400 md:w-[calc(50%-1rem)]"
            type="submit"
            disabled={!isPasswordChanged}
          >
            Update Password
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
