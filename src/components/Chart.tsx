import {LineChart} from '@mui/x-charts/LineChart';

const years = [
  new Date(1990, 0, 1),
  new Date(1991, 0, 1),
  new Date(1992, 0, 1),
  new Date(1993, 0, 1),
  new Date(1994, 0, 1),
  new Date(1995, 0, 1),
  new Date(1996, 0, 1),
  new Date(1997, 0, 1),
  new Date(1998, 0, 1),
  new Date(1999, 0, 1),
  new Date(2000, 0, 1),
  new Date(2001, 0, 1),
  new Date(2002, 0, 1),
  new Date(2003, 0, 1),
  new Date(2004, 0, 1),
  new Date(2005, 0, 1),
  new Date(2006, 0, 1),
  new Date(2007, 0, 1),
  new Date(2008, 0, 1),
  new Date(2009, 0, 1),
  new Date(2010, 0, 1),
  new Date(2011, 0, 1),
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2018, 0, 1),
];

const FranceGDPperCapita = [
  28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645, 30341.807,
  31323.078, 32284.611, 33409.68, 33920.098, 34152.773, 34292.03, 35093.824,
  35495.465, 36166.16, 36845.684, 36761.793, 35534.926, 36086.727, 36691, 36571,
  36632, 36527, 36827, 37124, 37895, 38515.918,
];

const lineChartsParams = {
  series: [
    {
      label: 'French GDP per capita',
      data: FranceGDPperCapita,
      showMark: false,
    },
  ],
  width: 600,
  height: 400,
};

const yearFormater = (date: Date) => date.getFullYear().toString();
const currencyFormatter = (temp: number) => Math.floor(temp).toString() + ' °C';

export default function Chart() {
  return (
    <LineChart
      {...lineChartsParams}
      xAxis={[{data: years, scaleType: 'time', valueFormatter: yearFormater}]}
      series={lineChartsParams.series.map((s) => ({
        ...s,
        valueFormatter: currencyFormatter,
      }))}
    />
  );
}