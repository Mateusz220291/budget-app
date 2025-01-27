// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Transaction } from "../../pages/TransactionsPage/types";
// import { TooltipItem } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// interface PieChartProps {
//   transactions: Transaction[];
// }

// const RecurringBillsPieChart: React.FC<PieChartProps> = ({ transactions }) => {
//   const categories = [
//     "zakupy",
//     "transport",
//     "zdrowie",
//     "inne",
//     "rozrywka",
//     "jedzenie na mieście",
//   ];
//   const categoryTotals = categories.map((category) =>
//     transactions
//       .filter((transaction) => transaction.category === category)
//       .reduce((sum, transaction) => sum + transaction.amount, 0)
//   );

//   const data = {
//     labels: categories,
//     datasets: [
//       {
//         data: categoryTotals,
//         backgroundColor: [
//           "darkblue",
//           "darkgreen",
//           "darkgoldenrod",
//           "darkmagenta",
//           "darkorange",
//           "maroon",
//         ],
//         hoverBackgroundColor: [
//           "midnightblue",
//           "forestgreen",
//           "goldenrod",
//           "purple",
//           "orangered",
//           "brown",
//         ],
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "bottom" as const,
//       },
//       tooltip: {
//         callbacks: {
//           label: (tooltipItem: TooltipItem<"pie">) => {
//             const value = tooltipItem.raw as number;
//             return `${tooltipItem.label}: ${value.toFixed(2)} PLN`;
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ width: "400px", margin: "0 auto" }}>
//       <Pie data={data} options={options} />
//     </div>
//   );
// };

// export default RecurringBillsPieChart;

import React from "react";
import { Pie } from "react-chartjs-2";
import { RecurringBill } from "../../pages/RecurringBillsPage/types";
import { ChartData, ChartOptions, TooltipItem } from "chart.js";
import "chart.js/auto";
import "./RecurringBillsPieChart.css";

interface RecurringBillsPieChartProps {
  bills: RecurringBill[];
}

const RecurringBillsPieChart: React.FC<RecurringBillsPieChartProps> = ({
  bills,
}) => {
  // Przygotowanie danych do wykresu
  const chartData: ChartData<"pie", number[], unknown> = {
    labels: bills.map((bill) => bill.name), // Nazwy wydatków
    datasets: [
      {
        data: bills.map((bill) => bill.amount), // Kwoty wydatków
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const chartOptions: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const, // Umiejscowienie legendy
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<"pie">) {
            const label = context.label || "";
            const value = context.raw as number; // Upewniamy się, że context.raw jest liczbą
            return `${label}: ${value.toFixed(2)} PLN`; // Formatowanie liczby
          },
        },
      },
    },
  };

  return (
    <div className="recurring-bills-pie-chart">
      <h3>Recurring Bills Overview</h3>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default RecurringBillsPieChart;
