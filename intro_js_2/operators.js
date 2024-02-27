// const num1 = 1
// const num2 = 2

// const sum = num1 + num2 + 10

// console.log(40 + 2)
// console.log(40 - 2)
// console.log(40 * 2)
// console.log(40 / 2)
// console.log(14 % 3) //2

// let num = 7
// console.log(num++) //7
// console.log(num--) //8
// console.log(num) //7
// console.log("--------------")
// console.log(++num) //8
// console.log(--num) //7
// console.log(num) //7

// console.log(3 > 2)
// console.log(3 > 21)
// console.log(3 < 21)
// console.log(3 < 3)
// console.log(3 < -3)
// console.log(3 <= 3)

// console.log(3 == 3) //not recommended
// console.log("abc" == "abc") //not recommended

// console.log(3 == "3")
// console.log(3 === "3")
// console.log(3 === 3) //!!!recommended

// console.log(false == "0") // true
// console.log(false === "0") // false

// || OR operator
// false, 0, null, undefined, Nan, "" -> false
// console.log(true || false) // returns 1st true value
// console.log(false || true)
// console.log(false || false) // returns the last one since both are false
// console.log(true || true)
// console.log(false || 1)
// console.log(2 || false)
// console.log(typeof NaN)
// console.log(typeof Infinity)
// console.log(1 + null)
// console.log(1 + "test")
// console.log(10 / 0)
// console.log(0 / 0)
// console.log(1 || NaN)

// && AND operator
// console.log(true && false) // returns 1st false value
// console.log(false && true)
// console.log(true && true)
// console.log(0 && 1)

// const isMarried = true
// const hasChildren = false
// const personAge = 22
// const expirience = 2

// const shouldHaveBonus = isMarried || hasChildren
// const shouldHaveExtraBonus = isMarried && hasChildren
// const shouldHaveMaxBonus = isMarried && hasChildren || personAge > 21 && expirience > 1
// console.log(shouldHaveBonus)
// console.log(shouldHaveExtraBonus)
// console.log(shouldHaveMaxBonus)

// ! NOT operator
// console.log(!false) //true
// console.log(!true) //false
// console.log(!1) //false
// console.log(!undefined)
// console.log(!!false) //false
// console.log(!!100) //true

// console.log(1 ?? 0) //merge with null
// console.log(false ?? 0)
// console.log(null ?? 0) // returns the second operator
// console.log(undefined ?? 0) // returns the second operator

// const isMarried = false
// console.log(isMarried ? "Married" : "Single")

// const expirience = 3
// const isSenior = expirience > 3
// const salary = expirience > 3 ? 3000 : 2000
// console.log(salary)

// const something = 2 + "10"
// console.log(typeof something)
// console.log ("111" + true) // 111true
// console.log ("111" + undefined) // 111undefined
// console.log ("111" - 1) // 110
// console.log ("111" - "1") // 110
// console.log (typeof "111" - "1") // NaN
// console.log (typeof ("111" - "1")) // number
// console.log ("111" * true) // 111
// console.log ("111" * false) // 0
// console.log ("111" * undefined) // NaN
// console.log ("111" * null) // 0

// console.log (1 + Number("111")) //112
// console.log (1 + Number("111a")) //NaN
// console.log (1 + Number.parseInt("111a")) //112
// console.log (1 + Number.parseInt("111.4a")) //112
// console.log (1 + Number.parseFloat("111.4a")) //112.4
// console.log (1 + +"111") //112
// console.log (+"111" + 1) //112

// console.log (1 + String(true)) //1true
// console.log (1 + true) //2
// console.log (!!111) // true
// console.log (Boolean(111)) // true
