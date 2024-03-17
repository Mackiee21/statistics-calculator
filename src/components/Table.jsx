

const Table = ({ data, tableLayout: [ { tableLayout } ] }) => {
    const forTHead = Object.keys(data)
    const { xData, sampleStdDev } = data
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
    <h1 className="">Mean: {data[mean]}</h1>
      <div className="rounded-md bg-green-300 border border-zinc-700 overflow-clip">
        <table className="overflow-x-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm bg-main text-white dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">#</th>
                  {tableLayout.map(td => {
                      return <th scope="col" className="px-6 py-3" key={td}>{td}</th>
                  })}
              </tr>
          </thead>
          <tbody>
                {readyTBody.map((row, idx) => {
                  return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={idx}>
                          <td className="px-6 py-4 font-semibold text-black bg-slate-100">{idx + 1}</td>
                          {row.map((r, idx) => {
                              return <td className="px-6 py-4 text-black font-semibold bg-slate-100" key={idx}>{r}</td>
                          })}
                      </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
      <h2>Sample Standard Deviaiton: {sampleStdDev}</h2>
    </>
  )
}

export default Table
