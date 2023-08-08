import React, { useContext } from 'react'
import { EntertainmentContext } from './context/EnterTainmentProvider';
// import { EntertainmentContext } from '../../../AppV2';

export const Movies = () => {
    const { offering } = useContext(EntertainmentContext);
    return (
      <>
        <div>Movies</div>
        <br />
        <article style={{display: "flex", gap: '0.5rem'}}>
          {offering.map((el, i) => {
            return (
              <div key={i} style={{ border: "1px solid #ddd", padding: "1rem" }}>
                {el}
              </div>
            );
          })}
        </article>
      </>
    );
}
