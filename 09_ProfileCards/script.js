const employees = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    introduction:
      "Passionate about crafting beautiful and user-friendly web interfaces using React and Tailwind CSS.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Jane Smith",
    role: "Backend Developer",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    introduction:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corrupti, illo possimus repudiandae nemo nihil consequuntur numquam aperiam! Facere sint libero animi?",
  },
  {
    name: "Emily Johnson",
    role: "DevOps Engineer",
    introduction:
      "Focused on ensuring seamless deployments and maintaining high system reliability with Kubernetes and Docker.",
    image:
      "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Michael Brown",
    role: "Full-Stack Developer",
    introduction:
      "Specialized in both frontend and backend development with expertise in MERN stack technologies.",
    image:
      "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Sarah Lee",
    role: "Data Engineer",
    introduction:
      "Adept at building data pipelines and optimizing data storage solutions using Python and Apache Spark.",
    image:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "David Wilson",
    role: "Quality Assurance Engineer",
    introduction:
      "Ensures high software quality through automated and manual testing processes.",
    image:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Sophia Martinez",
    role: "Machine Learning Engineer",
    introduction:
      "Skilled in building predictive models and deploying AI systems with TensorFlow and PyTorch.",
    image:
      "https://images.pexels.com/photos/785667/pexels-photo-785667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
const button = document.querySelectorAll(".Manipultionbtn");
currentData = 0;
DataLength = employees.length;
// console.log(DataLength);

button.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target.id);
    if (e.target.id == "prev") {
      currentData = (currentData - 1 + DataLength) % DataLength;

      // console.log(currentData);
      Change(currentData);
    } else {
      currentData = (currentData + 1) % DataLength;

      console.log(currentData);
      Change(currentData);
    }
  });
});
const Image = document.getElementById("ProfilePicture");
const Name = document.getElementById("name");
const Role = document.getElementById("role");
const Introduction = document.getElementById("Introduction");

Image.src = employees[currentData].image;
Name.innerText = employees[currentData].name;
Role.innerText = employees[currentData].role;
Introduction.innerText = employees[currentData].introduction;

function Change(currentData) {
  console.log(currentData);

  Image.src = employees[currentData].image;
  Name.innerText = employees[currentData].name;
  Role.innerText = employees[currentData].role;
  Introduction.innerText = employees[currentData].introduction;
}
