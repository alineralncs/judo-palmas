
<script>
export default {
    data() {
        return {
            activeTab: 0,
            tabs: [
                { name: 'Celso Galdino' },
                { name: 'Victor Kasuo' },
                { name: 'Rômullo Laivno' },
            ],
        };
    },
    methods: {
        selectTab(index) {
            this.activeTab = index;
        },
    },
};
</script>
<template>
    <div
        class="bg-slate-50 font-hoe flex flex-col mx-auto text-center  justify-center lg:h-[12rem] lg:py-16 items-center lg:items-center ">

        <div class="max-w-xl">
            <h1 class="text-xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-3xl"> Conheça os
                principais personagens do judô que fizeram de Palmas uma cidade mais aberta às academias
            </h1>

        </div>
    </div>
    <div>
        <div class="flex space-x-4 mx-auto justify-center">
            <button v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)"
                :class="{ 'border-b': activeTab === index, 'border-sky-400 ': activeTab === index, 'text-gray-700': activeTab !== index }"
                class="px-4 py-2 text-2xl cursor-pointer border-b-4">
                {{ tab.name }}
            </button>
        </div>

        <div>
            <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
                <!-- Conteúdo da Tab -->
                <div class="container-fluid mx-auto pt-6 font-hoe">


                    <!-- Seu conteúdo para cada aba aqui -->
                    <template v-if="tab.name === 'Celso Galdino'">
                        <p class="mot text-3xl pb-2 pt-6 ">

                        <p class="mot text-3xl pb-2 pt-6 ">
                            Celso Galdino é professor de judô em Palmas desde o início do ano de 2005 e é graduado na
                            faixa vermelha e
                            branca de 6º Dan (KODANSHA)”.
                        </p>
                        <p class="mot text-3xl  pb-2 ">
                            Desde 2004 ele possui contato com o judô local, e tudo se iniciou por meio de uma mãe de
                            atleta da
                            Associação
                            Japonesa de Palmas.
                        </p>
                        <div class=" mx-auto  font-hoe ">
                            <div class="celsso mx-auto flex justify-center items-center">
                                <img src="../assets/ceslo.jpg" alt="celso" class="rounded-lg  h-80">

                            </div>

                            <p class="mot text-3xl pb-2 ">
                                Galdino foi para a academia do sensei Herbert Giacomini que funcionava na antiga academia
                                Corpus. Estavam
                                treinando para o primeiro exame de faixas pretas, onde ele conheceu os outros professores:
                                sensei Irisomar
                                Fernandes, sensei Georgton Pacheco e sensei Said (que dava aulas de judô em Dianópolis).
                            </p>
                            <p class="mot text-medium rounded-lg pt-6">
                                Você também faz parte da Fejet (Federação de Judô do Estado do Tocantins), certo? Há quanto
                                tempo?
                            </p>
                            <p class="mot rounded-lg font-italic ">
                                Celso Galdino: Fiz parte do quadro de diretores e dirigentes da FEJET de 2005 até 2021
                                quando solicitei meu
                                afastamento. Fiz parte de todas as gestões até me afastar.
                            </p>
                            <p class="mot text-medium rounded-lg pt-6">

                                No começo da criação do estado e da capital, como era o cenário do Judô na nossa cidade?
                                Lembra das
                                dificuldades
                                ou facilidades que foram enfrentadas na época?
                            </p>
                            <p class="mot rounded-lg font-italic ">
                                Celso Galdino: Quando eu cheguei o judô já estava implantado na capital pelos professores
                                acima
                                relacionados,
                                mas a grande dificuldade para a realização de torneios era a falta de material, pois
                                tínhamos de buscar
                                tatames
                                em diversos locais para levar até onde seria realizado o evento. Não tínhamos mesas,
                                cadeiras nem material
                                eletrônico como temos hoje à disposição da federação. </p>
                            <p class="mot text-medium rounded-lg pt-6 ">
                                Quem foram os primeiros a insistirem na criação da federação para o estado? </p>
                            <p class="mot rounded-lg font-italic ">

                                Celso Galdino: Os criadores da Federação de Judô do Estado do Tocantins (Fejet). Foram eles:
                                sensei Irisomar
                                Fernandes, sensei Herbert Giacomini e sensei Georgton Pacheco. Sendo o sensei Irisomar
                                Fernandes o 1º
                                presidente
                            </p>
                            <p class="mot text-medium rounded-lg pt-6 ">
                                Atualmente, como você vê o cenário do judô em Palmas?
                            </p>
                            <p class="mot rounded-lg font-italic ">
                                Celso Galdino: Vejo o judô em Palmas sobrevivendo graças ao empenho dos professores que não
                                contam muito com
                                a
                                atuação da Federação que não incentiva, que deixou de promover o Ranking Tocantinense que
                                era o que dava
                                motivação para os atletas participarem somando pontos para no final do ano serem coroados
                                campeões do
                                Ranking.
                                Temos trabalhos excelentes sendo desenvolvido em Palmas, pelo sensei Heynner no Colégio
                                Militar dos
                                Bombeiros e
                                demais professores que ministram judô. Sendo que alguns se afastaram devido a inércia da
                                Federação.
                            </p>
                            <p class="mot text-medium pt-6">
                                Como você vê a sua participação na construção desse processo?
                            </p>
                            <p class="mot rounded-lg font-italic ">
                                Celso Galdino: Creio ter contribuído bastante para a melhoria do judô em nossa capital,
                                capacitando os
                                oficiais
                                de mesa, melhorando a gestão de competições e sempre colaborando com o desenvolvimento de
                                nosso esporte até
                                solicitar para sair.
                                Como professor responsável pela Associação de Judô Nipo, dos cerca de 230 federados que
                                temos no quadro da
                                FEJET, hoje temos 95 federados. Como Professor responsável pela associação que mais inscreve
                                atletas nos
                                eventos
                                de judô e que procura levar os alunos para intercâmbios fora do estado. Tendo formado 20
                                faixas pretas de
                                nossa
                                academia e sendo o professor responsável pelo Curso de Graduação dos Exames de Faixa Preta
                                da Fejet há mais
                                de 6
                                anos. E por acreditar que podemos melhorar este panorama, incentivando melhor os
                                professores, agregando os
                                os atletas nós ainda continuamos nesta jornada até que as coisas fiquem melhores.

                            </p>
                            <div class="grid grid-cols-2 gap-4 justify-between my-4">
                                <img src="../assets/celsob.jpg" alt="celso" class="rounded-lg  ">
                                <img src="../assets/celsog.jpg" alt="celso" class="rounded-lg ">
                            </div>



                        </div>
                        </p>
                        <!-- Adicione mais conteúdo conforme necessário -->
                    </template>

                    <template v-else-if="tab.name === 'Victor Kasuo'">
                        <div class=" mx-auto  font-hoe ">

                            <p class="mot text-3xl pb-2 pt-12 ">
                                No final dos anos 90, o judô começou a ser praticado na cidade de Palmas/TO. E, desde então,
                                ganhou o gosto dos palmenses que foram tendo contato com a modalidade, desde de escolas de
                                ensino básico até a força policial e de bombeiros da cidade.

                            </p>
                            <p class="mot text-3xl pb-2">
                                Com a fundação da Federação de Judô do Estado do Tocantins, muitos senseis foram formados e,
                                a partir deles, o judô foi se difundindo para outras cidades do estado.
                            </p>
                            <p class="mot text-3xl pb-2">
                                Na primeira turma de formandos da Fejet estava Victor Kasuo. Victor Kasuo é diretor do
                                Instituto Henko, em Palmas, faixa preta 1º Dan de Jūdō (CBJ/Brasil); faixa preta 5º Dan de
                                Jūdō Tradicional (KRN/Espanha) e co-autor do livro internacional integrado ao Instituto
                                Kōdōkan (Tóquio, Japão).
                            </p>
                            <p class="mot text-3xl pb-2">
                                Nesta entrevista, Kasuo conta um pouco de sua trajetória no judô, desde que começou a
                                praticar na infância, até começar a ministrar aulas na cidade.

                            </p>
                            <p class="mot text-medium rounded-lg pt-6">
                                Como você teve contato com o judô?
                            </p>
                            <p class="mot rounded-lg font-italic ">
                                O primeiro contato direto que eu tive com o judô foi em 2000, quando eu tinha 11 anos de
                                idade. Foi na escola, se eu não me engano, numa aula de educação física, que a gente se
                                reuniu para assistir uma apresentação de judô, porque ia começar a ter judô na escola. Achei
                                muito bonita a apresentação. Naquela época também eu sofria muito bullying, então comecei a
                                fazer judô como uma forma de autodefesa.
                            </p>
                            <p class="mot text-medium rounded-lg pt-6 ">
                                Como você vê a evolução do judô desde a época em que você treinava até os dias atuais?
                            </p>
                            <p class="mot rounded-lg font-italic ">
                                O que eu me recordo é que no início nós tínhamos poucas competições. Nós tínhamos uma
                                competição por ano, às vezes duas competições por ano. E de vez em quando nós fazíamos
                                visitas aqui e ali, um tipo de inter-estadual com o pessoal de Goiás. Depois de 2003, 2004,
                                que fundou a formalizada federação, a gente começou a ter um pouco mais de oportunidade para
                                participar de campeonatos grandes e tudo mais. Anos depois, já com a federação formada e
                                tal, eu sei que o número de competições aumentou bastante. Começaram a ter quatro, cinco,
                                seis campeonatos por ano. Fora o forte peso de conseguir mandar atletas para o campeonato
                                brasileiro regional e campeonatos grandes. Porém, acredito eu que após a pandemia houve uma
                                queda de atletas em competição. Eu acho que talvez isso possa refletir uma desistência de
                                judocas após a pandemia ou mesmo um baixo nível de procura depois da pandemia. Posso estar
                                errado, mas é porque nós geralmente observamos os atletas que têm em outras academias. Eu
                                percebo que reduziu bastante o número de atletas.
                            </p>
                            <p class="mot text-medium rounded-lg pt-6 ">
                                Quando você veio para Palmas qual era o cenário do Judô naquela época aqui na cidade? Tinha
                                espaço para a prática de judô, pessoas querendo praticar e senseis à disposição?
                            </p>
                            <p class="mot rounded-lg font-italic ">
                                Eu comecei a fazer judô quando eu já estava morando em Palmas e depois fui fazer alguns
                                treinos em São Paulo. Só que naquela época, eu não vou me recordar tão bem, porque eu era
                                muito novo, eu pensei que haviam três professores, havia o Herbert Giacomini, que dava aula
                                no Colégio Marista, o Erisiomar Fernandes, que dava aula na Guarda Metropolitana, e tinha o
                                Jorge Pacheco, que dava aula na no Colégio ULBRA. Tinha bastante gente ali no Marista e na
                                Ulbra, pelo que eu me lembro. Em Palmas eu cheguei a treinar um bom tempo com o sensei
                                Herbert Giacomini, com o sensei Celso Galdino e também treinei com meu pai, mas os treinos
                                que eu fazia com meu pai eram mais dentro de casa, não eram em academias.
                            </p>
                            <p class="mot text-medium rounded-lg pt-6 ">
                                O que te motivou a participar do projeto UFT em Movimento? </p>
                            <p class="mot rounded-lg font-italic  ">
                                O que me motivou, na verdade, foram alguns alunos meus, que eu dei aula na minha primeira
                                turma, lá em 2011, que se tornaram acadêmicos da UFT, que propuseram que eu fosse dar aula
                                lá. A UFT me acolheu bem e acho que um dos nossos principais objetivos é poder desenvolver
                                um judô com alta qualidade e que a gente possa alcançar públicos que talvez não tivessem
                                essa oportunidade de participar de judô ou de artes marciais. É um espaço que é gratuito,
                                então podemos alcançar um público que às vezes não teria uma condição para poder treinar
                            </p>
                            <p class="mot text-medium rounded-lg pt-6 ">
                                Acha que tem variedade de espaços o suficiente na capital?
                            </p>
                            <p class="mot font-italic">
                                Sobre a questão da variedade de academias, o judô é bem forte em escolas. Tem várias escolas
                                que têm judô. Eu acho que o judô poderia alcançar mais escolas, mas aí depende muito de ter
                                professores interessados em dar aula para a escola. Eu acredito sim que haja um bom número
                                de academias de judô na cidade, mas talvez não o suficiente para estar em todos os grandes
                                pontos, porque no sul da cidade, em Taquaralto e Aurenys, que eu saiba tem uma academia de
                                judô, em Taquari também tem um projeto social que funciona. Tem alguns locais que carecem
                                ainda de professores.
                            </p>
                            <p class="mot text-medium rounded-lg pt-6 ">

                                O Instituto Henko não é federado pela Fejet, certo? Quem federa o Instituto Henko e como
                                isso funciona?
                            </p>
                            <p class="mot rounded-lg font-italic ">
                                Hoje em dia o Instituto Henko, que é o meu dojo, ele não é vinculado à Fejet, a Federação
                                Judô do Estado do Tocantins, e consequentemente não está vinculado à CBJ, a Confederação
                                Brasileira de Judô. O meu dojo está vinculado à Kano Ryu Nihon Jujutsu International School,
                                uma escola de judô clássico, como eles chamam, e judô japonês. Ela tem como objetivo
                                resgatar todos os aspectos do judô que foram negligenciados pelo mundo esportivo. Nós não
                                temos nenhum tipo de atrito ou conflito com o judô esportivo, nós apoiamos, porém, nosso
                                caminhar é outro. Nós buscamos esse judô de forma completa e voltado também para a defesa
                                pessoal, que nós achamos bastante importante.
                            </p>
                        </div>

                        <div class="victor">

                        </div>
                        <p class="font-sans justify-center text-center items-center">
                            À esquerda, o sensei Victor Kasuo explica a sequência de golpes para os seus alunos.
                            <br>
                            Fonte: Lizânia Castro
                        </p>

                        <p class="mot rounded-lg font-italic">
                            Nossos certificados são emitidos pela Kano Ryu, que tem sua sede em Madrid, na Espanha, porque o
                            sensei José Caracena, diretor e fundador da escola, reside lá. Mas a Kano Ryu eu acho que já
                            alcançou professores em mais de 20 países, e temos vínculos com o Kodokan também. Foi através da
                            Kano Ryu que tive a oportunidade de ser co-autor de um livro de Kata, que foi parar na
                            biblioteca do Kodokan, que está sendo utilizado como livro de estudo lá. A gente consegue umas
                            conquistas muito interessantes também estando na Kano Ryu.

                        </p>
                    </template>

                    <template v-else-if="tab.name === 'Rômullo Laivno'">
                        <div class=" mx-auto  font-hoe ">

                            <p class="mot text-3xl pb-2 pt-12 ">
                                Imagine se o judô pudesse ser traduzido para além dos tatames, transformando-se em um guia
                                para equilibrar as complexidades da vida cotidiana? Trabalho, estudo, treino, as tarefas são
                                como adversários que demandam equilíbrio.

                            </p>
                            <p class="mot text-3xl pb-2">
                                O exemplo disso é Rômullo Laivno Labre, um judoca que não apenas domina os fundamentos do esporte, mas também se aventura nos intricados movimentos das finanças como membro do Conselho Fiscal da Federação.
                            </p>
                            <p class="mot text-3xl pb-2">
                                A oportunidade de contribuir para algo que representa uma parte essencial de sua jornada traz grande satisfação a Labre. Crescer com o judô e, hoje, ser reconhecido na comunidade judoca tanto profissionalmente quanto como praticante é motivo de orgulho.
                            </p>

                            <p class="mot text-3xl pb-2 ">
                                Mesmo com todas as suas contribuições, Laivno almeja mais. Seus olhos estão fixos em metas elevadas, aspirando a ser Kodansha, um mestre, uma faixa coral de judô. Neste ano, ele planeja conquistar o primeiro dan, shodan, e realizar o exame para nidan.
                            </p>
                            <p class="mot text-3xl pb-2  ">
                                Para Labre, o judô é mais do que simples medalhas. Ele teve a oportunidade única de treinar com atletas de campeonatos mundiais, medalhistas olímpicos, e sua experiência no Canadá foi marcante. O judô, segundo ele, abre portas, e seu sonho é viver no Japão, o berço do judô, treinando na primeira escola de ciência jubilocana, a Kodokan.
                            </p>
                            <p class="mot text-3xl pb-2 ">

Neste relato, Rômullo não apenas revela a profundidade de sua paixão pelo judô, mas também destaca como essa arte marcial transcende os limites dos tatames, moldando não apenas o corpo, mas também os sonhos e aspirações de quem a pratica. O judô é mais que uma prática esportiva; é uma filosofia que orienta a vida de Rômullo Laivno Labre, guiando-o em cada movimento, dentro e fora do tatame.
                            </p>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.row {
    background-image: url("../assets/img--.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 50vh;
    /* font-family: 'Montserrat', sans-serif; */
    color: #213547;
}

.victor {
    background-image: url("../assets/victor.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: start;
    height: 70vh;
    /* font-family: 'Montserrat', sans-serif; */
    color: #213547;
    padding-top: 10px;

}

.celso {
    background-image: url("../assets/ceslo.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: start;
    height: 70vh;
    /* font-family: 'Montserrat', sans-serif; */
    color: #213547;

}


.row::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
}

.titulo {
    font-family: 'Montserrat', sans-serif;
}

.container {
    width: 60%;
}

.container-fluid {

    width: 50%;
}

.mot {
    font-size: 1.3rem;
    color: black;
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
}
</style>