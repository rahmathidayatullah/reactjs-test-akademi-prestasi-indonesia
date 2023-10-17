import React from 'react';
import SkeletonElement from './SkeletonElement';

function SkeletonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th aria-labelledby="js_1"><SkeletonElement type="title" /></th>
            <th aria-labelledby="js_1"><SkeletonElement type="title" /></th>
            <th aria-labelledby="js_1"><SkeletonElement type="title" /></th>
          </tr>
        </thead>
        <tbody>
          {
                        [1, 2, 3, 4].map((post) => (
                          <tr key={post}>
                            <th aria-labelledby="js_1"><SkeletonElement type="title" /></th>
                            <td aria-labelledby="js_1"><SkeletonElement type="title" /></td>
                            <td aria-labelledby="js_1"><SkeletonElement type="text" /></td>
                          </tr>
                        ))
}
        </tbody>
      </table>
    </div>

  );
}

export default SkeletonTable;
