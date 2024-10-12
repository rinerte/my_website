
import { useHttp } from "./HttpHook";
import Space from '../assets/img/project_covers/spaceShooter.jpg';
import Profile from '../assets/img/project_covers/profile.jpg';
import SeaBattle from '../assets/img/project_covers/sea-ship.jpg';
import Racing from '../assets/img/project_covers/racing.jpg';
import Banking from '../assets/img/project_covers/banking.png';
import Veterinar from '../assets/img/project_covers/veterinar.png';
import Business from '../assets/img/project_covers/business.png';

const useProtfolioService = () => {

    const {loading, getrequest, postrequest, error, clearError} = useHttp();

    const _apiBase = 'https://api.profilematchagency.site/forms/';

    // if (checkboxes[0]) techsArr.push('HTML');
    // if (checkboxes[1]) techsArr.push('CSS');
    // if (checkboxes[2]) techsArr.push('JavaScript');
    // if (checkboxes[3]) techsArr.push('React');
    // if (checkboxes[4]) techsArr.push('C#');
    // if (checkboxes[5]) techsArr.push('ASP.NET Core');
    // if (checkboxes[6]) techsArr.push('SQL');
	const getProjects = async () => {
        return [
            {
                name: '_space-shooter',
                image: {Space},
                shortDescription: 'Draft script for game engine',
                fullDescription: '\tThis is small script in JavaScript for games "SpaceShooter" like.\nAllows to modify sprites, variables like "speed","acceleration",etc...\nThis script is also used for game on "_hello" page on this website. (It is not displayed on mobile devices)',
                gitLink: 'https://github.com/Pariete/SpaceShooter',
                projectLink: null,
                techs: ['JavaScript']
            },
            {
                name: '_profile-match',
                image: {Profile},
                shortDescription: 'Solution for dating service',
                fullDescription: '\tThis is one of biggest projects of mine\nIt was designed and builded for a small startup company and it allows users to answer questionnaires and then find matching people\n\n This solution consist of three projects:\n1) React app for front-end\n2) ASP.NET API application for back-end\n3) WPF desktop application for editing questionnaires\n\nShortly about how it works:\nUser opens web-app from telegram and answers questions. Back-end processing users answers, finds matching users and sends message to user via telegram bot\n\nProject was launched on Linux VPS with Docker',
                gitLink: null,
                projectLink: 'https://t.me/profilematch_bot',
                techs: ['React','C#','ASP.NET Core','SQL','TailwindCSS','EntityFramework','Docker']
            },
            {
                name: '_sea-battle',
                image: {SeaBattle},
                shortDescription: 'Console SeaBattle game',
                fullDescription: '\tConsole SeaBattle client-server application written on C# and ASP.NET.',
                gitLink: 'https://github.com/Pariete/Console-SeaBattle',
                projectLink: null,
                techs: ['C#','ASP.NET Core']
            },
            {
                name: '_racing-game',
                image: {Racing},
                shortDescription: 'Console racing game',
                fullDescription: '\tConsole Racing Game is console application written in C#.\nLooks like racing on old "BrickGame" gaming console',
                gitLink: 'https://github.com/Pariete/Racing-game',
                projectLink: null,
                techs: ['C#']
            },
            {
                name: '_bank_landing',
                image: {Banking},
                shortDescription: 'Landing page for banking service',
                fullDescription: '\tThis is a React application made for educational purposes only. You can check it out by link below.',
                gitLink: null,
                projectLink: 'https://rinerte.ru/Banking/',
                techs: ['React','TailwindCSS']
            },
            {
                name: '_veterinar',
                image: {Veterinar},
                shortDescription: 'Landing page for veterinarian service',
                fullDescription: '\tThis is a pure HTML+CSS page template made for educational purposes only. You can check it out by link below.',
                gitLink: null,
                projectLink: 'https://rinerte.ru/Veterinar/',
                techs: ['CSS','HTML']
            },
            {
                name: '_business',
                image: {Business},
                shortDescription: 'Landing page for some business',
                fullDescription: '\tThis is a pure HTML+CSS page template made for educational purposes only. You can check it out by link below.',
                gitLink: null,
                projectLink: 'https://rinerte.ru/Business/',
                techs: ['CSS','HTML']
            }
        ]
    }
    const getAbout = async () =>{
        return [
            {
                name: 'personal-info',
                folders: [
                    {
                        name: 'bio',
                        filter: 'filterRed',
                        minimized: true,
                        articles: [
                            {
                                name: 'personal-info',
                                content: 'Hi!\nMy name is Pavel\n\nI`m developer with a dream to change the world\n\nUse navigation menu to find more information about me.\nThen feel free to contact me using form on "_contact-me" page'
                            },
                            {
                                name: 'autobiography',
                                content: 'some information about me:\n\nI was born in Ukraine in 1995\n2014 - I moved to Russia...\n\n\nI`m working as a freelancer, and looking for full-time job.\nI`m single, young, have no kids and I`m able to move to any city or country where I will find a good position.\n\n'
                            }
                        ]
                    },
                    {
                        name: 'education',
                        filter: 'filterBlue',
                        minimized: true,
                        articles: [
                            {
                                name: 'institutions',
                                content: '2002 - 2013 \t School\n2002 - 2013 \t Donbass State Technical Institute\n2014 - 2017 \t Blagoveshchensk Polytechnic College\n2017 - 2021 \t  Amur State University'
                            },
                            {
                                name: 'other',
                                content: '2015 - additional school course on computer science\n2022 - Udemy course on WEB-design\n2022 - Udemy course on JavaScript and React\n2010 - Now -  Google, StackOverflow'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'professional-info',
                folders: [
                    {
                        name: 'programs',
                        filter: 'filterRed',
                        minimized: true,
                        articles: [
                            {
                                name: 'front-end',
                                content: 'For developing front-end I use:\nVS Code\nReact\nVite\nTailwindCSS\n\n'
                            },
                            {
                                name: 'back-end',
                                content: '  For Back-end I use:\n\nVisual Studio\nMSSQL\nEntityFramework\nASP.NET Core'
                            }
                        ]
                    },
                    {
                        name: 'skills',
                        filter: 'filterGreen',
                        minimized: true,
                        articles: [
                            {
                                name: 'soft-skills',
                                content: '/**\n* time management\n* patience\n* creative vision\n* curiosity\n*/'
                            },
                            {
                                name: 'hard-skills',
                                content: 'HTML\nCSS\nJavaScript\nReact\nTailwindCSS\nC#\nASP.NET Core\nSQL\nGit'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'hobbies',
                folders: [
                    {
                        name: 'contemporary-art',
                        filter: 'filterRed',
                        minimized: true,
                        articles: [
                            {
                                name: 'music',
                                content: 'My music preferences are not constant\nBut with exceptions: My acquaintance with music began with rammstein. And Rammstein is constant.'
                            },
                            {
                                name: 'movies',
                                content: 'Actually, I prefer anime.\nAnd "Fight Club"'
                            },
                            {
                                name: 'games',
                                content: 'Hitman\nWarCraft\n'
                            },
                            {
                                name: 'books',
                                content: 'I`ve read almost everithyng of Chuck Palahniuk`s\n I also enjoy reading popular science and fantasy'
                            }
                        ]
                    },
                    {
                        name: 'social-activities',
                        filter: 'filterGreen',
                        minimized: true,
                        articles: [
                            {
                                name: 'stand-up',
                                content: 'I`m really into going to bar from time to time.\nBut not for a beer!\n...OK, not only for a beer\n\nI enjoy telling my jokes to complete strangers.\n\n'
                            }
                        ]
                    },
                    {
                        name: 'other',
                        filter: 'filterBlue',
                        minimized: true,
                        articles: [
                            {
                                name: 'game-developer',
                                content: 'From time to time I launch UnrealEngine and do something nobody ever play but me'
                            },
                            {
                                name: 'musician',
                                content: 'When I was a little boy\nI went to music school\n took classes on violin\nBut now I play only FL Studio 20'
                            }
                        ]
                    }
                ]
            },
        ]
    }
	

    return {
		loading,
		error,
		clearError,
        getAbout,
        getProjects
    }
}

export default useProtfolioService;