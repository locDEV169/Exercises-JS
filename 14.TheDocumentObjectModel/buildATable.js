<h1>Mountains</h1>

<div id="mountains"></div>

<script>
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  function createTable(tableData) {
    let table = document.createElement('table');
    // create table headings
    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    for (let column of Object.keys(tableData[0])) {
      let th = document.createElement('th');
      tableRow.appendChild(th);
      th.appendChild(document.createTextNode(column));
    }
    // create table data rows
    for (let row of tableData) {
      let tr = document.createElement('tr');
      table.appendChild(tr);
      for (let data of Object.keys(row)) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.appendChild(document.createTextNode(row[data]));
        if (typeof(row[data] === 'number')) {
          td.style.textAlign = 'right';
        }
      }
    }
    return table;
  }
  
  document.querySelector('#mountains').appendChild(createTable(MOUNTAINS));

</script>