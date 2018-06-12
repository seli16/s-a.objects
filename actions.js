


function addStudent(){
    document.getElementById("errorMessage1").innerHTML="";
    var studFirstName= document.getElementById("studentf").value;
    var studLastName= document.getElementById("studentl").value;
    var studGrade= document.getElementById("studgrade").value;
    var stud=new Student(studFirstName, studLastName, studGrade);
    for(var i=0; i<allStudents.length; i++){
        if(allStudents[i].firstName==stud.firstName
            &&allStudents[i].lastName==stud.lastName&&allStudents[i].grade==stud.grade){
            document.getElementById("errorMessage1").innerHTML= "Sorry that student has already been added!";
            return;
        }
    }
    allStudents[allStudents.length]= stud;
    console.log(allStudents);
    makeListStud();
}
function addTeacher(){
    var teachFisrtName= document.getElementById("teachersf").value;
    var teachLastName= document.getElementById("teachersl").value;
    var teachSubject= document.getElementById("teachsubj").value;
    allTeachers[allTeachers.length]= new Teacher(teachFisrtName, teachLastName, teachSubject);
    console.log(allTeachers);
    makeListTeach();
}
function addSection(){
  var secName= document.getElementById("secname").value;
  var secMaxSize= document.getElementById("secmax").value;
  var secTeach= document.getElementById("secteach").value;
  allSections[allSections.length]= new Section(secName, secMaxSize, secTeach);
  console.log(allSections);
    makeListSec();
}


function listThings(){
    var choose= document.getElementById("items").value;
    if(choose==0){
        listTeacher();
    }
    if(choose==1){
        listStudent();
    }
    if(choose==2){
        listSection();
    }
}

function listStudent(){
    var lstud= "<table border'1'>";
    for(var i=0; i<allStudents.length;i++){
        lstud+= "<tr>";
        lstud+= "<td>" + allStudents[i].firstName + "</td>";
        lstud+= "<td>" + allStudents[i].lastName + "</td>";
        lstud+= "<td>" + allStudents[i].grade + "</td>";
        lstud+= "</tr>";

    }
    lstud+= "</table>";
   document.getElementById("listItems").innerHTML= lstud;
}

function listTeacher(){
    var lteach= "<table border'1'>";
    for(var i=0; i<allTeachers.length; i++){
        lteach+= "<tr>";
        lteach+= "<td>" + allTeachers[i].firstName + "</td>";
        lteach+= "<td>" + allTeachers[i].lastName + "</td>";
        lteach+= "<td>" + allTeachers[i].subject + "</td>";
        lteach+= "</tr>";
    }

    lteach+= "</table>";
    document.getElementById("listItems").innerHTML=lteach;
}

function listSection(){
    var lsec= "<table border'1'>";
    for(var i=0; i<allSections.length; i++){
        lsec+= "<tr>";
        lsec+= "<td>" + allSections[i].name + "</td>";
        lsec+= "<td>" + allSections[i].maxSize + "</td>";
        lsec+= "<td>" + allSections[i].teacher.firstName + "</td>";
        lsec+= "</tr>";
    }

    lsec+= "</table>";
    document.getElementById("listItems").innerHTML= lsec;
}



function makeListStud(){
console.log(allStudents);
var mls="";
for(var i=0; i<allStudents.length; i++){
    mls+= "<option value='";
    mls+= allStudents[i].id;
    mls+= "'>";
    mls+=allStudents[i].firstName+ " "+allStudents[i].lastName;
    mls+= "</option>"
}
    document.getElementById("studentList").innerHTML=mls;
}

function makeListTeach(){
    console.log(allTeachers);
    var mlt="";
    for(var i=0; i<allTeachers.length; i++){
        mlt+="<option value='";
        mlt+= allTeachers[i].id;
        mlt+= "'>";
        mlt+= allTeachers[i].firstName+ " "+allTeachers[i].lastName;
        mlt+= "</option>"
    }
    document.getElementById("teacherList").innerHTML=mlt;
    document.getElementById("secteach").innerHTML=mlt;
}

function makeListSec(){
    console.log(allSections);
    var mlsec="";
    for(var i=0; i<allSections.length; i++){
        mlsec+="<option value='";
        mlsec+= allSections[i].id;
        mlsec+="'>";
        mlsec+= allSections[i].name;
        mlsec+="</option>"
    }
    document.getElementById("section1List").innerHTML=mlsec;
    document.getElementById("section2List").innerHTML=mlsec;
    document.getElementById("section3List").innerHTML=mlsec;

}


function getStudentById(idNumber){
    for(var i=0; i<allStudents.length; i++){
        if(allStudents[i].id==idNumber){
            return allStudents[i];
        }
    }
}

function getSectionById(idNumber){
    for(var i=0; i<allSections.length;i++){
        if(allSections[i].id==idNumber){
            return allSections[i];
        }
    }
}

function getTeacherById(idNumber){
    for(var i=0; i<allTeachers.length; i++){
        if(allTeachers[i].id==idNumber){
            return allTeachers[i];
        }
    }
}

function addStudentToSection(){
    document.getElementById("errorMessage").innerHTML="";
    var stud=getStudentById(document.getElementById("studentList").value);
    var sec= getSectionById(document.getElementById("section1List").value);
    for(var i=0; i<sec.students.length; i++){
        if(sec.students[i]==stud){
            document.getElementById("errorMessage").innerHTML= "Sorry that student has already been added!";
            return;
        }
    }
    sec.addStudent(stud);
}

function addTeacherToSection(){
    var teach=getTeacherById(document.getElementById("teacherList").value);
    var sec=getSectionById(document.getElementById("section2List").value);
    sec.teacher=teach;


}

function listStudentsInSecton(){
    var sec= getSectionById(document.getElementById("section3List").value);
    var studArray= sec.students;
    var lstud="<table border=1>";
    for(var i=0; i<studArray.length;i++){
        lstud+="<tr>";
        lstud+="<td>"+studArray[i].firstName+"</td>";
        lstud+="<td>"+studArray[i].lastName+"</td>";
        lstud+="<td>"+studArray[i].grade+"</td>";
        lstud+="</tr>";
    }
    lstud+="</table>";
    document.getElementById("listTable").innerHTML=lstud;



}


