
const Product = () => {
  return (
    <div className="w-[310px] flex flex-col justify-between h-[320px] bg-[#F2F5F7]">
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-[200px] h-[200px]"><img className="w-full h-full object-cover" src="./img/others/test-product.png" alt="" /></div>
      </div>
      <button className="h-[50px] w-full rounded-none rounded-b-[4px]">Название товара</button>
    </div>
  )
}

export default Product