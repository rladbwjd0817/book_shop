import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



// #endregion
const TestBarChart = ({chartData}) => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={chartData}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      {/* 배경 격자 */}
      <CartesianGrid strokeDasharray="3 3" />
      {/* X축 레이블 , Y축 레이블 */}
      {/* dataKey='name' : x축으로 사용되는 key값 */}
      <XAxis dataKey="day" angle='-49'/> 
      <YAxis width="auto" />
      {/* 마우스 올렸을 때 데이터보여주는 것 */}
      <Tooltip />
      {/* 범례 */}
      <Legend />
      {/* 막대그래프 */}
      <Bar dataKey="sale" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
    </BarChart>
  )
};

export default TestBarChart;