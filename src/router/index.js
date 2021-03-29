import VueRouter from 'vue-router';

//import HomeView from '@/views/HomeView'
//import ContactFormInitialPage from '@/components/contactForm/InitialPage'
//import ContactFormAuthor from '@/components/contactForm/Author'
//import ContactFormContactForm from '@/components/contactForm/ContactForm'
import UsersView from '@/components/users2/UsersView'

const routes = [
    
    {path: '/', component: UsersView},
    /*
    {path: '/contactForm', component: ContactFormInitialPage, name: 'contactFormInitialPage'},
    {path: '/contactForm/contact', component: ContactFormContactForm, name: 'contactForm'},
    {path: '/contactForm/author', component: ContactFormAuthor, name: 'author'},*/
];

const router = new VueRouter( {routes} );

export default router;

router.beforeEach((to, from, next) => {
    console.log("Navigating to " + to.name);
    next();
})