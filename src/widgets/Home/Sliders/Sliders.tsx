import SliderMain from "./Slider-Main"
import SliderMedium from "./Slider-Medium"
import SlidersTwoSmall from "./Slider-two-small"

const Sliders = () => {
  return (
    <div className="flex gap-[20px] bg-gray py-[20px]">
      <SliderMain />
      <SliderMedium />
      <SlidersTwoSmall />
    </div>
  )
}

export default Sliders