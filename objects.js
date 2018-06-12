var id=1;


function Student(fName,lName,grade){
    this.id=id++;
    this.firstName= fName;
    this.lastName= lName;
    this.grade= grade;


}



function Teacher(firstName,lastName,subject){
    this.id=id++;
    this.firstName= firstName;
    this.lastName= lastName;
    this.subject= subject;



}


function Section(name,maxSize,teacher){
    this.id=id++;
    this.name= name;
    this.maxSize= maxSize;
    this.currentSize= 0;
    this.students=[];
    this.teacher= teacher;
    this.addStudent= function(addStud){
        this.students[this.students.length]=addStud;
        this.currentSize++;
    }

}