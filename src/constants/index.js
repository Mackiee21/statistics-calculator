//export  const formulas = ["Sample Standard Deviation", "Range", "Variance", "Population Variance", "Sample Variance", "Population Standard Deviation", "Standard Deviation"];
export const typeOfData = ["Ungrouped", "Grouped"]

export const formulas = [
    {
        type: "Sample Standard Deviation",
        short: "ssd",
        tableLayout: ["x", "(x-x̄)", "(x-x̄)^2"],
        formula(data){  
            const mean = parseFloat((Array.from(data).reduce((acc, val) => parseFloat((acc + parseFloat(val)).toFixed(2)), 0) / Array.from(data).length).toFixed(2))
            const deviation = Array.from(data).map(val => parseFloat((parseFloat(val) - parseFloat(mean)).toFixed(2)))
            const deviationSquared = deviation.map(dev => parseFloat((parseFloat(dev) ** 2).toFixed(2)))
            const sumOfDeviationSquared = deviationSquared.reduce((acc, val) => acc + val ,0)
            const sampleStdDev = parseFloat(Math.sqrt(sumOfDeviationSquared / (Array.from(data).length - 1)).toFixed(2))
            return {
                mean,
                xData: data,
                deviation,
                deviationSquared,
                sumOfDeviationSquared,
                sampleStdDev
            }
        }
    },
    {
        type: "Sample Variance",
        short: 'sv',
        tableLayout: ["x", "(x-x̄)", "(x-x̄)^2"],
        formula(data){
            const mean = parseFloat((Array.from(data).reduce((acc, val) => parseFloat((acc + parseFloat(val)).toFixed(2)), 0) / Array.from(data).length).toFixed(2))
            const deviation = Array.from(data).map(val => parseFloat((parseFloat(val) - parseFloat(mean)).toFixed(2)))
            const deviationSquared = deviation.map(dev => parseFloat((parseFloat(dev) ** 2).toFixed(2)))
            const sumOfDeviationSquared = parseFloat((deviationSquared.reduce((acc, val) => acc + val ,0)).toFixed(2))
            const sampleStdDev = parseFloat((sumOfDeviationSquared / (Array.from(data).length - 1)).toFixed(2))
            console.log(sampleStdDev)
            return {
                mean,
                xData: data,
                deviation,
                deviationSquared,
                sumOfDeviationSquared,
                sampleStdDev
            }
        }
    },
    {
        type: "Population Variance",
        short: "pv",
        tableLayout: ["x", "(x-x̄)", "(x-x̄)^2"],
        formula(data){
            const mean = parseFloat((Array.from(data).reduce((acc, val) => parseFloat((acc + parseFloat(val)).toFixed(2)), 0) / Array.from(data).length).toFixed(2))
            const deviation = Array.from(data).map(val => parseFloat((parseFloat(val) - parseFloat(mean)).toFixed(2)))
            const deviationSquared = deviation.map(dev => parseFloat((parseFloat(dev) ** 2).toFixed(2)))
            const sumOfDeviationSquared = parseFloat((deviationSquared.reduce((acc, val) => acc + val ,0)).toFixed(2))
            const sampleStdDev = parseFloat((sumOfDeviationSquared / (Array.from(data).length)).toFixed(2))
            return {
                mean,
                xData: data,
                deviation,
                deviationSquared,
                sumOfDeviationSquared,
                sampleStdDev
            }
        }
    },
    {
        type: "Population Standard Deviation",
        short: "psd",
        tableLayout: ["x", "(x-x̄)", "(x-x̄)^2"],
        formula(data){  
            const mean = parseFloat((Array.from(data).reduce((acc, val) => parseFloat((acc + parseFloat(val)).toFixed(2)), 0) / Array.from(data).length).toFixed(2))
            const deviation = Array.from(data).map(val => parseFloat((parseFloat(val) - parseFloat(mean)).toFixed(2)))
            const deviationSquared = deviation.map(dev => parseFloat((parseFloat(dev) ** 2).toFixed(2)))
            const sumOfDeviationSquared = deviationSquared.reduce((acc, val) => acc + val ,0)
            const sampleStdDev = parseFloat(Math.sqrt(sumOfDeviationSquared / (Array.from(data).length)).toFixed(2))
            return {
                mean,
                xData: data,
                deviation,
                deviationSquared,
                sumOfDeviationSquared,
                sampleStdDev
            }
        }
    }
]



export const letterRegEx = /[A-Za-z]/ig