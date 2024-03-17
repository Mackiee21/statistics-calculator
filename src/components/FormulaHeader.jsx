
const FormulaHeader = ({options, title, setSelectedFormula, handleSubmitData}) => {
  const handleChange = (e) => {
    setSelectedFormula(e.target.value)
  }
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-medium text-teal-900">{title}</h1>
      <select onChange={handleChange} className="self-start py-1.5 border-[1.5px] border-slate-300 cursor-pointer">
         {options.map(option => {
          if(typeof option === "object"){
            return <option key={option.type} value={option.short}>{option.type}</option>
          }else{
            return <option key={option} value={option}>{option}</option>
          }
         })}
      </select>
    </div>
  )
}

export default FormulaHeader
