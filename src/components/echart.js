import React, { useEffect, useRef } from "react"

import * as echarts from 'echarts';

const Echart = (props) => {
  const { wrapperCss, option } = props;

  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);
    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    }
  });

  return (
     <div css={wrapperCss} ref={chartRef}/>
  )
}

export default Echart;