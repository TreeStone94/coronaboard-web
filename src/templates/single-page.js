import React from 'react';
import { Slide } from '../components/Slide';

const SinglePage = ({pageContext}) => {
  const { dataSource } = pageContext;
  const { globalStats, countryByCc } = dataSource;

  console.log(globalStats)
  console.log(countryByCc)
  return (
    <div>
      <h1>코로나보드</h1>
      <p>createPage로 만들엊진 페이지 입니다.</p>
      <Slide title={'국가별 현황'}>국가별 현황을 보여줍니다.</Slide>
    </div>
  )
}

export default SinglePage