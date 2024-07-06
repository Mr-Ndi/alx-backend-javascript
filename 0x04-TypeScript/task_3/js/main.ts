
import { RowID, RowElement } from './interface';
import * as CRUD from 'crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`const obj = {firstName: "Guillaume", lastName: "Salva"};`);
console.log(`CRUD.insertRow(obj)`);
console.log(`// Insert row {firstName: "Guillaume", lastName: "Salva"}`);

const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };`);
console.log(`CRUD.updateRow(newRowID, updatedRow);`);
console.log(`// Update row ${newRowID} {firstName: "Guillaume", lastName: "Salva", age: 23}`);

CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID});`);
console.log(`// Delete row id ${newRowID}`);