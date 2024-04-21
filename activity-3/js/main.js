//names : 

let name = 'Frank';
let nickname = 'Frankie';
let surname = 'mosehla';
let bio = `I'm ${name} ${surname}, you can call me ${nickname}. I'm a highly motivated full-stack developer with a foundation in the MERN stack (MongoDB, Express.js, React.js, Node.js). I recently graduated from high school and I'm eager to leverage my skills and keep learning in a professional environment.`;

let contact_details = [
    'facebook: WhoIsFrankie Scott',
    'github: frankiescott788',
    'whatsapp: 067 155 7474',
    'phone:067 155 7474',
    'gmail:scottfrankie864@gmail.com',
    'outlook:frankiscott864@outlook.com'
]
let address = [
    "2193 Tshabalala Str",
    "Ogies",
     2230
]
let projects = ['PholaPalletes - e-commerce', 'Blog Application - created with ReactJS and NodeJS'];

contact_details.forEach(contact_detail=>{
    let list = document.createElement('li');
    let icons = [
        "ri-facebook-line",
        "ri-github-fill",
        "ri-whatsapp-line",
        "ri-phone-line",
        "ri-mail-line",
        "ri-mail-line"
    ]
    for(let i = 0; i<icons.length; i++){
        list.innerHTML = `
        <i class="${ icons[i] }"></i> ${ contact_detail }
        `;
         contact_info = document.querySelector('.footer-contact-details').appendChild(list);
    }
});


document.getElementById('bio').innerHTML = bio;
document.getElementById('name_surname').innerHTML = `${name} ${surname}`;

for(let i = 0; i<address.length; i++){
    const adressList = document.querySelector('.address-list');
    let list = document.createElement('li');
    list.innerHTML = `${address[i]}`;
    adressList.appendChild(list);
};

