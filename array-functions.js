
// task 1

let rectangle = [
{width: 25, height: 10},
{width: 50, height: 20}
]

let rectangleSize = rectangle.map(function(obj){
    obj.area = obj.width * obj.height

    return obj

})
console.log(rectangleSize)

// task 2 

let rectangleNew = [
    {width: 25, height: 10, size: 250},
    {width: 50, height: 20, size: 1000}
    ]
    
    let rectangleSizeNew = rectangleNew.map(function(obj){
    
        return obj.size
    
    })
    console.log(rectangleSizeNew)

// task 3

const arrayOfNumbers = [4,45,23,78,12,67,49,89,76,90]

const biggerThan = 34

const arrayOfNumbersNew = arrayOfNumbers.filter(function(n){
    if(n > biggerThan){
         
        return n
    }

})

console.log(arrayOfNumbersNew)

//task 4

const arrayOfRectangle = [
    {width: 25, height: 10, size: 250},
    {width: 50, height: 20, size: 1000},
    {width: 100, height:30, size: 3000},
    {width: 75, height: 20, size: 1500},
    {width: 90, height: 40, size: 3600},
    {width: 80, height: 25, size: 2000},
    ]
    
    const newNumber = 1200
    const arrayOfRectangleNew = arrayOfRectangle.filter(function(obj){
        if(obj.size > newNumber){

            return obj

        }
    
    })

    console.log(arrayOfRectangleNew)


    //task 5 

    const areaSize = 1500

    const equalToSize = arrayOfRectangle.find(function(obj){
        if(obj.size === areaSize){
            return obj
        }

    })

    console.log(equalToSize)

    // task 6 

    const ifAreaSizeExists = arrayOfRectangle.every(function(obj){
        return obj.size === areaSize;
        
    })

     console.log(ifAreaSizeExists)


// task 7 

const sortBySize = arrayOfRectangle.sort(function(a,b){

return a.size - b.size
})

console.log(sortBySize)



















