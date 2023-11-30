<script>
export default {
    data() {
        return {
            currentImageIndex: 0,
            images: [
                "bg-blue-200",
                "bg-pink-200",
                "../assets/a.jpg",
                "../assets/a.jpg",
                // Adicione mais URLs de imagens conforme necessário
            ],
            currentImageClass: "../assets/a.jpg"
        };
    },
    computed: {
        currentImage() {
            this.currentImageClass = this.images[this.currentImageIndex];
            return this.currentImageClass;
        },

    },
    methods: {
        changeImage(index) {
            console.log(index)
            this.currentImageIndex = index;
        },
    },
};
</script>

<template>
    <header class="bg-white dark:bg-gray-900">


        <div
            class="container flex flex-col px-12 py-32 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center ">
            <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                <div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                    <button @click="changeImage(0)"
                        class="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button>
                    <button @click="changeImage(1)"
                        class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                    <button @click="changeImage(2)"
                        class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                    <button @click="changeImage(3)"
                        class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                </div>

                <div class="max-w-lg lg:mx-12 lg:order-2">
                    <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                        História do Judô na Cidade de Palmas</h1>
                    <p class="mt-4 text-gray-600 dark:text-gray-300">
                        Esse trabalho tem como objetivo apresentar a história do judô na cidade de Palmas, capital do
                        Tocantins
                    </p>
                    <div class="mt-6">
                        <a
                            class="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                            Aline, Liz, Yvana e Vanessa
                        </a>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center w-full lg:w-1/2">
                <!--  -->
                <img class="object-cover w-full h-full rounded-md" src="../assets/img--.png" alt="Imagem do carrossel">
            
                

            </div>
        </div>

        <div class="container-fluid mx-auto pt-20 ">
            <p
                class="tpx-6 py-2.5 mt-6  font-medium leading-5 text-center  capitalize  rounded-lg text-3xl lg:mx-0 lg:w-auto focus:outline-none">
                O início da História do Judô</p>

            <p class="mot text-3xl justify-center text-justify pb-2 pt-6 ">
                O judô, antes de chegar em Palmas, passou pela Defesa Pessoal Policial do 5º Batalhão da Polícia Militar
                (BPM),
                de Porto Nacional. Nesse mesmo ano, foi implantado o primeiro dojo da cidade no clube da AABB e, mais tarde,
                surgiria a primeira academia da cidade, intitulada KYO.


            </p>
            <p class="mot text-3xl justify-center text-justify  pb-2"> Em 1994, o sensei Irisomar começou a dar aulas de
                defesa
                pessoal, em sua própria casa, para a Guarda
                Metropolitana. Naquele mesmo ano, o sensei teve seu primeiro aluno da cidade de Palmas, Jayme Zacarias.
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                Em 1995, implantou o judô na capital, inicialmente na Guarda Metropolitana de Palmas (GMP), e lá treinava, a
                princípio, com o guarda João Procópio. E no ano de 2001 foi implantado, definitivamente, o judô da GMP, com
                apoio do Sargento Raimundo Nonato Dias de Souza, então subcomandante.
            </p>

            <p class="mot text-3xl justify-center text-justify pb-2">
                O sensei conta que, “Ainda em 2001, foram iniciadas as aulas de defesa pessoal policial no Centro de
                Formação e
                Aperfeiçoamento de Praças (CFAP PM/TO) e, aos poucos, foi implantado também o judô na PM de Palmas.
            </p>
            <p
                class="tpx-6 py-2.5 mt-6  font-medium leading-5 text-center text-white capitalize bg-sky-500 rounded-lg text-3xl lg:mx-0 lg:w-auto focus:outline-none">
                Fejet
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2 pt-6">
                A criação da Fejet contou com várias viagens e vários desafios a serem enfrentados para que se consolidasse
                no
                Estado.
            </p>
            <p class="mot text-3xl justify-center text-justify  pb-2">Para a criação da Fejet foi necessário um trabalho em
                equipe com outros senseis: “A Fejet veio um pouco mais tarde, com a chegada do sensei Herbert Giacomini e do
                sensei Georgton Pacheco. Juntos, resolvemos criar a Federação, e coube a mim o papel de primeiro presidente.
                Isso em 2003”, explicou o sensei Irisomar.

            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                Muitos empecilhos apareceram no caminho do sensei para fundar a Federação Estadual de Judô: “Para fundarmos
                a
                Fejet enfrentei alguns problemas como, por exemplo, ter que contestar uma outra entidade que havia sido
                registrada por um professor de Brasília, mas que não existia de fato. Foi um período de idas e vindas, até
                conseguirmos a liberação. Fiz várias viagens nessa época para Gurupi, Araguaína e Porto Nacional indo aos
                cartórios e pegando uma declaração de que não existia outra federação já registrada nesses cartórios. E tudo
                por
                minha conta, sem ajuda financeira de ninguém”, explicou.

            </p>

            <p class="mot text-3xl justify-center text-justify pb-2">
                Fui também à Goiânia onde me reuni com o Presidente da Federação Goiana de Judô (Fegoju), sensei Zedequias,
                que
                me deu gentilmente uma cópia do estatuto deles, e foi exatamente o que fizemos aqui, com poucas adaptações.

            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                Entre as viagens, o sensei foi também para o Piauí, para se encontrar com o presidente da Confederação
                Brasileira de Judô (CBJ) da época, Paulo Wanderley Teixeira. O encontro se deu por intermédio de dois amigos
                de
                Irisomar, Danys Queiroz, presidente da Federação Piauiense de Judô, e pelo amigo Luiz Romariz, presidente da
                Federação de Brasília. A partir desse encontro as portas se abriram e a Fejet foi finalmente registrada na
                CBJ.
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                A CBJ apoiou integralmente o início da Federação, enviando professores renomados para ministrar cursos de
                padronização
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                “A implantação do Judô em Palmas foi bem icônica e me recordo com saudade, pois ensinei o nage-no-kata para
                um
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
            <p class="mot text-3xl justify-center text-justify pb-2 pt-6">
                Um dos projetos desenvolvidos pelo sensei Irisomar em Palmas foi o Projed que reuniu mais de 400 atletas:
                “Não vou me lembrar bem o ano mas um projeto que alavancou o judô em Palmas na época foi o Projeto Judô na
                Escola (Projed). O Projed foi criado e bancado por mim por um pequeno período, mas a prefeitura assumiu o
                projeto e o implantou em quatro escolas da cidade. Chegamos a fazer eventos com 450 atletas nesse período.
                Um deles contou com a presença do grande atleta Mario Sabino (Em memória)”.
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                O primeiro atleta a participar de uma competição oficial representando o Tocantins foi Antônio Pinheiro,
                faixa verde na época, e participou dos Jogos da Juventude, em Brasília.
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                “Levamos uma boa equipe para Cuiabá (MT) para disputar o Campeonato Brasileiro Regional, e trouxemos nossas
                primeiras medalhas para o Tocantins, Rodolfo Gadotti e Clarissa Vasques Souza medalharam nesse evento”,
                contou o sensei.
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                No Campeonato Brasileiro das Polícias e Bombeiros, tivemos uma medalha de ouro com o militar Raimundo Nonato
                Dias de Souza -hoje é Coronel da Reserva - e uma de bronze com o soldado Jaime Zacarias de Andrade - hoje
                subtenente da Reserva.
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                O primeiro curso de faixas pretas foi ministrado por professores convidados e alguns da Fejet.
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                Entre os formandos estavam: Victor Kasuo, Rodolfo Gadotti, Antônio Pinheiro, Fred Guerra, Juracy Giacomini,
                Marcel Giacomini entre outros.
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                “Em Palmas tive muitas pessoas do bem que me ajudaram bastante, posso destacar o Coronel PM, Jefferson
                Fernandes Gadelha, comandante da GMP, que foi fundamental para solidificação do judô em Palmas o
                Desembargador Luiz Aparecido Gadotti, que nos ajudou e apoio em muitas ocasiões. Foram muitas pessoas que
                nos ajudaram, e sou muito grato a todos eles, cada um que de alguma forma nos ajudou”
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                André Mariano dos Santos, do Distrito Federal (DF), hoje é árbitro olímpico e ministrou o curso de
                arbitragem. No ano de 2003, foi implantado o judô no curso de Formação de Oficiais da PM/TO, turma da qual
                fez parte o Tenente Coronel Danilo Argolo, que já era faixa preta na época e oriundo do Sergipe.
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                Luiz Antônio Romariz - DF ministrou Go-kyo-no-waza
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                Dannys Queiroz - Piuaí, ministrou Biomecânica do Judô
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                “Quando a Professora Nilmar Ruiz foi prefeita de Palmas, tivemos bastante apoio para o judô, ela nos apoiava
                bastante, inclusive ia a nossos eventos vez ou outra. O secretário de educação e esportes da época era o
                professor Osmar Nina Garcia Neto, segundo DAN de judô, e nos ajudou muito nos projetos”.
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                Um feito importante para a Fejet foi a realização do primeiro e único evento de abrangência nacional até o
                momento. O campeonato foi organizado por equipes do qual participaram: Goiás, Brasília, Bahia e Tocantins.
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                “Conseguimos levar nossos atletas para: Cuiabá (MT), Anápolis (GO), Inhumas (GO), Distrito Federal, Salvador
                (BA) e São Luís (MA). Todas as viagens foram feitas de ônibus, com exceção de São Luís que foi de avião, e
                sem custos de viagens para os atletas. A Federação sempre conseguia apoio do Estado e do município de Palmas
                para levar o atleta sem que ele precisasse pagar as viagens”.
            </p>
            <p class="mot text-3xl justify-center text-justify pb-2">
                “É muito importante dizer que o judô de Palmas e do Tocantins foi feito por muitas mãos. Todos contribuíram
                e merecem lugar de destaque. Tenho a Fejet como uma filha, o judô do Tocantins como um filho muito querido.
                Desejo muito sucesso a todos os gestores, atletas e pais”.

            </p>


        </div>
    </header>
</template>



<!-- Entre os formandos estavam: Victor Kasuo, Rodolfo Gadotti, Antônio Pinheiro, Fred Guerra, Juracy Giacomini, Marcel Giacomini entre outros.
“Em Palmas tive muitas pessoas do bem que me ajudaram bastante, posso destacar o Coronel PM, Jefferson Fernandes Gadelha, comandante da GMP, que foi fundamental para solidificação do judô em Palmas o Desembargador Luiz Aparecido Gadotti, que nos ajudou e apoio em muitas ocasiões. Foram muitas pessoas que nos ajudaram, e sou muito grato a todos eles, cada um que de alguma forma nos ajudou”
André Mariano dos Santos, do Distrito Federal (DF), hoje é árbitro olímpico e ministrou o curso de arbitragem. No ano de 2003, foi implantado o judô no curso de Formação de Oficiais da PM/TO, turma da qual fez parte o Tenente Coronel Danilo Argolo, que já era faixa preta na época e oriundo do Sergipe.
Luiz Antônio Romariz - DF ministrou Go-kyo-no-waza
Dannys Queiroz - Piuaí, ministrou Biomecânica do Judô
“Quando a Professora Nilmar Ruiz foi prefeita de Palmas, tivemos bastante apoio para o judô, ela nos apoiava bastante, inclusive ia a nossos eventos vez ou outra. O secretário de educação e esportes da época era o professor Osmar Nina Garcia Neto, segundo DAN de judô, e nos ajudou muito nos projetos”.
Um feito importante para a Fejet foi a realização do primeiro e único evento de abrangência nacional até o momento. O campeonato foi organizado por equipes do qual participaram: Goiás, Brasília, Bahia e Tocantins. 
“Conseguimos levar nossos atletas para: Cuiabá (MT), Anápolis (GO), Inhumas (GO), Distrito Federal, Salvador (BA) e São Luís (MA). Todas as viagens foram feitas de ônibus, com exceção de São Luís que foi de avião, e sem custos de viagens para os atletas. A Federação sempre conseguia apoio do Estado e do município de Palmas para levar o atleta sem que ele precisasse pagar as viagens”.
“É muito importante dizer que o judô de Palmas e do Tocantins foi feito por muitas mãos. Todos contribuíram e merecem lugar de destaque. Tenho a Fejet como uma filha, o judô do Tocantins como um filho muito querido. Desejo muito sucesso a todos os gestores, atletas e pais”.
 -->


<!-- 

<template>
    <div class="row mx-auto flex flex-wrap pt-40 bg-black">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p class="inline-block px-3 py-px text-xs font-bold font-sans text-sky-100 uppercase rounded-full  mb-6">
            Reportagem
          </p>
        </div>
        <h2 class="max-w-lg mb-2 pt-3 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          <span class="relative inline-block text-sky-200">
            <span class="relative text-white shadow-2xl  rounded-full pl-3 pr-3">A História  do Judô em Palmas</span>
          </span>
         
        </h2>
        <p class="text-base text-white md:text-lg bg-sky-600 rounded-2xl">
          Esse trabalho foi feito por Aline, Yvana, Vanessa e Liz;
        </p>
      </div>
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
</template> -->

<style scoped>
/* @import url('https://fonts.googleapis.com/css?family=PTSerif');

.container {
    font-family: 'PTSerif';

} */
@import url('https://fonts.googleapis.com/css?family=Montserrat');

.row {
    background-image: url("../assets/img--.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 50vh;
    font-family: 'Montserrat', sans-serif;
    color: #213547;
}

.row::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
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
    font-family: 'Montserrat', sans-serif;
    width: 60%;
}

.container-fluid {
    font-family: 'Montserrat', sans-serif;
    width: 50%;
}

@media (max-width: 768px) {
    .container {
        width: 80%;
    }

    .container-fluid {
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

    .container-fluid {
        width: 80%;
    }
}

@media screen and (max-width: 640px) {
    .container {
        width: 90%;
    }

    .container-fluid {
        width: 90%;
    }
}</style>