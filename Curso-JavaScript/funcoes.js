var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function it(usuarios) {
    for (us of usuarios) {
        console.log('O ' + us.nome + 'possuia as habilidades: ' + us.habilidades.join(', '))
    }
}

it(usuarios)