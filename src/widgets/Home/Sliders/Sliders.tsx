import SliderMain from "./Slider-Main"
import SliderMedium from "./Slider-Medium"
import SlidersTwoSmall from "./Slider-two-small"
import style from '../../../app/Css/Sliders/sliders.module.css'

const Sliders = () => {
  return (
    <div className={style.sliders_main}>
      <SliderMain />
      <SliderMedium />
      <SlidersTwoSmall />
    </div>
  )
}

export default Sliders