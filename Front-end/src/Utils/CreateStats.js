export const sortingStats = (scores) => {
    console.log(scores);
    let stats = {
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

    for (let i = 0; i < scores.length; i++) {
        stats.accuracy.push((scores[i].accuracy * 100).toFixed(2));
        stats.max_combo.push(scores[i].max_combo);
        stats.pp.push(scores[i].pp.toFixed(0));
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

    console.log(stats);

}