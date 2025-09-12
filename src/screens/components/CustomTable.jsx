import React, { useState } from "react";
import "../../styles/CustomTable.css";

export default function CustomTable({columns, initialRows}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 3;

  // Filter rows by search
  const filteredRows = initialRows.filter((row) =>
    row.some((cell) => cell.toLowerCase().includes(search.toLowerCase()))
  );

  // Pagination
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
  const paginatedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="table-card">
      <div className="table-header">
        <h3>Users Overview</h3>
        <p className="sub">
          {filteredRows.length} rows • {columns.length} columns
        </p>
      </div>

      {/* Actions and Search */}
      <div className="table-top-actions">
        <div className="actions-left">
          <button className="btn">Export CSV</button>
          <button className="btn">Add New</button>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>

      {/* Table */}
      <div className="table-wrap">
        <table className="nice-table" role="table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedRows.length > 0 ? (
              paginatedRows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} data-label={columns[j]}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="no-data">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="table-footer">
        <button
          className="btn"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages || 1}
        </span>
        <button
          className="btn"
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
