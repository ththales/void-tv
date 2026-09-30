let movies = [

    {
        title: "Clube da Luta",
        genre: ["Drama", "Thriller"],
        year: "1999",
        duration: "2h 19min",
        alt: "Fight Club poster",
        description: "Um homem insatisfeito com sua vida conhece um vendedor de sabão e, juntos, criam um clube secreto de luta que acaba tomando proporções inesperadas.",
        imageUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/mCICnh7QBH0gzYaTQChBDDVIKdm.jpg"
    },

    {
        title: "Interestelar",
        genre: ["Ficção Científica", "Drama"],
        year: "2014",
        duration: "2h 49min",
        alt: "Interstellar poster",
        description: "Em um futuro em que a Terra está se tornando inabitável, um grupo de astronautas parte em uma missão através de um buraco de minhoca em busca de um novo lar para a humanidade.",
        imageUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },

    {
        title: "O Iluminado",
        genre: ["Terror", "Thriller"],
        year: "1980",
        duration: "2h 26min",
        alt: "The Shining poster",
        description: "Um escritor aceita trabalhar como zelador de um isolado hotel durante o inverno, mas acontecimentos sobrenaturais começam a afetar sua mente e sua família.",
        imageUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/xazWoLealQwEgqZ89MLZklLZD3k.jpg"
    },

    {
        title: "Pulp Fiction: Tempo de Violência",
        genre: ["Crime", "Drama"],
        year: "1994",
        duration: "2h 34min",
        alt: "Pulp Fiction poster",
        description: "As histórias de criminosos, assassinos e outras figuras do submundo de Los Angeles se cruzam em uma narrativa não linear marcada por violência, humor e diálogos memoráveis.",
        imageUrl: "https://media.themoviedb.org/t/p/w300_and_h450_face/tptjnB2LDbuUWya9Cx5sQtv5hqb.jpg"
    },

    {
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        genre: ["Fantasia", "Aventura"],
        year: "2001",
        duration: "2h 58min",
        alt: "The Lord of the Rings The Fellowship of the Ring poster",
        description: "O jovem Frodo Bolseiro recebe a missão de destruir um poderoso anel antes que ele caia nas mãos do Senhor das Trevas Sauron.",
        imageUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
    },

    {
        title: "Mad Max: Estrada da Fúria",
        genre: ["Ação", "Ficção Científica"],
        year: "2015",
        duration: "2h 00min",
        alt: "Mad Max Fury Road poster",
        description: "Em um mundo pós-apocalíptico dominado pela violência e pela escassez, Max se junta a Furiosa em uma fuga desesperada através de um deserto devastado.",
        imageUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/hA2ple9q4qnwxp3hKVNhroipsir.jpg"
    },

    {
        title: "Parasita",
        genre: ["Drama", "Thriller"],
        year: "2019",
        duration: "2h 12min",
        alt: "Parasite poster",
        description: "Uma família de baixa renda começa a se infiltrar na vida de uma família rica, mas a convivência entre as duas classes sociais toma um rumo cada vez mais sombrio.",
        imageUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
    },

    {
        title: "Corra!",
        genre: ["Terror", "Thriller"],
        year: "2017",
        duration: "1h 44min",
        alt: "Get Out poster",
        description: "Um jovem negro visita a família de sua namorada e começa a perceber comportamentos estranhos que escondem um segredo perturbador.",
        imageUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg"
    },

    {
        title: "O Poderoso Chefão",
        genre: ["Crime", "Drama"],
        year: "1972",
        duration: "2h 55min",
        alt: "The Godfather poster",
        description: "A história da família Corleone, uma poderosa organização criminosa ítalo-americana, e da transformação de Michael Corleone dentro do mundo da máfia.",
        imageUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
    },

    {
        title: "Forrest Gump: O Contador de Histórias",
        genre: ["Drama", "Romance"],
        year: "1994",
        duration: "2h 22min",
        alt: "Forrest Gump poster",
        description: "Forrest Gump, um homem de inteligência simples e coração extraordinário, vive acontecimentos marcantes da história dos Estados Unidos enquanto busca seu grande amor.",
        imageUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
    },

    {
        title: "Homem-Aranha no Aranhaverso",
        genre: ["Animação", "Ação"],
        year: "2018",
        duration: "1h 57min",
        alt: "Spider-Man Into the Spider-Verse poster",
        description: "Miles Morales se torna o Homem-Aranha e descobre que existem outras versões do herói vindas de diferentes dimensões.",
        imageUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
    },

    {
        title: "A Viagem de Chihiro",
        genre: ["Animação", "Fantasia"],
        year: "2001",
        duration: "2h 05min",
        alt: "Spirited Away poster",
        description: "Uma garota chamada Chihiro fica presa em um mundo mágico habitado por espíritos e precisa encontrar uma maneira de salvar seus pais e retornar para casa.",
        imageUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"
    },

    {
        title: "Blade Runner 2049",
        genre: ["Ficção Científica", "Drama"],
        year: "2017",
        duration: "2h 44min",
        alt: "Blade Runner 2049 poster",
        description: "Um jovem caçador de androides descobre um segredo capaz de alterar profundamente a relação entre humanos e replicantes e parte em busca de respostas.",
        imageUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg"
    },

    {
        title: "Alien: O Oitavo Passageiro",
        genre: ["Terror", "Ficção Científica"],
        year: "1979",
        duration: "1h 57min",
        alt: "Alien poster",
        description: "A tripulação de uma nave espacial responde a um sinal misterioso e acaba enfrentando uma criatura extraterrestre mortal dentro da própria nave.",
        imageUrl: "https://media.themoviedb.org/t/p/w220_and_h330_face/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg"
    },

    {
        title: "O Fabuloso Destino de Amélie Poulain",
        genre: ["Romance", "Comédia"],
        year: "2001",
        duration: "2h 02min",
        alt: "Amelie poster",
        description: "Uma jovem garçonete parisiense decide ajudar secretamente as pessoas ao seu redor enquanto tenta encontrar seu próprio caminho para a felicidade e o amor.",
        imageUrl: "https://media.themoviedb.org/t/p/w300_and_h450_face/oAYKYALxamhAB1wKUGmOo05Vf92.jpg"
    }

];

// Home page
movies.forEach(element => {
    $(".home-container").append(
        `
        <div class="col">
            <div class="card shadow-sm">
                <img src="${element.imageUrl}"
                    class="card-img-top" alt="${element.alt}">

                <div class="card-body">
                    <p class="card-title">${element.title}</p>
                    <p class="genre">${element.genre.join(", ")}</p>

                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                Assistir
                            </button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                Detalhes
                            </button>
                        </div>

                        <small class="text-body-secondary">${element.year}</small>
                    </div>
                </div>
            </div>
        </div>
    `
    );
});

// Genres
movies.forEach(element => {
    $(".genres-container").append(
        `
        <div class="col">
            <div class="card shadow-sm">
            <img src="${element.imageUrl}" />
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.description.substring(0, 60)}...</p>
                    <small class="text-body-secondary">${element.year} - ${element.duration}</small>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    );
});