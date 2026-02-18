import {
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  Label,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";

// const current = 75;
// const max = 100;
// const endAngle = 210 - (current / max) * 240;

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(var(--chart-2))",
  },
};

export function RadialChartText({
  current = 75,
  max = 100,
  label = "Fuel",
  unit = "%",
  color = "rgba(24, 144, 255, 1)",
  startAngle = 210,
  maxDeg = 240,
  color1 = null,
  color2 = null,
}) {
  const endAngle = startAngle - (current / max) * maxDeg;
  const gradientId = `gradient-${label}`;
  const fill = color1 && color2 ? `url(#${gradientId})` : color;
  const chartData = [{ value: current, fill: fill }];
  return (
    <ChartContainer config={chartConfig} className="h-[120px] w-[120px]">
      <RadialBarChart
        data={chartData}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={50}
        outerRadius={70}
      >
        {color1 && color2 && (
          <defs>
            <linearGradient id={gradientId} x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor={color1} />
              <stop offset="100%" stopColor={color2} />
            </linearGradient>
          </defs>
        )}
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={[54, 46]}
        />
        <RadialBar dataKey="value" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy - 4}
                      className="fill-foreground text-xl font-bold"
                    >
                      {current}
                      <tspan className="fill-muted-foreground text-sm font-normal">
                        {unit}
                      </tspan>
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 16}
                      className="fill-muted-foreground text-xs"
                    >
                      {label}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
