import Latex from "react-latex-next"
import { STD_LaTeX, X_LaTeX } from "../constants/latex"


const Table = ({ data, tableLayout: [ { tableLayout } ] }) => {
    const forTHead = Object.keys(data)
    const { xData, latexFormula, display } = data
    const readyTBody = []

    console.log(data)
    const mean = forTHead.splice(forTHead.indexOf("mean"), 1)
    //merger array
    const tdataArray = []

    //loop through every key in data object check if it is an array, it so push to a merger array
    Object.keys(data).forEach(d => {
      if(Array.isArray(data[d])){
        tdataArray.push(data[d])
      }
    })

    //merge data into its corresponding row
    for(let i=0; i<xData.length; i++){
      let tempArr = []
      for(let j=0; j< tdataArray.length; j++){
        tempArr.push(tdataArray[j][i])
      }
      readyTBody.push(tempArr)
      tempArr = []
    }
  return (
    <>
    <div id="input_value_kono_hehe mb-2">
      <h2 className="font-medium">Input</h2>
      <div className="flex flex-wrap gap-2">
          [ {xData.map((d, idx) => <span key={idx}>{d}</span>)} ]
      </div>
    </div>
    <div>
      <Latex>{latexFormula}</Latex>
      <div className="result md:w-1/2 w-full">
          {Object.keys(display).map(prop => {
            return <div key={prop} className="flex items-center justify-between py-2 px-1 border-b-[1.5px] border-slate-300">
                      <h1>{prop}</h1>
                      <p>{display[prop]}</p>
                  </div>
          })}
      </div>
    </div>
      <div className="mt-8 mb-8">
        <h1 className="text-center">Table</h1>
          <div className="rounded-sm border my-1 border-slate-200 overflow-clip">
            <table className="overflow-x-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-sm bg-main text-white">
                  <tr>
                    <th scope="col" className="px-5 py-2 text-center">#</th>
                      {tableLayout.map((td, idx) => {
                          return <th scope="col" className="px-5 text-center py-2" key={idx}><Latex>{td}</Latex></th>
                      })}
                  </tr>
              </thead>
              <tbody>
                    {readyTBody.map((row, idx) => {
                      return (
                          <tr className="bg-white border-b border-slate-300" key={idx}>
                              <td className="px-5 text-center py-3 font-medium text-gray-500 bg-slate-50">{idx + 1}</td>
                              {row.map((r, idx) => {
                                  return <td className="px-5 py-3 text-center text-gray-600 font-medium bg-slate-50" key={idx}>{r}</td>
                              })}
                          </tr>
                      );
                    })}
              </tbody>
            </table>
          </div>
      </div>
    </>
  )
}

export default Table
