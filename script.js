// let cars=[
//       {"marka":"Jaguar", "model":"XJ","color":"black","year":2018},
//       {"marka":"Porsche", "model":"Cayenne","color":"white","year":2021},
//       {"marka":"Mazda", "model":"CX-7","color":"silver","year":2020},
//       {"marka":"Chevrolet", "model":"Camaro","color":"white","year":2017},
//       {"marka":"Volkswagen", "model":"Caravelle","color":"black","year":2021}
//     ];

//   for (let i = 0; i < cars.length; i++) {
//    console.log(`${cars[2].marka} ${cars[2].color}`);
//    console.log(cars[i]);
//    //    console.log(cars[i].model);
//    //    console.log(cars[i].color);
//    //    console.log(cars[i].year);
//    }
 


 class Group {
    constructor(id,name,studentCount) {
        this.id = id;
        this.name = name;
        this.studentCount=studentCount;
       
    }
    
    students = [];
    
    addStudent(studentToAdd){  
        if(this.students.length==this.studentCount)
        {
            console.log(`${studentToAdd.name} don't add because The number of people in the ${this.name} group is maximum`);
            console.log(this.students.length);
            return;
        }    
        else if (this.students.some(s => studentToAdd.id === s.id)) {
            console.log(` ${studentToAdd.id} has already been added to the group!`)
        } 
        else
        {  
            this.students.push(studentToAdd);
            console.log(`Add ${studentToAdd.name} to the group ${this.name}.`);
        } 
        return this.students;
    }
    showAllStudents(){
        this.students.forEach(a=>console.log(`Id: ${a.id} Name: ${a.name} Surname: ${a.lastname} Age: ${a.age}`));
        
    }
}
class Student {
    constructor(id,name,lastname, age) {
        this.id=id;
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
}

const p125 = new Group(1,"P125",6);
const newStu1=new Student(1,"Gunel","Yusubova",26);
const newStu2=new Student(2,"Sebine","Quliyeva",26);
const newStu3=new Student(3,"Elchin","Yusubov",23);
const newStu4=new Student(4,"Raul","Rustemli",28);
const newStu5=new Student(5,"Ayshen","Abdullayeva",25);
const newStu6=new Student(6,"Lavinya","Yusuf",25);
const newStu7=new Student(7,"Simran","Qocayev",28);
// const newStu8=new Student(8,"Khanish","Alesgerov",16);

p125.addStudent(newStu1);

p125.addStudent(newStu2);

// p125.addStudent(newStu1);
p125.addStudent(newStu3);
p125.addStudent(newStu4);
p125.addStudent(newStu5);
p125.addStudent(newStu6);
p125.addStudent(newStu7);
// p125.addStudent(newStu8);
p125.showAllStudents();



