import {IWeatherInfo} from "../types/weatherTypes.ts";
import TransitionsModal from "./UI/Modal.tsx";
import Chart from './Chart.tsx';

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
        <Chart/>
      </>
    </TransitionsModal>
  )
}