<template>
    <div class="row mx-auto flex flex-wrap pt-40 bg-black">
    </div>

    <div class="container mx-auto pt-20 ">
        <p class="text-4xl  justify-center text-center ">O início da História do Judô</p>

        <p class="mot text-3xl justify-center text-justify pb-2 pt-6 ">
            O judô, antes de chegar em Palmas, passou pela Defesa Pessoal Policial do 5º Batalhão da Polícia Militar (BPM),
            de Porto Nacional. Nesse mesmo ano, foi implantado o primeiro dojo da cidade no clube da AABB e, mais tarde,
            surgiria a primeira academia da cidade, intitulada KYO.


        </p>
        <p class="mot text-3xl justify-center text-justify  pb-2"> Em 1994, o sensei Irisomar começou a dar aulas de defesa
            pessoal, em sua própria casa, para a Guarda
            Metropolitana. Naquele mesmo ano, o sensei teve seu primeiro aluno da cidade de Palmas, Jayme Zacarias.
        </p>
        <p class="mot text-3xl justify-center text-justify pb-2">
            Em 1995, implantou o judô na capital, inicialmente na Guarda Metropolitana de Palmas (GMP), e lá treinava, a
            princípio, com o guarda João Procópio. E no ano de 2001 foi implantado, definitivamente, o judô da GMP, com
            apoio do Sargento Raimundo Nonato Dias de Souza, então subcomandante.
        </p>

        <p class="mot text-3xl justify-center text-justify pb-2">
            O sensei conta que, “Ainda em 2001, foram iniciadas as aulas de defesa pessoal policial no Centro de Formação e
            Aperfeiçoamento de Praças (CFAP PM/TO) e, aos poucos, foi implantado também o judô na PM de Palmas.
        </p>

    </div>
    <div class="container mx-auto pt-6">
        <p class="text-4xl  justify-center text-center">Fejet</p>
        <p class="mot text-3xl justify-center text-justify pb-2 pt-6">
            A criação da Fejet contou com várias viagens e vários desafios a serem enfrentados para que se consolidasse no
            Estado.
        </p>
        <p class="mot text-3xl justify-center text-justify  pb-2">Para a criação da Fejet foi necessário um trabalho em
            equipe com outros senseis: “A Fejet veio um pouco mais tarde, com a chegada do sensei Herbert Giacomini e do
            sensei Georgton Pacheco. Juntos, resolvemos criar a Federação, e coube a mim o papel de primeiro presidente.
            Isso em 2003”, explicou o sensei Irisomar.

        </p>
        <p class="mot text-3xl justify-center text-justify pb-2">
            Muitos empecilhos apareceram no caminho do sensei para fundar a Federação Estadual de Judô: “Para fundarmos a
            Fejet enfrentei alguns problemas como, por exemplo, ter que contestar uma outra entidade que havia sido
            registrada por um professor de Brasília, mas que não existia de fato. Foi um período de idas e vindas, até
            conseguirmos a liberação. Fiz várias viagens nessa época para Gurupi, Araguaína e Porto Nacional indo aos
            cartórios e pegando uma declaração de que não existia outra federação já registrada nesses cartórios. E tudo por
            minha conta, sem ajuda financeira de ninguém”, explicou.

        </p>

        <p class="mot text-3xl justify-center text-justify pb-2">
            Fui também à Goiânia onde me reuni com o Presidente da Federação Goiana de Judô (Fegoju), sensei Zedequias, que
            me deu gentilmente uma cópia do estatuto deles, e foi exatamente o que fizemos aqui, com poucas adaptações.

        </p>
        <p class="mot text-3xl justify-center text-justify pb-2">
            Entre as viagens, o sensei foi também para o Piauí, para se encontrar com o presidente da Confederação
            Brasileira de Judô (CBJ) da época, Paulo Wanderley Teixeira. O encontro se deu por intermédio de dois amigos de
            Irisomar, Danys Queiroz, presidente da Federação Piauiense de Judô, e pelo amigo Luiz Romariz, presidente da
            Federação de Brasília. A partir desse encontro as portas se abriram e a Fejet foi finalmente registrada na CBJ.
        </p>
        <p class="mot text-3xl justify-center text-justify pb-2">
            A CBJ apoiou integralmente o início da Federação, enviando professores renomados para ministrar cursos de
            padronização
        </p>
        <p class="mot text-3xl justify-center text-justify pb-2">
            “A implantação do Judô em Palmas foi bem icônica e me recordo com saudade, pois ensinei o nage-no-kata para um
            aluno meu, Antônio Pinheiro, e íamos apresentar nas feiras livres, nas praias do Rio Tocantins e em todos os
            lugares que nos permitiam. Com a chegada do sensei Giacomini, ele passou a fazer também as apresentações
            comigo”.
        </p>
        <p class="mot text-3xl justify-center text-justify pb-2">
            O judô se desenvolveu muito bem pois tínhamos inicialmente a academia Corpus, depois tínhamos também judô na
            ULBRA, com o sensei Georgton, no Marista, com o sensei Giacomini e na GMP e o Judô Fernandes, em Taquaralto,
            comigo.

        </p>
        <div class="container img mx-auto pt-6">
            <img src="../assets/img2.png" alt="foto" class="w-full h-auto" />
        </div>

    </div>
</template>

<style scoped>

/* @import url('https://fonts.googleapis.com/css?family=PTSerif');

.container {
    font-family: 'PTSerif';

} */
.row {
    background-image: url("../assets/img--.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    color: #213547;
}

.row::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(28, 28, 28, 0.5);

}

.row>* {
    position: relative;
    z-index: 1;
}

h4 {
    width: 50%;
    margin: 0 auto;
}

.mot {
    font-size: 1.3rem;
    color: black;
}

p {

    /* width: 80%; */
    margin: 0 auto;

}

.container {
    width: 40%;
}
@media (max-width: 768px) {
    .container {
        width: 80%;
    }
}
@media (max-width: 1024px) {
    .container {
        width: 80%;
    }
}
@media (max-width: 1280px) {
    .container {
        width: 80%;
    }
}
@media screen and (max-width: 640px) {
    .container {
        width: 90%;
    }
    
}
</style>