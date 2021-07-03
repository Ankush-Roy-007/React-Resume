import { useState, useEffect } from "react";
import React from "react";
import Typewriter from "typewriter-effect";
function Homepage() {
  // const name = "ANKUSH";
  // const [state, setstate] = useState("ANK");
  // const [countlen, setcountlen] = useState(3);
  // const lem = name.length;
  // const [count, setcount] = useState(1);

  // function hh(){
  //     setInterval(()=>{
  //         if(count===1&&countlen>2){
  //         setcountlen(countlen+1)
  //         console.log("11=",countlen," lem ",lem);
  //         if(countlen===lem){
  //             setcount(0);
  //         }
  //     }
  //     else if(count===0&&countlen<=lem){
  //         setcountlen(countlen-1)
  //         console.log("0=",countlen);
  //         if(countlen===3){
  //             setcount(1);
  //         }
  //     }},1000)

  // }

  // useEffect(() => {
  //   setstate(name.substring(0, countlen));
  // }, [countlen]);
  // useEffect(()=>{
  //   setInterval(()=>{setcountlen({value:countlen.value+1});
  //   console.log(countlen.value);},1000)
  // },[])
  // const useInterval = (callback, delay) => {
  //   const savedCallback = React.useRef();

  //   React.useEffect(() => {
  //     savedCallback.current = callback;
  //   }, [callback]);

  //   React.useEffect(() => {
  //     function tick() {
  //       savedCallback.current();
  //     }
  //     if (delay !== null) {
  //       let id = setInterval(tick, delay);
  //       return () => clearInterval(id);
  //     }
  //   }, [delay]);
  // };
  // useInterval(() => {
  //   if (count === 1 && countlen > 2) {
  //     setcountlen(countlen + 1);
  //     console.log("11=", countlen, " lem ", lem);
  //     if (countlen === lem) {
  //       setcount(0);
  //     }
  //   } else if (count === 0 && countlen <= lem+1) {
  //     setcountlen(countlen - 1);
  //     console.log("0=", countlen);
  //     if (countlen ===4 ) {
  //       setcount(1);
  //     }
  //   }
  // },200);
  return (
    <div className="background_home_image">
      <div className="container home_name_container">
        <p className="hOME_name">
          <Typewriter
        options={{
            strings: ['ANKUSH', 'ROY','ANKUSH ROY'],
            autoStart: true,
            loop: true,
            deleteSpeed:100,
          }}
          onInit={(typewriter) => {
            typewriter
             // .typeString("ANKUSH ROY")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(1500)
              .deleteChars(3)
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
          />
        </p>
        <p className="hOME_designation">
          FULL STACK WEB DEVELOPER
        </p>
      </div>
    </div>
  );
}

export default Homepage;
