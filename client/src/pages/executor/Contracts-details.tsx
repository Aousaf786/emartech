import ContractsDetailsComponent from "@/components/ExecutorComponent/contracts-details-component";
import "../../components/supplierStyle.scss";
import { ExecutorWrapper } from "./executorWrapper";


const ContractsDetails = () => {


    return (
        <ExecutorWrapper>
            <>
                <div className="manage-Inventory">
                    <h1> Contracts Details</h1>
                    <p>General Information</p>
                    <ContractsDetailsComponent />

                </div>
            </>
        </ExecutorWrapper>
    )
}

export default ContractsDetails;