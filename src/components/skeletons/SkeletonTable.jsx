import React from 'react'
import SkeletonElement from './SkeletonElement'

const SkeletonTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th><SkeletonElement type="title" /></th>
                        <th><SkeletonElement type="title" /></th>
                        <th><SkeletonElement type="title" /></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3, 4].map((post) => {
                            return (
                                <tr key={post}>
                                    <th><SkeletonElement type="title" /></th>
                                    <td><SkeletonElement type="title" /></td>
                                    <td><SkeletonElement type="text" /></td>
                                </tr>
                            )
                        }

                        )}
                </tbody>
            </table>
        </div>

    )
}

export default SkeletonTable