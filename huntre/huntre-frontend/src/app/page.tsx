import React from 'react';
import SetBackground from './components/setBackgroundComponent';
import mainBg from './bgImg.jpg';

export default function Home() {
  return (
    <>
      <h1>Hi! And welcome to the Huntre Website!!!!!</h1>
      <SetBackground imgUrl={mainBg.toString()} />  {/* react component won't work without converting mainBg to string, maybe it's because it's a class type?  */}

    </>
  );
}
