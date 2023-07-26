import React, { useEffect } from 'react'

export const AsyncEffect = () => {
    // use effect with async code
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('after 2 sec show modal to login');
        }, 2000)
        return () => {
            console.log('clearing timeout');
            clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // calling some api
            console.log('interval running ');
        }, 1000);

        // cleanup activities inside useEffect
        // clear the interval on component removal
        return () => {
            console.log('clearing timer');
            clearInterval(intervalId);
        }
    }, []);

  return (
    <div>AsyncEffect</div>
  )
}
