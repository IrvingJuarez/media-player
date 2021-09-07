// const counter = {
//     count: 4
// }

function makeCounter(n){
    count = n

    return {
        increase: function(){
            count += 1
        },
        decrease: function(){
            count -= 1
        },
        getCount: function(){
            return count
        }
    }
}

let counter = makeCounter(7)
console.log(counter.getCount())

counter.increase()
console.log(counter.getCount())

counter.decrease()
console.log(counter.getCount())