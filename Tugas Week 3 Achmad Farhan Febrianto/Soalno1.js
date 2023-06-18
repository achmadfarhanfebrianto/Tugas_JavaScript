function mySqrt(num){
    if (num <= 0){
        return "Tidak bisa input bilangan negatif"
    }else if (num % 2 == 0){
        return Math.sqrt(num)
    }else{
        return "Tidak bisa input bilangan ganjil"
    }
}
console.log("Result dari akar pangkat 2 :", mySqrt(2)); 
