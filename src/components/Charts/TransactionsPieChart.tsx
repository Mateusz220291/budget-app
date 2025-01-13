import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Transaction } from "../../pages/TransactionsPage/types";
import { TooltipItem } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  transactions: Transaction[];
}

const TransactionsPieChart: React.FC<PieChartProps> = ({ transactions }) => {
  const categories = [
    "zakupy",
    "transport",
    "zdrowie",
    "inne",
    "rozrywka",
    "jedzenie na mieście",
  ];
  const categoryTotals = categories.map((category) =>
    transactions
      .filter((transaction) => transaction.category === category)
      .reduce((sum, transaction) => sum + transaction.amount, 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        data: categoryTotals,
        backgroundColor: [
          "darkblue",
          "darkgreen",
          "darkgoldenrod",
          "darkmagenta",
          "darkorange",
          "maroon",
        ],
        hoverBackgroundColor: [
          "midnightblue",
          "forestgreen",
          "goldenrod",
          "purple",
          "orangered",
          "brown",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<"pie">) => {
            const value = tooltipItem.raw as number;
            return `${tooltipItem.label}: ${value.toFixed(2)} PLN`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default TransactionsPieChart;
