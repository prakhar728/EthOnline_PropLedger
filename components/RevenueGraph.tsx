import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Box } from "@chakra-ui/react";

interface CustomGraphProps {
  xValues: number[]; // Days passed
  yValues: number[]; // Amounts in hundreds
}

const CustomGraph: React.FC<CustomGraphProps> = ({ xValues, yValues }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: xValues.map((day) => `Day ${day}`),
            datasets: [
              {
                label: "Amount (in hundreds)",
                data: yValues,
                borderColor: "blue",
                borderWidth: 2,
                fill: false,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 50,
                },
              },
            },
            responsive: true, // Enable chart responsiveness
            maintainAspectRatio: false, // Allow chart to scale freely
          },
        });
      }
    }
  }, [xValues, yValues]);

  return (
    <Box>
      <canvas ref={chartRef} width={400} height={200} />
    </Box>
  );
};

export default CustomGraph;
