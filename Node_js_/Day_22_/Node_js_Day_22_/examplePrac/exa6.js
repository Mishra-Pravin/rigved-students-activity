module.exports.multi=function(...d){
    let multiplication=0;
    for(let i=0;i<d.length;i++){
        multiplication=multiplication+d[i];

    }
    return multiplication;
}
module.exports.max=function(...b){
    let m=b[0];
    for(let i=0;i<b.length;i++){
        if(b[i]>m){
            m=b[i];
        }
    

    }
    return m;
}