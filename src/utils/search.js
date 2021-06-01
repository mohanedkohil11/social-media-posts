export default function search(str, strArr) {
    return new Promise((resolve, reject) => {
        console.log('search started', window.performance.now());
        let results = [];
        let query = str.trim().toLowerCase()
        strArr.forEach(item => {


            let term = (item.title + item.body).trim().toLowerCase();

            let matchingResult = term.match(query)

            if (query.trim() && matchingResult && matchingResult.length > 0) {
                let markedResult = { ...item };
                markedResult.body = item.body.replace(new RegExp(query, "gi"), (match) => `<mark>${match}</mark>`);
                markedResult.title = item.title.replace(new RegExp(query, "gi"), (match) => `<mark>${match}</mark>`);
                results.push(markedResult)
            }

        })
        console.log('search ended', window.performance.now());

        resolve(results);

    })
}