const Button = (props) => {
  const { btnLabel, ...otherProps } = props

  return (
    <>
      <button className="items-center bg-[#0A66C2] border-none rounded box-border text-white cursor-pointer inline-flex text-base font-semibold justify-center leading-5 max-w-md min-h-[40px] min-w-0 overflow-hidden p-0 pl-5 pr-5 text-center touch-manipulation select-none align-middle hover:bg-[#16437E] active:bg-[#09223b]" {...otherProps}>{btnLabel}</button>
    </>
  )
}

export default Button
