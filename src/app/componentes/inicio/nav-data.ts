import { INavbarData } from "./helper";

export const navbarData : INavbarData[] =
[
    {
        routeLink:'perfil',
        icon:'fa fa-users',
        label:'Grupos'
    },
    {
        routeLink:'buscar',
        icon:'fa fa-search',
        label:'Buscar'
    },
    {
        routeLink:'cursos',
        icon:'fa fa-university',
        label:'Cursos',
        expanded: false,
        // items:
        // [
        //     {
        //         routeLink:'cursos/lista1.1',
        //         label:'Curso 1.1',
        //         items:
        //         [
        //             {
        //                 routeLink:'cursos/lista2.1',
        //                 label:'Curso 1.1.2'
        //             },
        //             {
        //                 routeLink:'cursos/lista2.2',
        //                 label:'Curso 1.1.3',
        //                 items:
        //                 [
        //                     {
        //                         routeLink:'cursos/lista3.1',
        //                         label:'Curso Pro'
        //                     }
        //                 ]
        //             }
        //         ]
        //     },
        //     {
        //         routeLink:'cursos/lista1.2',
        //         label:'Curso 1.2'
        //     },
        // ]
    },
    {
        routeLink:'/login',
        icon:'fa fa-sign-out',
        label:'Cerrar sesión'
    }
];