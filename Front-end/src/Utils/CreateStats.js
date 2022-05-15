
export const sortingStats = (scores) => {
    let i;
    const stats = {
        accuracy : [],
        max_combo : [],
        pp : [],
        rank : [],
        ar : [],
        od : [],  
        bpm : [],
        cs : [],
        star_rating : [],
        hp : [],
        total_length : [],
        creator : []
    };

    for (i = 0; i < scores.length; i++) {
        stats.accuracy.push(Number((scores[i].accuracy * 100).toFixed(2)));
        stats.max_combo.push(scores[i].max_combo);
        stats.pp.push(Number(scores[i].pp.toFixed(0)));
        stats.rank.push(scores[i].rank);
        stats.ar.push(scores[i].beatmap.ar);
        stats.od.push(scores[i].beatmap.accuracy);
        stats.bpm.push(scores[i].beatmap.bpm);
        stats.cs.push(scores[i].beatmap.cs);
        stats.star_rating.push(scores[i].beatmap.difficulty_rating);
        stats.hp.push(scores[i].beatmap.drain);
        stats.total_length.push(scores[i].beatmap.total_length);
        stats.creator.push(scores[i].beatmapset.creator);
    }

    return stats;
};

export const calculateFinalStats = (stats) => {

    let finalStats = {}

   /* 
        ar, cs, hp, od => moyenne
        total_length, star_rating, pp, max_combo, bpm, accuracy => min , max , moyenne 
        rank, creator => nom + nombre d'occurence (string)
   */

    finalStats.ar = calculateAverage(stats.ar).toFixed(2);
    finalStats.cs = calculateAverage(stats.od).toFixed(2);
    finalStats.hp = calculateAverage(stats.hp).toFixed(2);
    finalStats.od = calculateAverage(stats.od).toFixed(2);
    finalStats.total_length = {
        min : toMinutes(minMax(stats.total_length)[0]).toFixed(2),
        max : toMinutes(minMax(stats.total_length)[1]).toFixed(2),
        average : toMinutes(calculateAverage(stats.total_length).toFixed(2))
    }
    finalStats.star_rating = {
        min : minMax(stats.star_rating)[0].toFixed(2),
        max : minMax(stats.star_rating)[1].toFixed(2),
        average : calculateAverage(stats.star_rating).toFixed(2)
    }
    finalStats.pp = {
        min : minMax(stats.pp)[0].toFixed(0),
        max : minMax(stats.pp)[1].toFixed(0),
        average : calculateAverage(stats.pp).toFixed(0)
    }
     finalStats.max_combo = {
        min : minMax(stats.max_combo)[0].toFixed(0),
        max : minMax(stats.max_combo)[1].toFixed(0),
        average : calculateAverage(stats.max_combo).toFixed(0)
    }
    finalStats.bpm = {
        min : minMax(stats.bpm)[0].toFixed(0),
        max : minMax(stats.bpm)[1].toFixed(0),
        average : calculateAverage(stats.bpm).toFixed(0)
    }
    finalStats.accuracy = {
        min : minMax(stats.accuracy)[0].toFixed(2),
        max : minMax(stats.accuracy)[1].toFixed(2),
        average : calculateAverage(stats.accuracy).toFixed(2)
    }
    finalStats.rank = countRepeat(stats.rank)
    finalStats.creator = countRepeat(stats.creator)

    return finalStats;
}

function calculateAverage(array) {
    const average = array.reduce((curr, acc) => curr + acc) / array.length;   
    return average;
}

function minMax(array) {
    if(Array.isArray(array)) {
        const min = Math.min(...array);
        const max = Math.max(...array);
        return [min, max];
    }
}

function countRepeat(array) {
    
    let creator = {};

    while (array.length > 0) {

        if (Object.keys(creator).length === 0) {;
            creator[array[0]] = 1
            array.splice(0, 1)
        }
        else if(!(array[0] in creator)) {
            creator[array[0]] = 1;
            array.splice(0, 1)
        } else if (array[0] in creator){
            creator[array[0]]++;
            array.splice(0, 1)
        }
    }
    return creator;
}

function toMinutes(secondes) {
    let min = Math.floor(secondes / 60)
    let sec = Math.floor(secondes % 60) / 100
    return min + sec;
}


