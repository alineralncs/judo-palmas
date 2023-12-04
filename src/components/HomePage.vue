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
            currentImageClass: "../assets/a.jpg",
            scrolledDown: false,

        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
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
        handleScroll() {
            // Verifica se a página foi rolada
            this.scrolledDown = window.scrollY > 0;
        }
    },
};
</script>

<template>
    <header class="bg-white dark:bg-gray-900 text-justify justify-normal">



        <div class="font-hoe animate-fade-in animate-expand duration-500 ease-in-out bg-slate-50 rounded-xl shadow container flex flex-col px-12 py-32 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center "
            :class="{ 'hidden': scrolledDown }">
            <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">


                <div class="max-w-lg lg:mx-12 lg:order-2">
                    <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                        História do Judô na Cidade de Palmas</h1>
                    <p class="mt-4 text-gray-600 dark:text-gray-300">
                        Esse trabalho tem como objetivo apresentar a história do judô na cidade de Palmas, capital do
                        Tocantins
                    </p>

                </div>
            </div>

            <div class="flex items-center justify-center w-full lg:w-1/2">
                <!--  -->
                <img class="object-cover w-full h-full rounded-md" src="../assets/img--.png" alt="Imagem do carrossel">
            </div>
        </div>


        <!-- <div
            class="bg-slate-100 font-hoe flex flex-col mx-auto text-center  justify-center lg:h-[3rem] lg:py-16 items-center lg:items-center "> -->
        <!-- </div> -->
        <h1
            class="text-xl font-semibold tracking-wide font-hoe text-center pt-20 pb-20 text-gray-800 dark:text-white lg:text-3xl">
            Introdução
        </h1>
        <div class="intro ">

        </div>

        <div class="container-fluid mx-auto pt-10 font-hoe text-justify justify-normal">

            <p class="mot text-3xl  pb-2 pt-6 ">
                Para que o judô se implantasse em Palmas, foi necessário muito trabalho e esforço coletivo. Entre os
                desafios estavam as longas viagens para formalizar documentos e instituir de fato a Federação de Judô do
                Estado do Tocantins (Fejet) na capital, Palmas.



            </p>
            <p class="mot text-3xl   pb-2">
                Os primeiros treinamentos que aconteceram na capital foram realizados na Guarda Metropolitana de Palmas
                (GMP), em 1995. Na época, um dos primeiros a fomentar e a implantar o judô na cidade foi o sensei Irisomar
                Fernandes, primeiro presidente da Fejet, que contou com o apoio de outros senseis que lutavam pela mesma
                causa.

            </p>

        </div>

        <div
            class="bg-slate-50 font-hoe flex flex-col mx-auto text-center pt-12 justify-center lg:h-[6rem] lg:py-16 items-center lg:items-center ">

            <div class="max-w-xl">
                <h1 class="text-xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-3xl">
                    Judô em Palmas
                </h1>

            </div>
        </div>
        <div class="container-fluid mx-auto pt-6 font-hoe">

            <p class="mot text-3xl  pb-2 pt-6">
                O sensei Irisomar Fernandes saiu de Porto Nacional, onde ministrava aulas de defesa pessoal policial para o
                5º Batalhão da Polícia Militar (BPM), e foi para a capital. Em 1995, o judô na cidade começou na Guarda
                Metropolitana de Palmas (GMP), mas implantado definitivamente em 2001.
            </p>
            <p class="mot text-3xl  pb-2 pt-6">
                Um pouco mais tarde, em 1997, o Colégio ULBRA também iniciou as atividades relacionadas ao judô, com o
                sensei Georgton Pachêco.
                O sensei Irisomar conta que,


            </p>
            <p class="mot font-italic">
                “ainda em 2001, foram iniciadas as aulas de defesa pessoal policial no Centro
                de Formação e Aperfeiçoamento de Praças (CFAP PM/TO) e, aos poucos, foi implantado também o judô na PM de
                Palmas.
            </p>
            <div class="one">

            </div>
            <p class="font-sans text-center">
                Turma de 2004 do sensei Irisomar Fernandes, na CFAP PM/TO.
            </p>
        </div>

        <div
            class="bg-slate-50 font-hoe flex flex-col mx-auto text-center pt-12 justify-center lg:h-[6rem] lg:py-16 items-center lg:items-center ">

            <div class="max-w-xl">
                <h1 class="text-xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-3xl">
                    Fejet
                </h1>

            </div>
        </div>
        <div class="container-fluid mx-auto pt-6 font-hoe">
            <p class="mot text-3xl  pb-2 pt-6">
                Para a criação da Fejet foi necessário um trabalho coletivo com outros senseis: “ Junto com o sensei Herbert
                Giacomini e o sensei Georgton Pacheco resolvemos criar a Federação, e coube a mim o papel de primeiro
                presidente. Isso em 2002”, explicou o sensei Irisomar.
            </p>
            <p class="mot">
                Muitos empecilhos apareceram no caminho do sensei para fundar a Federação:

            </p>
            <p class="mot rounded-lg font-italic ">
                “Para fundarmos a Fejet enfrentei alguns problemas como, por exemplo, ter que contestar uma outra entidade
                que havia sido registrada por um professor de Brasília, mas que não existia de fato. Foi um período de idas
                e vindas, até conseguirmos a liberação. Fiz várias viagens nessa época para Gurupi, Araguaína e Porto
                Nacional indo aos cartórios e pegando uma declaração de que não existia outra federação já registrada nesses
                cartórios. E tudo por minha conta, sem ajuda financeira de ninguém”, explicou.
            </p>
            <p class="mot text-3xl  pb-2">
                Em uma viagem a Goiânia, o sensei se reuniu com o presidente da Federação Goiana de Judô (Fegoju), nesse
                encontro Irisomar conseguiu uma cópia do estatuto utilizado pela Fegoju e o mesmo foi adaptado para utilizar
                na Fejet.
            </p>
            <p class="mot text-3xl  pb-2 ">
                Entre as viagens, o sensei Irisomar foi também para o Piauí, para se encontrar com o presidente da <a
                    class="text-sky-400 underline" href="https://cbj.com.br/pt/">Confederação Brasileira de Judô (CBJ)
                </a>na época, Paulo Wanderley Teixeira. O encontro se deu por intermédio de dois amigos de Irisomar, Danys
                Queiroz, presidente da Federação Piauiense de Judô, e Luiz Romariz, presidente da Federação de Brasília. A
                partir desse encontro as portas se abriram e a Fejet foi finalmente registrada na CBJ.
            </p>
            <p class="mot text-3xl  pb-2">
                A CBJ apoiou integralmente o início da Federação, enviando professores renomados para ministrar cursos de
                padronização. A consolidação da Fejet na capital, trouxe a expansão do judô para outros locais da cidade,
                como no Marista, com o sensei Giacomini, e na GMP e Judô Fernandes, em Taquaralto, com o sensei Irisomar.
            </p>
        </div>
        <div class="two">

        </div>
        <p class="font-sans text-center">
            Turma das aulas de Judô no Ginásio de Taquaralto (Foto: Irisomar Fernandes/Acervo pessoal)
        </p>
        <div class="container-fluid mx-auto pt-6 font-hoe">
            <div class="arte">
                <img class="object-cover w-full h-full rounded-md" src="../assets/ARTE.png" alt="Imagem do carrossel">

            </div>
            <p class="font-sans text-center">
                Créditos: Liz Castro </p>
            <p class="mot text-3xl  pb-2 pt-6">
                Um dos projetos desenvolvidos na capital, e que contou com a participação de muitos judocas, foi o Projed:
                “Um projeto que alavancou o judô em Palmas na época foi o Projeto Judô na Escola (Projed). O Projed foi
                criado e bancado por mim por um pequeno período, mas a prefeitura assumiu o projeto e o implantou em quatro
                escolas da cidade. Chegamos a fazer eventos com 450 atletas nesse período. Um deles contou com a presença do
                grande atleta <a class="text-sky-400 underline"
                    href="https://ge.globo.com/judo/noticia/ex-judoca-olimpico-mario-sabino-morre-apos-desentendimento-com-colega-da-pm.ghtml">
                    Mario Sabino (Em memória) </a>”.
            </p>
        </div>
        <div
            class="bg-slate-50 font-hoe flex flex-col mx-auto text-center pt-12 justify-center lg:h-[6rem] lg:py-16 items-center lg:items-center ">

            <div class="max-w-xl">
                <h1 class="text-xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-3xl">
                    Campeonatos
                </h1>

            </div>
        </div>
        <div class="container-fluid mx-auto pt-6 font-hoe">
            <p class="mot text-3xl  pb-2 pt-6">
                O primeiro atleta a participar de uma competição oficial representando o Tocantins foi Antônio Pinheiro,
                faixa verde na época, e participou dos Jogos da Juventude, em Brasília.
            </p>
            <p class="mot text-3xl  pb-2 ">
                A primeira conquista em campeonatos aconteceu em Cuiabá (MT), no Campeonato Brasileiro Regional:
            </p>
            <p class="mot font-italic">
                “Levamos uma boa equipe para Cuiabá e trouxemos nossas primeiras medalhas para o Tocantins. Rodolfo Gadotti
                e Clarissa Vasques Souza medalharam nesse evento”, contou Irisomar.

            </p>
            <p class="mot text-3xl  pb-2">
                No Campeonato Brasileiro das Polícias e Bombeiros, Raimundo Nonato Dias de Souza, militar na época, levou a
                medalha de ouro para casa e Jaime Zacarias de Andrade, soldado na época, levou a de bronze.
            </p>
            <p class="mot text-3xl  pb-2">
                Um feito importante para a Fejet foi a realização do primeiro e único evento de abrangência nacional, até
                aquele momento, foi um campeonato organizado por equipes do qual participaram: Goiás, Brasília, Bahia e
                Tocantins.
            </p>
            <p class="mot text-3xl font-italic  pb-2">
                “Conseguimos levar nossos atletas para: Cuiabá (MT), Anápolis (GO), Inhumas (GO), Distrito Federal, Salvador
                (BA) e São Luís (MA). Todas as viagens foram feitas de ônibus, com exceção de São Luís que foi de avião, e
                sem custos de viagens para os atletas. A Federação sempre conseguia apoio do Estado e do município de Palmas
                para levar o atleta sem que ele precisasse pagar as viagens”, explicou.
            </p>
        </div>
        <div
            class="bg-slate-50 font-hoe flex flex-col mx-auto text-center pt-12 justify-center lg:h-[6rem] lg:py-16 items-center lg:items-center ">

            <div class="max-w-xl">
                <h1 class="text-xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-3xl">
                    Graduação
                </h1>

            </div>
        </div>
        <div class="container-fluid mx-auto pt-6 font-hoe">
            <p class="mot text-3xl  pb-2">
                O primeiro curso de faixas pretas foi ministrado por professores convidados e alguns da Fejet.
                Entre os formandos estavam: Victor Kasuo, Rodolfo Gadotti, Antônio Pinheiro, Fred Guerra, Juracy Giacomini,
                Marcel Giacomini entre outros.
            </p>
            <p class="mot text-3xl  pb-2">
                André Mariano dos Santos, do Distrito Federal (DF), hoje é árbitro olímpico, ministrou o curso de
                arbitragem. No ano de 2003, foi implantado o judô no curso de Formação de Oficiais da PM/TO, turma da qual
                fez parte o tenente coronel Danilo Argolo, que já era faixa preta na época e oriundo do Sergipe.
            </p>
            <ul class="list-disc pl-8">
                <li class="mb-4 mot">
                    Luiz Antônio Romariz - DF ministrou
                    <a class="text-sky-400 underline"
                        href="https://projetobudo.com.br/tecnicas-do-judo/nage-waza/gokyo/">Go-kyo-no-waza</a>
                </li>
                <li class="mb-4 mot">Dannys Queiroz - Piauí, ministrou Biomecânica do Judô</li>
            </ul>
            <p class="mot text-3xl  pb-2">
                Irisomar conta ainda do apoio que recebeu da prefeitura municipal na época:
            </p>
            <p class="font-italic mot">
                “Quando a Professora Nilmar Ruiz foi prefeita de Palmas, tivemos bastante apoio para o judô. Ela inclusive
                ia aos nossos eventos vez ou outra e o secretário de Educação e Esportes da época, o professor Osmar Nina
                Garcia Neto, 2º DAN de judô, nos ajudou muito nos projetos também”.
            </p>
            <div class="pb-6 pt-6">
                <img class="object-cover w-full h-full rounded-md" src="../assets/FOTO3.jpeg" alt="Imagem do carrossel">
            </div>
            <p class="text-center">
                Homenagem da prefeita Nilmar Gavino para todos os professores de lutas de Palmas
            </p>
            <p class="mot text-3xl  pb-2">
                O sensei recorda com carinho a trajetória que ele criou no Tocantins: “É muito importante dizer que o judô
                de Palmas e do Tocantins foi feito por muitas mãos. Todos contribuíram e merecem lugar de destaque. Tenho a
                Fejet como uma filha, o judô do Tocantins como um filho muito querido. Desejo muito sucesso a todos os
                gestores, atletas e pais”.
            </p>
        </div>
        <div
            class="bg-slate-50 font-hoe flex flex-col mx-auto text-center pt-12 justify-center lg:h-[6rem] lg:py-16 items-center lg:items-center ">

            <div class="max-w-xl">
                <h1 class="text-xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-3xl">
                    Pandemia
                </h1>

            </div>
        </div>
        <div class="container-fluid mx-auto pt-6 font-hoe">
            <p class="mot text-3xl  pb-2">
                Com a pandemia do coronavírus, o judô perdeu muitos atletas. Não apenas em Palmas, mas no estado inteiro,
                muitos jovens pararam de praticar, justamente pelo fato desse esporte envolver contato físico.
            </p>
            <div class="grid grid-cols-2 gap-4 justify-between my-4">
                <div>
                    <p>O atual presidente da Fejet (2018-2020), Georgeton Pachêco, contou como esse período prejudicou o
                        judô:</p>

                </div>
                <div>
                    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1681189788&color=%2300aabb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                    <div
                        style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                        <a href="https://soundcloud.com/aline-alencar-512381387" title="Aline Alencar" target="_blank"
                            style="color: #cccccc; text-decoration: none;">Aline Alencar</a> · <a
                            href="https://soundcloud.com/aline-alencar-512381387/audio-ton-pacheco"
                            title="Áudio Ton Pachêco" target="_blank" style="color: #cccccc; text-decoration: none;">Áudio
                            Ton Pachêco</a>
                    </div>

                </div>
            </div>
            <p class="mot text-3xl  pb-2">
                Apesar das dificuldades, o judô tem voltado, aos poucos, a se consolidar na capital e em todo o estado, como
                conta o presidente da Fejet.
            </p> <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1681188927&color=%236a0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            <div
                >
                <a href="https://soundcloud.com/aline-alencar-512381387" title="" target="_blank"
                    style="color: #cccccc; text-decoration: none;"></a> <a
                    href="https://soundcloud.com/aline-alencar-512381387/ton-pacheco-2" title="Ton Pachêco 2"
                    target="_blank" style="color: #cccccc; text-decoration: none;"></a></div>
            <p class="mot text-3xl  pb-2">
                Mais informações sobre o judô, acompanhe a seção de <router-link to="/Entrevistas"
                    class="underline text-blue-400"> entrevistas</router-link> com senseis da cidade.
            </p>
        </div>

    </header>
</template>

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
    /* font-family: 'Montserrat', sans-serif; */
    color: #213547;
}

.intro {
    background-image: url("../assets/capa.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 60vh;
    /* font-family: 'Montserrat', sans-serif; */
    color: #213547;
}

/* .arte {
    background-image: url("../assets/ARTE.png");
 
    height: 100vh;
    font-family: 'Montserrat', sans-serif; 
    color: #213547;
} */

.container {
    background-image: url("../assets/.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 60vh;
    /* font-family: 'Montserrat', sans-serif; */
    color: #213547;
}

.one {
    background-image: url("../assets/FOTO1.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: start;
    height: 50vh;
    /* font-family: 'Montserrat', sans-serif; */
    color: #213547;
}

.two {
    background-image: url("../assets/FOTO2.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 80vh;
    /* font-family: 'Montserrat', sans-serif; */
    color: #213547;
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
    /* font-family: 'Montserrat', sans-serif; */
    width: 60%;
}

.container-fluid {
    /* font-family: 'Montserrat', sans-serif; */
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