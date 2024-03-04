// Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe


const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// creare i nodi della DOM nei quli inserire i componenti degli ogetti
const rowElement = document.querySelector('.row') 

// stampare su console le informazioni di nome, ruolo e la stringa della foto
// ciclare nella stringa e selezionare gli elementi degli oggetti
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    // riportarli in console con un console.log
    console.log(member.name, member.role, member.image);

    // stampare le stesse informazioni su DOM sottoforma di stringhe
    const markup = `<div class="col-12 col-md-6 col-lg-4">
    <div class="card mt-5 text-bg-dark"><h3 class="pt-2 px-2">${member.name}</h3><p class="px-2">${member.role}</p><img class="p-2" src="./assets/img/${member.image}" alt=""></div></div>`

    rowElement.insertAdjacentHTML('beforeend', markup)

}
