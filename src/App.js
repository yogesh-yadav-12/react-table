import React from 'react';
import './App.css';
import { BasicTable } from './components//BasicTable'
import { ColumnHiding } from './components/ColumnHiding';
import { FilteringTable } from './components/FilteringTable';
import { PaginationTable } from './components/PaginationTable';
import { ColumnOrder } from './components/ColumnOrder';
import { RowSelection } from './components/RowSelection';
import { SortingTable } from './components/SortingTable';
import { StickyTable } from './components/StickyTable';

function App() {
  return (
    <div>
      {/* < BasicTable /> */}
      < FilteringTable />
      {/* < SortingTable /> */}
      {/* < PaginationTable /> */}
      {/* < ColumnHiding /> */}
      {/* < ColumnOrder /> */}
      {/* < RowSelection /> */}
      {/* < StickyTable /> */}
    </div>
  );
}

export default App;

