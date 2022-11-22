
import { reactive } from 'vue'

export const store = reactive({
    linksHeader: [
        {
            text: 'home',
            url: '#'
        },
        {
            text: 'about',
            url: '#'
        },
        {
            text: 'services',
            url: '#'
        },
        {
            text: 'showcase',
            url: '#'
        },
        {
            text: 'blog',
            url: '#'
        },
        {
            text: 'contact',
            url: '#'
        },
    ],
    linksFooter: [
        {
            text: 'carrers',
            url: '#'
        },
        {
            text: 'news',
            url: '#'
        },
        {
            text: 'terms of use',
            url: '#'
        },
        {
            text: 'privacy projects',
            url: '#'
        },
        {
            text: 'about',
            url: '#'
        },
        {
            text: 'contact',
            url: '#'
        },
    ],
    slides: [
        {
            image: '../public/images/Group-35-2x.png',
            subtitle: '17 years of experience',
            title: 'Focus on Your',
            span: 'Business',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove'
        },
        {
            image: '../public/images/Group-36-2x.png',
            subtitle: '17 years of experience',
            title: 'Focus on Your',
            span: 'Business',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove'
        },
        {
            image: '../public/images/Group-40-2x.png',
            subtitle: '17 years of experience',
            title: 'Focus on Your',
            span: 'Business',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove'
        },
    ],
    servicesCards: [
        {
            icon: 'fa-solid fa-gauge-high',
            title: 'speed optimization',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sint repellendus ex vitae magni fugiat.'
        },
        {
            icon: 'fa-solid fa-cloud',
            title: 'cloud solutions',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sint repellendus ex vitae magni fugiat.'
        },
        {
            icon: 'fa-solid fa-tablet-screen-button',
            title: 'website design',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sint repellendus ex vitae magni fugiat.'
        },
        {
            icon: 'fa-solid fa-stopwatch',
            title: 'online marketing',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sint repellendus ex vitae magni fugiat.'
        },
    ],
    projectsCards: [
        '../public/images/ina-soulis-227104-unsplash-1024x1024.jpg',
        '../public/images/sunisa-misa-531163-unsplash-1024x1024.jpg',
        '../public/images/355H-1024x1024.jpg',
        '../public/images/photo-1448932252197-d19750584e56-1024x1024.jpg',
        '../public/images/business-competition-PB366D8-1024x1024.jpg',
        '../public/images/cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg',
        '../public/images/aa9a4539-PQGJ7HU-1024x1024.jpg',
        '../public/images/cody-davis-253928-unsplash-1024x1024.jpg',
    ],


    activeImage: 0,
    activeSlide: 0,
    slideThree() {
        store.activeImage = 0
        store.activeSlide = 0
        store.activeImage = 2
        store.activeSlide = 2
        console.log('slide 3')
    },
    slideTwo() {
        store.activeImage = 0
        store.activeSlide = 0
        store.activeImage = 1
        store.activeSlide = 1
        console.log('slide 2')
    },
    slideOne() {
        store.activeImage = 0
        store.activeSlide = 0
        store.activeImage = 0
        store.activeSlide = 0
        console.log('slide 1')
    },

})