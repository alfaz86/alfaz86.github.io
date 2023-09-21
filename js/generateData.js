(function () {
    const fileUrl = `../data/data.json`;
    fetch(fileUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            const result = formatData(JSON.parse(data));
            console.log(result);
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
})();

function formatData(projects) {
    const currentRootURL = `${window.location.protocol}//${window.location.host}`;
    projects.forEach(project => {
        const exists = repositories.some(repo => repo.id === project.id);
        const format = {
            id: project.id,
            name: project.name,
            description: project.description,
            homepage: project.homepage,
            image: currentRootURL + '/img/projects/' + project.id + '.png',
            url: project.html_url,
            tools: [],
            visibility: project.visibility
        }
        if (!exists) {
            repositories.push(format);
        }
    });
    return repositories;
}