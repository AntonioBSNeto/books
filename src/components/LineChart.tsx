import { Box, Card, CardContent, Typography } from "@mui/material";
import { areaElementClasses, SparkLineChart } from "@mui/x-charts";

interface LineChartProps {
  data: number[];
  title: string;
  color?: string;
}

function last30Days() {
  const formattedDays = [];
  for (let i = 29; i >= 0; i--) {
    let date = new Date();
    date.setDate(date.getDate() - i);
    formattedDays.push(date.toLocaleDateString('pt-BR', { month: 'short', day: '2-digit' }).replace(',', ''));
  }
  return formattedDays;
}

function AreaGradient({ color, id }: { color: string; id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.3} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

export const LineChart = ({ data, title, color = '#3358FF' }: LineChartProps) => {
  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography component='h2' variant="subtitle2">{title}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h4" component="p">{data.reduce((a, b) => a + b, 0).toLocaleString('pt-Br')}</Typography>
          <Typography variant="caption" sx={{ color: 'gray' }}>
            Últimos 30 dias
          </Typography>
        </Box>
        <Box sx={{ width: '100%', height: 50 }}>
          <SparkLineChart
            colors={[color]}
            data={data}
            area
            showHighlight
            // showTooltip   causa um warning de "Maximum update depth exceeded"
            xAxis={{
              scaleType: 'band',
              data: last30Days()
            }}
            sx={{
              [`& .${areaElementClasses.root}`]: {
                fill: `url(#area-gradient-${100})`,
              },
            }}
          >
            <AreaGradient color={color} id={`area-gradient-${100}`} />
          </SparkLineChart>
        </Box>
      </CardContent>
    </Card>
  )
}