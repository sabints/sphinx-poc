import './table.scss'
import PropTypes from 'prop-types'

import React from 'react'

export default function BalanceSheetTable({ data }) {
    return (
        <div className='table_wrap'>
        <div className='table-scroll'>
        <table className='sheet-table'>
            <thead className='sheet-header'>
                <tr>
                    <th className='account'>
                        <span>Account</span>
                    </th>
                    <th className='balance'>
                         <span>Balance</span>
                        <span><i className='bi bi-filter-left'></i></span>
                    </th>
                    <th>
                        <span>Top Audit Technologies Used</span>
                    </th>
                </tr>
            </thead>
            <tbody className='sheet-columns'>
                {data.map((item, index) => (
                    <tr key={item.id + index} className='sheet-row'>
                        <td className='account '>
                            <a href='#/engagement-details'>{item.account}</a>
                        </td>
                        <td className='balance '>
                            {Intl.NumberFormat().format(item.balance)}
                        </td>
                        <td className='tools scrollable-column'>
                            {item.tools.map((tool, index) => (
                                <span key={tool.toolname + index} style={{ backgroundColor: tool.color }}>
                                    {tool.toolname}
                                </span>
                            ))}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
            {/* <div className='sheet-table'>
                <div className='sheet-header'>
                    <div className='account sticky-column'>
                        <span>Account</span>
                    </div>
                    <div className='balance sticky-column'>
                        <span>Balance</span>
                        <span><i className='bi bi-filter-left'></i></span>
                    </div>
                    <div className='tools scrollable-column'>
                        <span>Top Audit Technologies Used</span>
                    </div>
                </div>
                <div className='sheet-columns'>
                    {data.map((item, index) => (
                        <div key={item.id + index} className='sheet-row'>
                            <div className='account sticky-column'>
                                <a href='#/engagement-details'>{item.account}</a>
                            </div>
                            <div className='balance sticky-column'>
                                {Intl.NumberFormat().format(item.balance)}
                            </div>
                            <div className='tools scrollable-column'>
                                {item.tools.map((tool, index) => (
                                    <span key={tool.toolname + index} style={{ backgroundColor: tool.color }}>
                                        {tool.toolname}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
        </div>
    )
}

BalanceSheetTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            account: PropTypes.string,
            balance: PropTypes.number,
            tools: PropTypes.arrayOf(
                PropTypes.shape({
                    toolname: PropTypes.string,
                    color: PropTypes.string,
                })
            ),
        })
    ),
}
