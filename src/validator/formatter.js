const trimUp = function(){
    let name = " functionUp  "
    let store=name.trim()
    console.log(store);
}

const changetoLowerCase =function(){
    let company="AMAZON"
    let store=company.toLowerCase()
    console.log(store);

}
const changetoUpperCase =function(){
    let company="flipkart"
    let store=company.toUpperCase()
    console.log(store);

}

module.exports.trimUp=trimUp
module.exports.changetoLowerCase=changetoLowerCase
module.exports.changetoUpperCase=changetoUpperCase


