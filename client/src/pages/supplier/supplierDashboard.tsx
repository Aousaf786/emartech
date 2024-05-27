import Widgets from "@/components/supplierComponent/Widgets";
import Chart from "@/components/supplierComponent/chart";
import TableComponent from "@/components/supplierComponent/table.component";
import "../../components/supplierComponent/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";

const SupplierDashboard = () => {
  return (
    <SupplierWrapper>
      <>
        <Widgets />
        <Chart />
        <TableComponent />
      </>
    </SupplierWrapper>
  );
};

export default SupplierDashboard;
