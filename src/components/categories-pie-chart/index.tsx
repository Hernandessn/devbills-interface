import { ResponsivePie } from "@nivo/pie"
import { useMemo } from "react";
import { theme } from "../../styles/theme";
import { formatCurrency } from "../../utils/format-currency";


const apiData = [
    {
        _id: '1',
        title: 'Alimentação',
        amount: 30000,
        color: '#ff009d',
    },
    {
        _id: '1',
        title: 'Compras',
        amount: 150000,
        color: '#ff0000',
    },
    {
        _id: '1',
        title: 'Streaming',
        amount: 60000,
        color: '#3700ff',
    },
];

type ChartData = {
    id: string;
    label: string;
    externalId: string;
    value: number;
    color: string;
}


export function CategoriesPieChart(){
    const data = useMemo<ChartData[]>(()=>{

        const chartData = apiData.map((item)=>({
            id: item.title,
            label: item.title,
            externalId: item._id,
            value: item.amount,
            color: item.color,
        }));

        return chartData;
    },[]);

    return(
        <ResponsivePie 
        data={data} 
        enableArcLabels={false}
        enableArcLinkLabels={false}
        colors={({data})=> data.color}
        margin={{ top: 20}}
        valueFormat={formatCurrency}
        theme={{text: {
            fontFamily: 'Lexend',
            fontSize: 10,
        },
        tooltip:{
            container: {
                backgroundColor: theme.colors.black,
                padding: 16,
                color: theme.colors.white,
                fontFamily: 'Lexend',
                fontSize: 10,
                borderRadius: 4,
            }
        }
    }}
    legends={[
      {
        anchor: 'top',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: -20,
        itemWidth: 120,
        itemHeight: 16,
        itemTextColor: theme.colors.neutral,
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 10,
        symbolShape: 'circle',
      }
    ]}
        />
    )
}