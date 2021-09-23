function findMatching(name, string){
    return name.filter(function(list){
        return list.toLowerCase().indexOf(string.toLowerCase()) !==-1;
    });
}

function fuzzyMatch(names, query){
    const length = query.length;
    return names.filter(function(el){
       // return el.toLowerCase().indexOf(query.toLowerCase()) !==-1;
       return el.slice(0,length).toLowerCase() === query.toLowerCase();
    });
}

function matchName(drivers, query){
    return drivers.filter(function(el){
        return el.name === query;
    })
}