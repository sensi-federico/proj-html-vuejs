<script>
import JumbotronSlider from './JumbotronSlider.vue';
import ServicesCards from './ServicesCards.vue';
import TextHr from './TextHr.vue';
import { store } from '../store.js'

export default {
    name: 'AppMain',
    components: {
        JumbotronSlider,
        ServicesCards,
        TextHr
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <main id="site_main">
        <!-- jumbotron slider -->
        <JumbotronSlider />

        <!-- services -->
        <section class="services">
            <div class="container">
                <div class="row">
                    <!-- text -->
                    <div class="col-5 text">
                        <h1>
                            We are here to make your
                            <span>website</span>
                            look more
                            <span>elegant</span>
                            and stylish!
                        </h1>
                        <TextHr />
                        <button>view all</button>
                    </div>
                    <!-- card -->
                    <div class="col cards">
                        <div class="row row-cols-2 g-4">
                            <ServicesCards />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- missons -->
        <section class="missions py-5">
            <div class="row row-cols-2 py-5">
                <!-- image -->
                <div class="col-6 image">
                    <img class="first-image" src="../../public/images/busy-architect-PYVKWM4-1024x872.jpg" alt="">
                    <img class="second-image"
                        src="../../public/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
                </div>
                <!-- text -->
                <div class="col-6 text my-5">
                    <h1>Learn more <br> about our <br> <span>missions</span> </h1>
                    <TextHr />
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit doloribus alias quidem
                        dicta, doloremque distinctio temporibus mollitia fugiat rem possimus illum.
                    </p>
                    <button>read more</button>
                </div>
            </div>
        </section>

        <!-- projects -->
        <section class="projects">
            <div class="container">
                <div class="title-text d-flex">
                    <div class="row">
                        <!-- title -->
                        <div class="col">
                            <div class="title">
                                <TextHr />
                                <h1>Our recent <span>web designs</span> & some examples of <br> past
                                    <span>projects</span>
                                </h1>
                                <TextHr />
                            </div>
                        </div>
                        <div class="col">
                            <!-- text -->
                            <div class="text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem placeat et iusto
                                    beatae
                                    excepturi dolores perspiciatis veritatis molestiae enim, labore, eos aspernatur,
                                    quam
                                    hic?
                                    Temporibus excepturi obcaecati facilis. Temporibus doloremque dolor rem aperiam
                                    quaerat
                                    incidunt nisi odio debitis quam in ea accusantium velit deleniti.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- cards -->
                <div class="container">
                    <div class="row row-cols-4 pt-4">
                        <div class="col" v-for="(image, i) in store.projectsCards">
                            <img :src="store.projectsCards[i]" alt="">
                        </div>
                    </div>
                    <div class="button d-flex justify-content-center">
                        <button>read more</button>
                    </div>
                    <div class="vertical">
                        17 years of experience helping people for best solutions
                    </div>
                </div>
            </div>
        </section>

        <!-- showcase -->
        <section class="showcase">
            <div class="container d-flex">
                <!-- stats -->
                <div class="stats">
                    <img src="../../public/images/person-with-long-curly-hair-PZ99QM2-2x.jpg" alt="">
                </div>
                <div class="stats-cover">
                    <div class="cover">
                        <div class="top text-center">
                            <h1>280</h1>
                            <h2>projects</h2>
                        </div>
                        <div class="bottom d-flex align-items-center">
                            <div class="left pe-4 text-center">
                                <h1>+3,500</h1>
                                <h2>users' comments</h2>
                            </div>
                            <div class="center"></div>
                            <div class="right ps-4 text-center">
                                <h1>100%</h1>
                                <h2>happy clients</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- text -->
                <div class="text">
                    <h1>We <span>love</span> what <br> we do</h1>
                    <TextHr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem alias labore perferendis
                        laudantium repellat, odit natus fugit doloribus placeat asperiores, aut aliquam voluptas
                        reprehenderit. Atque architecto recusandae incidunt laboriosam.
                        reprehenderit. Atque architecto recusandae incidunt laboriosam.
                        recusandae incidunt laboriosam.
                    </p>





                    <!-- da rendere dinamico se avanza tempo -->


                    <div class="icons d-flex align-items-center pt-3">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        <p class="ms-2">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="icons d-flex align-items-center pt-1">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        <p class="ms-2">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="icons d-flex align-items-center pt-1">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        <p class="ms-2">Lorem ipsum dolor sit amet.</p>
                    </div>



                </div>
            </div>
        </section>

        <!-- packs - offers -->
        <section class="packs">
            <div class="container">
                <div class="row d-flex align-items-center">
                    <!-- text -->
                    <div class="col-4 text">
                        <h1>With <span class="green">live chat <br> 24/7 </span>support </h1>
                        <TextHr />
                        <p class="text-muted">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit doloribus alias
                            quidem
                            dicta, doloremque distinctio temporibus mollitia fugiat rem possimus illum.
                        </p>
                    </div>
                    <!-- cards -->
                    <div class="col-8">
                        <div class="row row-cols-3">
                            <div class="col" v-for="(pack, i) in store.packs">
                                <div class="my-cards text-center">
                                    <!-- top card -->
                                    <div class="top pt-2"
                                        :class="store.packs[i].title === 'development' ? 'green-card' : 'black-card'">
                                        <!-- banner -->
                                        <div class="banner mt-2">
                                            <h4>{{ store.packs[i].title }}</h4>
                                            <p class="text-muted m-0 pb-2">{{ store.packs[i].subtitle }}</p>
                                        </div>
                                        <h1 class="text-white price">{{ store.packs[i].price }}
                                            <span class="small">{{ store.packs[i].work }}</span>
                                        </h1>
                                    </div>
                                    <!-- bottom card -->
                                    <div class="bottom pt-5 pb-3">
                                        <p class="m-0 pb-3" v-for="(offer, i) in store.offers">
                                            <i class="fa fa-check" aria-hidden="true"></i>
                                            {{ store.offers[i] }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- comment -->
        <section class="comment">
            <div class="scale"></div>
            <div class="content text-center">
                <i class="fa-solid fa-quote-left"></i>
                <p class="long">
                    When it comes to barbequing, there are two min schools of thought fore the <br> techniques that you
                    can use, Freshly scrambled eggs with applewood smoked bacon <br> - are amazing!
                </p>
                <img src="../../public/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">

                <h4>lissa durbin</h4>
                <p>Client</p>
            </div>
        </section>

        <!-- latest news -->
        <section class="news">
            <!-- text -->
            <div class="text d-flex flex-column align-items-center">
                <h1>Latest News & Our <span>Blog</span></h1>
                <TextHr />
            </div>
            <!-- card -->
            <div class="cards">
                <div class="container">
                    <div class="row row-cols-3">
                        <div class="col" v-for="(card, i) in store.blogCards">
                            <!-- image -->
                            <div class="card-image">
                                <img :src="store.blogCards[i].image" alt="">
                            </div>
                            <!-- banner -->
                            <div class="banner">
                                <p class="text-muted">
                                    {{ store.blogCards[i].date }}
                                </p>
                                <!-- title -->
                                <div class="title d-flex align-items-center">
                                    <div class="circle-green"></div>
                                    <h4 class="m-0 ps-3">{{ store.blogCards[i].title }}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- button -->
                    <div class="button d-flex justify-content-center">
                        <button>view all post</button>
                    </div>
                    <div class="vertical">
                        17 years of experience helping people for best solutions
                    </div>
                </div>
            </div>
        </section>

        <!-- contact -->
        <section class="contact">
            <div class="container">
                <div class="row row-cols-2">
                    <!-- left-card -->
                    <div class="col">
                        <div class="left-card d-flex flex-column align-items-center">
                            <p class="text-muted mb-2">
                                Are You Ready?
                            </p>
                            <h2 class="mb-3 text-white">Start a New Project</h2>
                            <div class="submit">
                                <input type="email" placeholder="Enter Your Email Address">
                                <button>submit</button>
                            </div>
                        </div>
                    </div>
                    <!-- right-card -->
                    <div class="col">
                        <div class="right-card d-flex flex-column align-items-center">
                            <p class="text-muted mb-2">
                                What Are You Waiting for?
                            </p>
                            <h2 class="mb-3 text-white">Let's Talk About Work</h2>
                            <div class="start">
                                <button>start now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row row-cols-6">
                        <div class="col" v-for="(logo, i) in store.partnerLogo">
                            <div class="image">
                                <img :src="store.partnerLogo[i]" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
    <!-- #site_main -->

</template>

<style lang="scss">
#site_main {

    .services {
        background-color: #F9F9F9;
        padding: 8rem 0;

        .text {

            padding-right: 10rem;
            padding-top: 4rem;

            button {
                text-transform: uppercase;
                background: #00D9A6;
                border: none;
                padding: .5rem 1rem;
                border-radius: 2rem;
                color: white;
                font-size: small;
                margin-top: 2rem;
            }

            h1 {
                font-size: 45px;
                text-transform: capitalize;
            }

            span {
                color: #00D9A6;
            }
        }
    }

    .missions {

        .image {
            .first-image {
                width: 70%;
                border-top-right-radius: 1rem;
                position: relative;
                left: -1rem;
            }

            .second-image {
                position: absolute;
                top: 100rem;
                left: 10%;
                width: 35%;
                border-radius: .5rem;
            }
        }

        button {
            text-transform: uppercase;
            background: #00D9A6;
            border: none;
            padding: .5rem 1rem;
            border-radius: 2rem;
            color: white;
            font-size: small;
            margin-top: .5rem;
        }

        span {
            color: #00D9A6;
        }
    }

    .projects {
        padding: 5rem 0;

        .title {
            h1 {
                font-size: 50px;
                padding-bottom: 1rem;
            }

            span {
                color: #00D9A6;
            }
        }

        .text {
            padding-top: 10rem;
            font-size: small;
        }


        .vertical {
            position: absolute;
            transform: rotate(-90deg);
            top: 173rem;
            right: -7rem;
            font-size: small;
        }


        .col {
            padding: 0 0 !important;
        }

        button {
            text-transform: uppercase;
            background: #00D9A6;
            border: none;
            padding: .5rem 1rem;
            border-radius: 2rem;
            color: white;
            font-size: small;
            margin-top: 5rem;
        }
    }

    .showcase {
        padding: 10rem 0;
        background: #f5f5f5;

        .stats {
            img {
                width: 690px;
                height: 480px;
                border-radius: .5rem;
            }
        }

        .stats-cover {
            background-color: #00D9A6;
            width: 690px;
            height: 480px;
            border-radius: .5rem;
            position: absolute;
            left: 4.5rem;
            opacity: 0.9;

            .cover {

                scale: 1.3;

                .top {
                    color: white;
                    position: relative;
                    right: 2rem;
                    top: 7rem;

                    h1 {
                        font-size: 50px;
                    }

                    h2 {
                        font-size: 10px;
                        text-transform: uppercase;
                    }
                }

                .bottom {
                    position: relative;
                    top: 8rem;
                    left: 12rem;
                    color: white;

                    h1 {
                        font-size: 25px;
                    }

                    h2 {
                        font-size: 10px;
                        text-transform: uppercase;
                    }

                    .center {
                        height: 100px;
                        width: 2px;
                        background-color: #f5f5f5;
                        opacity: 0.3;
                    }
                }

            }
        }

        .text {
            background: white;
            box-shadow: 0 2px 4px 0 rgba(152, 150, 150, 0.2), 0 3px 10px 0 rgba(146, 144, 144, 0.19);
            width: 700px;
            padding: 5rem;
            border-radius: .5rem;
            position: absolute;
            right: 4.5rem;
            top: 220rem;
            text-transform: capitalize;

            p {
                font-size: small;
            }

            i {
                color: #00D9A6;
            }

            span {
                color: #00D9A6;
            }
        }
    }

    .packs {
        padding: 15rem 0 8rem 0;
        background-color: #f5f5f5;

        .text {

            span.green {
                color: #00D9A6;
            }

            span.small {
                font-size: large;
            }
        }

        .my-cards {
            border-radius: 1rem;
            box-shadow: 0 2px 4px 0 rgba(152, 150, 150, 0.2), 0 3px 10px 0 rgba(146, 144, 144, 0.19);

            .top {
                border-top-left-radius: 1rem;
                border-top-right-radius: 1rem;
            }

            .bottom {
                background-color: white;
                border-bottom-left-radius: 1rem;
                border-bottom-right-radius: 1rem;

                p {
                    text-transform: capitalize;
                }
            }

            .green-card {
                background-color: #00D9A6;
            }

            .black-card {
                background-color: black;
            }

            .banner {
                background-color: white;
                padding: .5rem;

                h4 {
                    text-transform: uppercase;
                }
            }

            .price {
                padding: 1.5rem 0;
                margin: 0;
            }
        }

    }

    .comment {
        background-image: url('../../public/images/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg');
        background-size: cover;
        background-position: 0 -10rem;
        color: white;

        .scale {
            height: 610px;
            width: 100%;
            background-color: black;
            position: absolute;
            opacity: .8;
        }

        .content {
            padding: 6rem 0;
            position: relative;

            i {
                font-size: 50px;
                color: #00D9A6;
                padding-bottom: 2rem;
            }

            p.long {
                padding-bottom: 3rem;
                font-style: italic;
            }

            img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                object-fit: cover;
                margin-bottom: 1.5rem;
            }

            h4 {
                color: #00D9A6;
                text-transform: uppercase;
            }
        }
    }

    .news {
        padding-top: 10rem;
        padding-bottom: 5rem;

        span {
            color: #00D9A6;
        }

        .cards {

            .card-image {
                img {
                    border-radius: .5rem;
                    box-shadow: 0 4px 8px 0 rgba(104, 104, 104, 0.2), 0 6px 20px 0 rgba(110, 109, 109, 0.19);
                }
            }

            .banner {
                background-color: white;
                box-shadow: 0 2px 4px 0 rgba(152, 150, 150, 0.2), 0 3px 10px 0 rgba(146, 144, 144, 0.19);
                width: 90%;
                padding: 1.5rem;
                position: relative;
                top: -4rem;
                left: 1.3rem;
                border-radius: .5rem;
            }

            .title {
                .circle-green {
                    height: 10px;
                    width: 10px;
                    background-color: #00D9A6;
                    border-radius: 50%;
                }
            }

            button {
                text-transform: uppercase;
                background: black;
                border: none;
                padding: .5rem 1rem;
                border-radius: 2rem;
                color: white;
                font-size: small;
            }

            .vertical {
                position: relative;
                transform: rotate(-90deg);
                font-size: small;
                bottom: 47.5rem;
                left: -42rem;
            }
        }
    }

    .contact {
        padding: 5rem 0;

        .left-card {
            background: black;
            padding: 3rem;
            border-radius: 1rem;

            .submit {
                margin-top: 2.5rem;

                input {
                    border: none;
                    padding: .5rem 1rem;
                    width: 300px;
                    border-top-left-radius: 2rem;
                    border-bottom-left-radius: 2rem;
                    background-color: gray;
                }

                button {
                    padding: .7rem;
                    border: none;
                    padding-bottom: .58rem;
                    background-color: gray;
                    text-transform: uppercase;
                    border-top-right-radius: 2rem;
                    border-bottom-right-radius: 2rem;
                    font-size: small;
                    color: white;
                }
            }
        }

        .right-card {
            background: #00D9A6;
            padding: 3rem;
            border-radius: 1rem;

            button {
                padding: .7rem;
                border: none;
                padding-bottom: .58rem;
                background-color: black;
                text-transform: uppercase;
                border-radius: 2rem;
                font-size: small;
                color: white;
                margin-top: 2.5rem;
            }
        }

        .image {
            margin-top: 5rem;
            padding-left: 4rem;

            img {
                height: 40px;
                width: 50%;
            }
        }
    }
}
</style>