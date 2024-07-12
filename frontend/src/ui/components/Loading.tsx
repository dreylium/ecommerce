const Loading: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <div
      className={`${loading && 'hidden'} fixed inset-0 z-[100] grid place-items-center bg-white py-36 text-center`}
    >
      <h1 className="animate-pulse text-6xl">Loading...</h1>
    </div>
  );
};

export default Loading;
