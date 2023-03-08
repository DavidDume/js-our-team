const container = document.querySelector('.container');

const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & Ceo",
        picture: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Carol",
        role: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        picture: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        picture: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg"
    }
];

for (let index = 0; index < team.length; index++) {
    const element = team[index];
    console.log(element.name, element.role, element.picture);
    container.innerHTML += `
    <div class="card">
        <h2>${element.name}</h2>
        <h3>${element.role}</h3>
        <img src="./img/${element.picture}" alt="team">
    </div>
    `
}