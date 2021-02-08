function Student(name, surname, bdayYear) {
     this.name = name,
          this.surname = surname,
          this.bdayYear = bdayYear,
          this.attendance = [],
          this.rating = []
}

Student.prototype.present = function () {
     if (this.attendance.length < 30) {

          return this.attendance = [{ status: true }, ...this.attendance]
     }
};
Student.prototype.absent = function () {
     if (this.attendance.length < 30) {

          return this.attendance = [{ status: false }, ...this.attendance]
     }
};
Student.prototype.mark = function (number) {
     if (this.rating.length < 30 && number > 0 && number <= 10) {
          return this.rating = [{ yourRating: number }, ...this.rating]
     }
};
Student.prototype.summary = function () {
     const sum = this.rating.reduce(function (acc, el) {

          return acc += el.yourRating
     }, 0)
     let midValue = sum / this.rating.length;


     const ourpresent = this.attendance.filter(function (el) {
          return el.status === true
     }, 0)
     const ratingStudent = ourpresent.length / this.attendance.length

     if ((midValue >= 9) && (ratingStudent >= 0.9)) {
          return alert('Ути какой молодчинка!')
     } else if ((midValue <= 9) || (ratingStudent <= 0.9)) {
          return alert('Норм, но можно лучше')
     } else {
          alert("Редиска!")
     }

};


const serg = new Student('serg', 'petrov', 1977);
console.log(serg)
