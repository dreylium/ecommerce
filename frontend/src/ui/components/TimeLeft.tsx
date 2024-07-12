import { dataTime } from '@lib/data';
import { convertMilliseconds } from '@lib/func';
import { useEffect, useState } from 'react';

const TimeLeft = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  });

  useEffect(() => {
    setInterval(() => {
      setTimeLeft(convertMilliseconds(dataTime.flashSale));
    }, 1000);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-x-3 font-medium text-xs">
      {Object.entries(timeLeft).map(([key, value]) => (
        <p className="grid gap-y-1.5" key={key}>
          {key}
          <span className="flex gap-x-2 font-heading-bold text-24 tracking-[0.04em] lg:text-32">
            {value < 10 ? `0${value}` : value}
            {key !== 'Seconds' && <span className="text-clr-ButtonRed">:</span>}
          </span>
        </p>
      ))}
    </div>
  );
};

export default TimeLeft;
