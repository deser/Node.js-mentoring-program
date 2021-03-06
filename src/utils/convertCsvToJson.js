function convertCSVtoJS(data) {
    const convertedData = [];
    const rows = data.toString().split('\n');
    const headers = rows[0].split(',');

    rows.shift();
    rows.forEach((row) => {
        const rowObj = {};
        const cells = row.split(',');

        cells.forEach((cell, index) => {
            let key;
            headers[index] ? key = headers[index] : key = 'N/A';
           
            rowObj[key.toString().trim()] = cell.toString().trim();
        });
        convertedData.push(rowObj);
    });

    return convertedData;
}

export default convertCSVtoJS;