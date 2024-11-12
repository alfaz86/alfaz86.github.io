const host = `${window.location.protocol}//${window.location.host}`;
const sheetUrl = "https://docs.google.com/spreadsheets/d/1BwKhsJY7Awg7OPXUg8JK9liv-6ZyljiyQ-a4B_KJ4U8/gviz/tq?tqx=out:json";
let repositories = [];

fetch(sheetUrl)
    .then(response => response.text())
    .then(data => {
        const json = JSON.parse(data.substr(47).slice(0, -2));
        const rows = json.table.rows;

        repositories = rows.map(row => ({
            id: row.c[0]?.v,
            name: row.c[1]?.v,
            description: row.c[2]?.v,
            homepage: row.c[3]?.v,
            image: row.c[4]?.v,
            url: row.c[5]?.v,
            tools: row.c[6]?.v.split(', '),
            visibility: row.c[7]?.v
        }));
    })
    .catch(error => console.error('Error fetching data:', error));
