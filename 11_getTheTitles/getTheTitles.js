const getTheTitles = function (obj) {
    const newObj = [... obj]
    const titles = newObj.map((element) => element.title)
    return titles
}

// Do not edit below this line
module.exports = getTheTitles;
