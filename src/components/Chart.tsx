import {LineChart} from '@mui/x-charts/LineChart';
import {IWeatherInfo} from "../types/weatherTypes.ts";

const dateFormatter = (date: Date) => date.getHours().toString();
const tempFormatter = (temp: number) => Math.floor(temp).toString() + ' °C';

interface Props {
  data: IWeatherInfo[]
}

export default function Chart({data}:Props) {
  const dates:Date[] = data.map(x => new Date(x.dt_txt));
  const temp:any[] = data.map(x => x.main.temp);

  const lineChartsParams = {
    series: [
      {
        label: 'Temperature',
        data: temp,
        showMark: false,
      },
    ],
    width: 370,
    height: 300,
  };

  return (
    <LineChart
      {...lineChartsParams}
      xAxis={[{data: dates, scaleType: 'time', valueFormatter: dateFormatter}]}
      series={lineChartsParams.series.map((s) => ({
        ...s,
        valueFormatter: tempFormatter,
      }))}
    />
  );
}