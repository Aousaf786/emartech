import SuperChart from "@/components/super-admin-component/super-chart";

import SuperWidgets from "@/components/super-admin-component/super-widgets";
import { SuperWrapper } from "./superWrapper";

const SuperAdmin = () => {


    return (
        <SuperWrapper>
            <>
                <SuperWidgets />
                <SuperChart />
            </>

        </SuperWrapper>

    )
}

export default SuperAdmin;
