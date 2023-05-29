import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from "react-bootstrap";
import { Chart} from "react-google-charts"

const GoogleCeoChart = () => {
  const data = [
    ["City", "City","확진자", "사망자"],
    ["KR-11", "서울", 47695, 507],
    ["KR-26", "부산", 6034, 124],
    ["KR-27", "대구", 10517, 222],
    ["KR-28", "인천", 6553, 61],
    ["KR-29", "광주", 323, 23],
    ["KR-30", "대전", 1556, 27],
    ["KR-31", "울산", 265, 1],
    ["KR-50", "세종", 6546, 650],
    ["KR-41", "경기", 75, 1],
    ["KR-42", "강원", 87, 2],
    ["KR-43", "충북", 6645, 5],
    ["KR-44", "충남", 2312, 64],
    ["KR-45", "전북", 356, 24],
    ["KR-46", "전남", 32377, 12],
    ["KR-47", "경북", 545, 32],
    ["KR-48", "경남", 8766, 44],
    ["KR-49", "제주", 6543, 55],
  ]

  const options = {
    colorAxis: { minValue: 0, maxValue: 50000, colors: ['#ffffff', '#710000']},
    region: 'KR',
    resolution: 'provinces'
  }
  return (
    <Container>
      <Chart
        chartType={"GeoChart"}
        width={'100%'}
        height={'100%'}
        data={data}
        options={options}/>
    </Container>
  )
}

export default GoogleCeoChart