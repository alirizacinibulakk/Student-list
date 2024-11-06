let students = [
    {
      id: 1,
      name: "Ali Rıza",
      lastname: "Çinibulak",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
    },
    {
      id: 2,
      name: "Berk",
      lastname: "Kalkan",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
    },
    {
      id: 3,
      name: "Bora",
      lastname: "Kalaycıoğlu",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
    },
    {
      id: 4,
      name: "Elif",
      lastname: "Yiğit",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
    },
    {
      id: 5,
      name: "Emre",
      lastname: "Çelik",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
    },
    {
      id: 6,
      name: "Kerem",
      lastname: "Özsobacı",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
    },
    {
      id: 7,
      name: "Muhammed",
      lastname: "Aslan",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
    },
    {
      id: 8,
      name: "Mücahit",
      lastname: "Yıldız",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
    },
    {
      id: 9,
      name: "Sude",
      lastname: "Çakır",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
    },
    {
      id: 10,
      name: "Zennur",
      lastname: "Gömek",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
    },
    {
      id: 11,
      name: "İrem",
      lastname: "Çoban",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
    },
    {
      id: 12,
      name: "Şura",
      lastname: "Dede",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
    },
  ];

const studentList = document.querySelector(".student-list");
const numberOfStudents = document.querySelector(".number-students");

function allStudents(students){
    studentList.innerHTML = "";
    
    for (const student of students) {
        studentList.innerHTML += `
        <div class="student">
            <p>${student.id}</p>
            <p>${student.name}</p>
            <p>${student.lastname}</p>
            <p>${student.gender}</p>
            <p>${student.section}</p>
            <p>${student.role}</p>
        </div>
        `;
    }
}


function getFilter(){
    
    if (womanInput.checked && manInput.checked) {
        allStudents(students);
        numberOfStudents.innerHTML = `<p>*Toplam Öğrenci Sayısı: 12</p>`
      } else if (womanInput.checked) {
        const womanStudents = students.filter(student => student.gender === "Kadın");
        numberOfStudents.innerHTML = `<p>*Kız Öğrenci Sayısı: 5</p>`
        allStudents(womanStudents);
      } else if (manInput.checked) {
        const manStudents = students.filter(student => student.gender === "Erkek");
        numberOfStudents.innerHTML = `<p>*Erkek Öğrenci Sayısı: 7</p>`
        allStudents(manStudents);
      } else {
        allStudents(students);
        numberOfStudents.innerHTML = ``
      }
}


allStudents(students);
womanInput.addEventListener("click", getFilter);
manInput.addEventListener("click", getFilter);