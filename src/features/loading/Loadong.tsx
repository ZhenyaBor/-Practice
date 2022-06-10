/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Loadong = () => {
  return (
    <div
      css={css`
        padding: 10px;
        border-radius: 10px;
        font-size: 25px;
        width: 100%;
        height: 100vh;
        color: white;
        font-size: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
     <div
           css={css`
           width: 8vmax;
           height: 8vmax;
           border-right: 4px solid #ffffff;
           border-radius: 100%;
           animation: spinRight 800ms linear infinite;
           
           &:before, &:after {
             content: '';
             width: 6vmax;
             height: 6vmax;
             display: block;
             position: absolute;
             top: calc(50% - 3vmax);
             left: calc(50% - 3vmax);
             border-left: 3px solid #ffffff;
             border-radius: 100%;
             animation: spinLeft 800ms linear infinite;
           }
           
           &:after {
             width: 4vmax;
             height: 4vmax;
             top: calc(50% - 2vmax);
             left: calc(50% - 2vmax);
             border: 0;
             border-right: 2px solid #ffffff;
             animation: none;
           }
         }
         
         @keyframes spinLeft {
           from {transform:rotate(0deg);}
           to {transform:rotate(720deg);}
         }
         
         @keyframes spinRight {
           from {transform:rotate(360deg);}
           to {transform:rotate(0deg);}
         }
         `}
     ></div>
    </div>
  );
};

export default Loadong;
