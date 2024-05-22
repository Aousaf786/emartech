import PropTypes from 'prop-types';
import { useState } from "react";
import PaginationComponent from "../common/pagination";

const TableComponent = ({ tableData, itemsPerPage, columns }: any) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event: any, value: any) => {
        setCurrentPage(value);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

    if (tableData.length === 0) {
        return <div>Opss! Not Found</div>;
    }

    return (
        <> {tableData.length === 0 ? (
            <div>Opss! Not Found</div>
        ) : (
            <div className="responsive-table">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            {columns.map((col: any, i: any) => (
                                <th key={i}>
                                    {col.header}
                                </th>
                            ))}

                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item: any, i: any) => (
                            <tr key={i}>
                                {columns.map((col: any, j: any) => (
                                    <td key={j}>
                                        {item[col.accessor]}
                                    </td>
                                ))}

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        )}
            <PaginationComponent
                count={Math.ceil(tableData.length / itemsPerPage)}
                page={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    )
}

TableComponent.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
    itemsPerPage: PropTypes.number,
    columns: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.string.isRequired,
        accessor: PropTypes.string.isRequired
    })).isRequired
};

TableComponent.defaultProps = {
    itemsPerPage: 4
};

export default TableComponent;
