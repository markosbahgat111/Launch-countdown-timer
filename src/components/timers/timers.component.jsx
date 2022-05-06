import React, { useLayoutEffect, useState } from 'react';


const Timers = () =>
{
    const [timers, setTimers] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const countDownDate = new Date("May 15, 2022 16:37:52").getTime();
    const now = new Date().getTime();
    const timeLeft = countDownDate - now;
    const timersStyle = 'desktop:w-[120px] desktop:h-[120px] w-[auto] h-[auto] p-3 bg-slate-500 m-auto flex items-center justify-center desktop:text-6xl text-2xl rounded-md mb-5 bg-gradient-to-t from-[#36333f] to-[#343650] drop-shadow-[0_8px_1px_rgba(0,0,0,0.5)] text-[#fb6087]';
    useLayoutEffect(() =>
    {
        const interval = setInterval(() =>
        {
            
            const days = ('0' + Math.floor(timeLeft / (1000 * 60 * 60 * 24))).slice(-2);
            const hours = ('0' + Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
            const minutes = ('0' + Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
            const seconds = ('0' + Math.floor((timeLeft % (1000 * 60)) / 1000)).slice(-2);
            setTimers({days, hours, minutes, seconds})
        }, 1000)
        return () =>
        {
            clearInterval(interval);
        }
    }, [timeLeft])
    return ( 
        <div className="desktop:w-[auto] w-11/12 flex flex-row items-center desktop:px-[auto] px-2 justify-center text-gray-400 gap-5 desktop:gap-10 mb-40">
            <div className='desktop:w-auto w-3/12'>
                <div className={timersStyle}>
                    {timers.days}
                </div>
                <span className='desktop:tracking-widest'>DAYS</span>
            </div>
            <div className='desktop:w-auto w-3/12'>
                <div className={timersStyle}>
                    {timers.hours}
                </div>
                <span className='desktop:tracking-widest'>HOURS</span>
            </div>
            <div className='desktop:w-auto w-3/12'>
                <div className={timersStyle}>
                    {timers.minutes}
                </div>
                <span className='desktop:tracking-widest'>MINUTES</span>
            </div>
            <div className='desktop:w-auto w-3/12'>
                <div className={timersStyle}>
                    {timers.seconds}
                </div>
                <span className='desktop:tracking-widest'>SECONDS</span>
            </div>
        </div>
     );
}
 
export default Timers;
