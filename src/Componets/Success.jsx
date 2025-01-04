import React from "react";
import CountUp, { useCountUp } from "react-countup";

const Success = () => {

  return (
    <div className="flex-col flex justify-center mb-16 md:flex-wrap">
        <h3 className="text-4xl font-bold p-5 text-center m-5">Our Achievement</h3>
        <div className="mx-auto">
        <div className="stats shadow  stats-vertical lg:stats-horizontal md:mx-auto ">
        <div className="stat place-items-center">
          <div className="stat-title">User</div>
          <div className="stat-value"><CountUp start={0} end={31} duration={2} suffix="k" separator=","></CountUp></div>
          <div className="stat-desc">From December 1st to January 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Lesson</div>
          <div className="stat-value text-secondary"><CountUp start={1000} end={4100} duration={5} separator=","></CountUp></div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Tutorial</div>
          <div className="stat-value"><CountUp start={600} end={2000} duration={5} separator=","></CountUp></div>
          <div className="stat-desc">↗︎ 90 (14%)</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Vocabullary</div>
          <div className="stat-value"><CountUp start={1000} end={10000} duration={5} separator=","></CountUp></div>
          <div className="stat-desc">↗︎ 90 (14%)</div>
        </div>
        
      </div>
        </div>
    </div>
  );
};

export default Success;
