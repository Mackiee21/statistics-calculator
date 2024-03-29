import FormulaHeader from "./FormulaHeader"
import { formulas, typeOfData, letterRegEx } from "../constants/index"
import { useRef, useState } from "react"
import Table from "./Table"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect } from "react"

const Main = () => {
    const [selectedFormula, setSelectedFormula] = useState("ssd") //initialize this one to the first choices sa formulas to make it dynamic
    const [result, setResult] = useState({});
    const [invalidData, setInvalidData] = useState(null)
    const [textareaVal, setTextareaVal] = useState('')
    const dataRef = useRef(null);

    useGSAP(() => {
        const animation = gsap.from(".word", {
            opacity: 0,
            stagger: 0.3,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        })
        return () => animation.kill()
    }, [])

    useEffect(() => {
        handleSubmitData()
    }, [selectedFormula])

    
    const handleChange = (e) => {
        let emptySpots = 0
        const arrVals = e.target.value.split("\n")
        if(!!e.target.value.match(letterRegEx)){
            setInvalidData("Only numbers are allowed")
        }
        else{
            if(arrVals.length >= 2){
                console.log('herer')
                arrVals.forEach(arr => {
                    if(arr.length === 0){
                        emptySpots++
                    }
                })
                if(emptySpots <= 1){
                    setTextareaVal(e.target.value)
                    setInvalidData(null)
                }
            }
            if(arrVals.length === 1){
                console.log('meow')
                setTextareaVal(e.target.value)
                setInvalidData(null) 
            }
        }
    
    }

    const handleSubmitData = () => {
        if(dataRef.current && dataRef.current.value.trim()){
            const data = dataRef.current.value.trim().split("\n")
            if(data.length === 1){
                setInvalidData("Data must consist of at least 2 or more values. Current value ( 1 )")
                return 
            }
            const [{ formula }] = formulas.filter(f => f.short.toLocaleLowerCase() === selectedFormula.toLocaleLowerCase())
           setResult(formula(data))
        }else{
            setResult({})
        }
    }
  return (
    <div className="md:mt-7 mt-2 flex md:flex-row flex-col md:portrait:flex-col gap-10 md:w-[90%] mx-auto md:p-0 p-3">
        <div className="flex-1">
            <div className="flex md:flex-row flex-col md:items-center md:gap-10 gap-3">
                <FormulaHeader options={formulas} title={"Formula"} setSelectedFormula={setSelectedFormula} handleSubmitData={handleSubmitData} />
                <FormulaHeader options={typeOfData} title={"Data"} />
            </div>
            <div className="mt-5 flex-1 items-start flex flex-col gap-0.5">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-teal-900 font-medium md:text-base text-sm">Value</h1>
                    <span className="text-sm font-medium me-2">No. {textareaVal.split("\n")[0] ? textareaVal.split("\n")[textareaVal.split("\n").length - 1].trim() ?  textareaVal.split("\n").length :  textareaVal.split("\n").length - 1 : 0}</span>
                </div>
                <textarea placeholder="Enter or paste your data here, press Enter key on every data value"
                    className={`w-full font-medium border-[1.5px] overflow-y-auto border-slate-300 ${invalidData ? "border-red-600 focus:border-red-600": "focus:border-blue-600"}`}
                    rows={6}
                    data-gramm="false"
                    data-gramm_editor="false"
                    data-enable-grammarly="false"
                    onChange={handleChange}
                    ref={dataRef}
                    style={{resize: "none"}}
                    value={textareaVal}>
                </textarea>
                {invalidData && <span className="text-sm text-red-600 font-medium">{invalidData}</span>}
                <button onClick={handleSubmitData} className="border-0 bg-main shadow-sm shadow-main text-white font-medium text-sm py-2 px-5 rounded mt-4">Submit</button>
            </div>
        </div>
        <div className="self-stretch bg-slate-300 w-[1px] portrait:hidden">
        </div>
        <div className={`flex-1`}>
            {!!Object.keys(result).length ? <>
                <Table data={result} tableLayout={formulas.filter(f => f.short === selectedFormula)} />
            </> : <div className="h-full flex items-center justify-center">
                <ul id="result-anim" className="md:text-base font-medium text-sm text-main">
                   {"Result will be displayed here....".split(" ").map((word, idx) => {
                    return <li className="word opacity-1 inline-block ms-1" key={idx}>{word}</li>
                   })}
                </ul>
            </div>}
        </div>
    </div>
  )
}

export default Main
