const Button = (props) => {
  const { btnLabel, ...otherProps } = props

  return (
    <>
      <button className="items-center bg-clip-padding bg-[#0da839] border-none rounded box-border shadow-[rgba(0,0,0,0.02)_0_1px_3px_0] text-white cursor-pointer inline-flex text-base font-semibold justify-center leading-5 m-0 min-h-[3rem] px-5 py-1 relative no-underline transition-all transition-[250ms] select-none touch-manipulation align-baseline hover:bg-[#0be048] hover:text-black hover:translate-y-[-1px] active:bg-[#158535] active:text-white active:translate-y-0" {...otherProps}>{btnLabel}</button>
    </>
  )
}

export default Button