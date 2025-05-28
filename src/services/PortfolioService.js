
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
                                content: 'hi!\nmy name is Pavel\n\nI`m software engeneer\n\nuse navigation menu to find more information about me.'
                            },
                            {
                                name: 'autobiography',
                                content: '1995 - born \n2013 - graduated from school\n2014 - moved to Russia\n2017 - graduated from Blagoveshchensk Polytechnic College\n2023 - working in the IT department at a hospital'
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
                                content: '2002 - 2013 \t School\n2002 - 2013 \t Donbass State Technical Institute\n2014 - 2017 \t Blagoveshchensk Polytechnic College\n2017 - 2021 \t  Amur State University\n2023 - 2027 Synergy university'
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
                                content: 'VS Code\nGoogle Chrome\nPhotoshop\nFigma\n'
                            },
                            {
                                name: 'back-end',
                                content: 'VS Code\nVisual Studio Community 2022\nMicrosoft SQL Server Management Studio\npgAdmin 4\nGit\nDocker\nJenkins\nPostman\n'
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
                                content: 'Attention to Detail:\n-Eliminated 95% of null-reference exceptions in C# APIs by implementing strict input validation.\n\nProactive Communication: \n- Documented 15+ Go microservices with Swagger/OpenAPI, accelerating third-party partner integrations.'
                            },
                            {
                                name: 'hard-skills',
                                content: 'Backend Development & Architecture:\n\tLanguages: C#, Go, SQL\n\tFrameworks: ASP.NET Core\n\tAPIs: RESTful services, Microservices\n\tDevOps: CI/CD Pipelines (Jenkins), Containerization (Docker), Git Version Control\n\nFull-Stack & Frontend Proficiency:\n\tFrontend: JavaScript, React, Vite, HTML/CSS\n\tStyling: CSS,TailwindCSS\n\tTools: VS Code, Visual Studio Community 2022\n\nDatabase & Tooling Expertise:\n\tDatabases: Microsoft SQL Server, PostgreSQL\n\tManagement Tools: SSMS, pgAdmin 4\n\tTesting & Debugging: Postman, xUnit, Moq'
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
                                name: 'movies',
                                content: 'I like sci-fi and fantasy movies and TV shows\nMy favorite anime is One Piece'
                            },
                            {
                                name: 'games',
                                content: 'Hitman\nWarCraft\nDark Souls\nElden Ring\nClair Obscur: Expedition 33'
                            },
                            {
                                name: 'books',
                                content: 'Chuck Palahniuk and Vladimir Sorokin are GOAT'
                            }
                        ]
                    },
                    {
                        name: 'social-activities',
                        filter: 'filterGreen',
                        minimized: true,
                        articles: [
                            {
                                name: 'none',
                                content: 'currently I only talk with my cat'
                            }
                        ]
                    },
                    {
                        name: 'other',
                        filter: 'filterBlue',
                        minimized: true,
                        articles: [
                            {
                                name: 'musician',
                                content: 'I play the violin'
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