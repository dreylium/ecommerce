import Picture from '@ui/components/Picture';
import { useState, useEffect } from 'react';
import { convertMilliseconds } from '@lib/func';
import { dataTime } from '@lib/data';

const Banner = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  });

  useEffect(() => {
    setInterval(() => {
      setTimeLeft(convertMilliseconds(dataTime.bannerSale));
    }, 1000);
  }, []);

  return (
    <div className="mt-[50px] bg-black px-6 pb-8">
      <div className="mx-auto grid max-w-screen-2xl items-center gap-x-[27px] lg:grid-cols-[1fr_auto] lg:px-14">
        <div className="gap-y-8 py-[70px] text-white">
          <h2 className="font-semibold leading-[1.25rem] tracking-[-0.02em] text-clr-ButtonGreen">
            Categories
          </h2>
          <h3 className="mt-[30px] font-heading-semibold text-24 leading-[1.25] tracking-[0.04em] xl:text-48">
            Enhance Your Music Experience
          </h3>
          <div className="mt-8 flex flex-wrap gap-4 lg:gap-6">
            {Object.entries(timeLeft).map(([key, value]) => (
              <p
                key={key}
                className="grid h-[62px] w-[62px] place-content-center rounded-full bg-white text-center text-[11px] text-black"
              >
                <span className="font-semibold text-base">{value < 10 ? `0${value}` : value}</span>
                {key}
              </p>
            ))}
          </div>
          <a href="" className="mt-10 rounded bg-clr-ButtonRed px-12 py-5 font-medium !hidden">
            Buy Now!
          </a>
        </div>
        <Picture
          src="products/boombox.png"
          alt="boombox"
          className="grid h-full place-content-center rounded-full bg-[radial-gradient(rgb(217,217,217,0.3)_30%,transparent_80%)]"
        />
      </div>
    </div>
  );
};

export default Banner;
