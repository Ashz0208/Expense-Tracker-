import ChartBar from "./ChartBar"
import './Chart.css'
import './ChartBar.css'

const Chart=(props)=>{
    const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMax=Math.max(...dataPointValues)
return(
    <div>
    {props.dataPoints.map((dataPoint)=> (
        <ChartBar
        key={dataPoint.label}
        label={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMax}
        />
        ))}
    </div>
)
}
export default Chart