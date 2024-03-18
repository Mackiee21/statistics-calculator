//export  const formulas = ["Sample Standard Deviation", "Range", "Variance", "Population Variance", "Sample Variance", "Population Standard Deviation", "Standard Deviation"];
import { PVD_LaTeX, PV_LaTeX, STD_LaTeX, SV_LaTeX, X_LaTeX, X_X_LaTeX, X_X_SQR_LaTeX } from "./latex"
export const typeOfData = ["Ungrouped", "Grouped"]

export const formulas = [
    {
        type: "Sample Standard Deviation",
        short: "ssd",
        tableLayout: [X_LaTeX, X_X_LaTeX, X_X_SQR_LaTeX],
        formula(data){  
            const mean = parseFloat((Array.from(data).reduce((acc, val) => parseFloat((acc + parseFloat(val)).toFixed(2)), 0) / Array.from(data).length).toFixed(2))
            const deviation = Array.from(data).map(val => parseFloat((parseFloat(val) - parseFloat(mean)).toFixed(2)))
            const deviationSquared = deviation.map(dev => parseFloat((parseFloat(dev) ** 2).toFixed(2)))
            const sumOfDeviationSquared = deviationSquared.reduce((acc, val) => acc + val ,0)
            const sampleStdDev = parseFloat(Math.sqrt(sumOfDeviationSquared / (Array.from(data).length - 1)).toFixed(2))
            return {
                display: {
                    Mean: mean,
                    "Standard Deviation": sampleStdDev,
                    Count: data.length
                },
                xData: data,
                deviation,
                deviationSquared,
                sumOfDeviationSquared,
                latexFormula: STD_LaTeX
            }
        }
    },
    {
        type: "Sample Variance",
        short: 'sv',
        tableLayout: [X_LaTeX, X_X_LaTeX, X_X_SQR_LaTeX],
        formula(data){
            const mean = parseFloat((Array.from(data).reduce((acc, val) => parseFloat((acc + parseFloat(val)).toFixed(2)), 0) / Array.from(data).length).toFixed(2))
            const deviation = Array.from(data).map(val => parseFloat((parseFloat(val) - parseFloat(mean)).toFixed(2)))
            const deviationSquared = deviation.map(dev => parseFloat((parseFloat(dev) ** 2).toFixed(2)))
            const sumOfDeviationSquared = parseFloat((deviationSquared.reduce((acc, val) => acc + val ,0)).toFixed(2))
            const sampleStdDev = parseFloat((sumOfDeviationSquared / (Array.from(data).length - 1)).toFixed(2))
            console.log(sampleStdDev)
            return {
                display: {
                    Mean: mean,
                    "Sample Variance": sampleStdDev,
                    Count: data.length
                },
                xData: data,
                deviation,
                deviationSquared,
                sumOfDeviationSquared,
                latexFormula: SV_LaTeX,
            }
        }
    },
    {
        type: "Population Variance",
        short: "pv",
        tableLayout: [X_LaTeX, X_X_LaTeX, X_X_SQR_LaTeX],
        formula(data){
            const mean = parseFloat((Array.from(data).reduce((acc, val) => parseFloat((acc + parseFloat(val)).toFixed(2)), 0) / Array.from(data).length).toFixed(2))
            const deviation = Array.from(data).map(val => parseFloat((parseFloat(val) - parseFloat(mean)).toFixed(2)))
            const deviationSquared = deviation.map(dev => parseFloat((parseFloat(dev) ** 2).toFixed(2)))
            const sumOfDeviationSquared = parseFloat((deviationSquared.reduce((acc, val) => acc + val ,0)).toFixed(2))
            const sampleStdDev = parseFloat((sumOfDeviationSquared / (Array.from(data).length)).toFixed(2))
            return {
                display: {
                    Mean: mean,
                    "Standard Deviation": sampleStdDev,
                    Count: data.length
                },
                xData: data,
                deviation,
                deviationSquared,
                sumOfDeviationSquared,
                latexFormula: PV_LaTeX
            }
        }
    },
    {
        type: "Population Standard Deviation",
        short: "psd",
        tableLayout: [X_LaTeX, X_X_LaTeX, X_X_SQR_LaTeX],
        formula(data){  
            const mean = parseFloat((Array.from(data).reduce((acc, val) => parseFloat((acc + parseFloat(val)).toFixed(2)), 0) / Array.from(data).length).toFixed(2))
            const deviation = Array.from(data).map(val => parseFloat((parseFloat(val) - parseFloat(mean)).toFixed(2)))
            const deviationSquared = deviation.map(dev => parseFloat((parseFloat(dev) ** 2).toFixed(2)))
            const sumOfDeviationSquared = deviationSquared.reduce((acc, val) => acc + val ,0)
            const sampleStdDev = parseFloat(Math.sqrt(sumOfDeviationSquared / (Array.from(data).length)).toFixed(2))
            return {
                display: {
                    Mean: mean,
                    "Standard Deviation": sampleStdDev,
                    Count: data.length
                },
                xData: data,
                deviation,
                deviationSquared,
                sumOfDeviationSquared,
                latexFormula: PVD_LaTeX
            }
        }
    }
]



export const letterRegEx = /[A-Za-z]/ig