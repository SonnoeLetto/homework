function Student(name, surname, bdayYear) {
     this.name = name,
          this.surname = surname,
          this.bdayYear = bdayYear,
          this.attendance = new Array(3),
          this.rating = new Array(3)
}

Student.prototype = {
     get absent() {
          const findVal = this.attendance.findIndex((el) => el === undefined)
          if (findVal === -1) {
               throw new Error('Массив переполнен')
          } else {

               return this.attendance[findVal] = false;
          }
     },
     get present() {
          const findVal = this.attendance.findIndex((el) => el === undefined)
          if (findVal === -1) {
               throw new Error('Массив переполнен')
          } else {
               return this.attendance[findVal] = true;
          }
     },

     mark(number) {
          const findVal = this.rating.findIndex((el) => el === undefined)

          if (findVal === -1) {
               throw new Error('Массив переполнен')
          } else {
               return this.rating[findVal] = number
          }
     },
     get summary() {
          const sum = this.rating.reduce(function (acc, el) {

               return acc += el
          }, 0)
          let midValue = sum / this.rating.length;


          const ourpresent = this.attendance.filter(function (el) {
               return el === true
          }, 0)
          const ratingStudent = ourpresent.length / this.attendance.length

          if ((midValue >= 9) && (ratingStudent >= 0.9)) {
               return alert('Ути какой молодчинка!')
          } else if ((midValue <= 9) && (ratingStudent <= 0.9)) {
               return alert("Редиска!")
          } else {
               return alert('Норм, но можно лучше')
          }

     }
}
const serg = new Student('serg', 'petrov', 1977);
console.log(serg)
