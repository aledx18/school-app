'use client'

import { Label, Pie, PieChart } from 'recharts'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'
import { useMemo } from 'react'
const chartData = [
  { student: 'boys', visitors: 275, fill: 'var(--color-boys)' },
  { student: 'girls', visitors: 200, fill: 'var(--color-girls)' }
]
const chartConfig = {
  visitors: {
    label: 'Visitors'
  },
  boys: {
    label: 'Boys',
    color: 'hsl(var(--chart-1))'
  },
  girls: {
    label: 'Girls',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig

export default function CircleChart() {
  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])
  return (
    <Card>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px]'>
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey='visitors'
              nameKey='student'
              innerRadius={60}
              strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'>
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-3xl font-bold'>
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'>
                          Students
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex justify-center items-center gap-4 text-sm'>
        <div className='flex flex-col items-center gap-1'>
          <span className='w-5 h-5 rounded-full bg-[hsl(var(--chart-1))]' />
          <p className='font-bold'>{chartData[0].visitors}</p>
          <p className='text-muted-foreground'>Boys (25%)</p>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <span className='w-5 h-5 rounded-full bg-[hsl(var(--chart-2))]' />
          <p className='font-bold'>{chartData[1].visitors}</p>
          <p className='text-muted-foreground'>Girls (65%)</p>
        </div>
      </CardFooter>
    </Card>
  )
}
