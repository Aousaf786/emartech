import ProjectDetailsComponent from "@/components/ExecutorComponent/project-details-component";
import "../../components/supplierStyle.scss";
import { ExecutorWrapper } from "./executorWrapper";

const ExecutorProjectDetails = () => {
  return (
    <ExecutorWrapper>
      <>
        <div className="manage-Inventory">
          <h1>Project Details</h1>
          <ProjectDetailsComponent />

        </div>

      </>
    </ExecutorWrapper>
  );
};

export default ExecutorProjectDetails;