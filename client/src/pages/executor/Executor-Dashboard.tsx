import ExecutorChart from "@/components/ExecutorComponent/chart";
import Widgets from "@/components/common/Widgets";
import { LineChart } from "@mui/x-charts/LineChart";
import image from "../../assets/images/Vector-img.svg";
import "../../components/supplierStyle.scss";
import { ExecutorWrapper } from "./executorWrapper";

export const ExecutorDashboard = () => {
  const widgetsData = [
    [
      {
        icon: "material-symbols:orders-outline-rounded",
        label: "Total Sales",
        value: 245,
        unit: "This Month",
        additionalContent: (
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10], colorMap: { type: 'piecewise', thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)], colors: ['#000'] } }]}
            series={[{ data: [2, 5.5, 2, 8.5, 1.5, 5] }]}
            width={300}
            height={100}
          />
        )
      }
    ],
    [
      {
        icon: "mynaui:users",
        label: "Message",
        value: 10,
        unit: "New",
        showArrow: true
      },
      {
        icon: "material-symbols:orders-outline-rounded",
        label: "Active orders",
        value: 24,
        unit: "New",
        showArrow: true
      }
    ],
    [
      {
        icon: "",
        label: "Project in queue",
        value: 456000,
        unit: "AED",
        Image: <img src={image} alt="img not found" />
      },
      {
        icon: "carbon:categories",
        label: "Cancelled contracts",
        value: 14,
        unit: "New"
      }
    ],
    [
      {
        icon: "ph:user-light",
        label: "Completed projects",
        value: 45,
        unit: "New"
      }
    ]
  ];

  return (
    <ExecutorWrapper>
      <>
        <Widgets widgetsData={widgetsData} />
        <ExecutorChart />

      </>
    </ExecutorWrapper>
  );
};

export default ExecutorDashboard;

