import {IWeatherInfo} from "../types/weatherTypes.ts";
import TransitionsModal from "./UI/Modal.tsx";
import Chart from './Chart.tsx';
import {fetchIcon} from "../utils/fetchIcons.ts";

interface ModalProps {
  data: IWeatherInfo[]
  visible: boolean,
  setVisible: (value: boolean) => void,
}

export default function Details({data, visible, setVisible}: ModalProps) {
  return (
    <TransitionsModal visible={visible} setVisible={setVisible}>
      <>
        <p>Details</p>
        <Chart data={data}/>
        <div
          className="px-[54px] items-center flex justify-between absolute bottom-5 left-0 right-0 width-[300px] ml-auto mr-auto">
          {data.map(x => (
            <img key={x.dt} className="w-[24px]" src={fetchIcon(x.weather[0].main, parseInt(x.dt_txt.split(' ')[1].slice(0, 2)))}
                 alt={x.weather[0].description}/>
          ))}
        </div>
      </>
    </TransitionsModal>
  )
}