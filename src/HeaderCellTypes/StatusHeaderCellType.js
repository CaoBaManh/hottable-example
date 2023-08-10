import React from 'react'
import ReactDOMServer from 'react-dom/server'
import styled from 'styled-components';

function StatusHeaderCellType({ dataList }) {
    var statusCounter = [
        {
            value: {
                key: "new",
                name: "To Do",
                colorName: "blue-gray",
            },
            count: 0
        },
        {
            value: {
                key: "indeterminate",
                name: "In Progress",
                colorName: "yellow",
            },
            count: 0
        },
        {
            value: {
                key: "done",
                name: "Done",
                colorName: "green",
            },
            count: 0
        }
    ];
    dataList.forEach((item) => {
        const index = statusCounter.findIndex((counterItem) => counterItem.value.colorName === item.status.statusCategory.colorName);
        if (index >= 0) {
            statusCounter[index].count++;
        }
    });

    return (
        <SStatusCellType>
            <SStatusCounter color={statusCounter[0].value.colorName}>{statusCounter[0].count}</SStatusCounter>
            <SStatusCounter color={statusCounter[1].value.colorName}>{statusCounter[1].count}</SStatusCounter>
            <SStatusCounter color={statusCounter[2].value.colorName}>{statusCounter[2].count}</SStatusCounter>
        </SStatusCellType>
    )
}

const SStatusCellType = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SStatusCounter = styled.div`
    margin: 2px;
    box-sizing: border-box !important;
    height: 22px;
    min-width: 22px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 3px;
    border-radius: 2px;
    background-color: ${prop => prop.color === "green" ? "#064" : prop.color === "yellow" ? "#0049b0" : "#42526E"};
    color: white;
`

export const statusHeaderCellType = (dataList) => ReactDOMServer.renderToString(<StatusHeaderCellType dataList={dataList} />);