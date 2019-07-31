const initialState: { info: Info } = {
    info: {
        name: `Daniel Goudie`,
        title: `Full-Stack Software Developer`,
        links: [
            {
                text: '402-618-5756',
                link: 'tel:4026185756',
                icon: 'fas fa-phone'
            },
            {
                text: 'emdgoudie@gmail.com',
                link: 'mailto:emdgoudie@gmail.com',
                icon: 'fas fa-envelope'
            },
            {
                text: 'Daniel Goudie',
                link: 'https://www.linkedin.com/in/daniel-goudie-817b93115/',
                icon: 'fab fa-linkedin'
            }
        ],
        about: [
            `Hi! I'm a full-stack developer with both front-end and back-end 
            experience in a microservice dev-ops -based environment. I have successfully
            helped build and roll out multiple enterprise-wide collaboration and continuous
            integration systems. `,
            `I thrive in environments using bleeding-edge technologies,
            and always have a number of projects of my own in progress at home. I enjoy discussing
            technology with colleagues and friends.`,
        ],
        education: [
            {
                icon: `uno.png`,
                title: `Bachelor's Degree in Cyber-Security`,
                secondaryInfo: [
                    `Minor in Computer Science`,
                    `College of IS&T, University at Nebraska - Omaha`,
                    `3.3 GPA`,
                ],
            },
        ],
        workExperience: [
            {
                icon: 'up.png',
                company: `Union Pacific Railroad`,
                jobTitle: `Full-Stack Developer, Systems Engineering`,
                startMonth: `May`,
                startYear: 2018,
                endMonth: `Present`
            },
            {
                icon: 'up.png',
                company: `Union Pacific Railroad`,
                jobTitle: `Intern - Integration Test Lab`,
                startMonth: `March`,
                startYear: 2017,
                endMonth: `May`,
                endYear: 2018
            },
            {
                icon: 'up.png',
                company: `Union Pacific Railroad`,
                jobTitle: `Intern - Network Equipment Build Center`,
                startMonth: `Feb`,
                startYear: 2016,
                endMonth: `March`,
                endYear: 2017
            },
            {
                icon: 'bb.png',
                company: `Best Buy`,
                jobTitle: `Sales Associate - Computing`,
                startMonth: `Feb`,
                startYear: 2015,
                endMonth: `Feb`,
                endYear: 2016
            },
        ],
        interests: [
            'Development (Front/Back End)',
            'Dev-Ops / CICD',
            'Virtualized / Containerized Environments',
            'UI / UX',
            'New / Emerging Technologies',
            'Microservices'
        ],
        topSkills: [
            {
                name: 'Angular / AngularJS',
                percentage: 85
            },
            {
                name: 'JavaScript / TypeScript / NodeJS',
                percentage: 80
            },
            {
                name: 'Java / Kotlin',
                percentage: 80
            },
            {
                name: 'Spring Boot / Web / AOP',
                percentage: 70
            }
        ],
        builtWith: [
            {
                icon: 'react.png',
                name: 'ReactJS'
            },
            {
                icon: 'ts.png',
                name: 'TypeScript'
            },
            {
                icon: 'sass.png',
                name: 'Sass'
            },
            {
                icon: 'npm.png',
                name: 'NPM'
            },
            {
                icon: 'graphql.png',
                name: 'GraphQL'
            },
            {
                icon: 'kotlin.png',
                name: 'Kotlin'
            },
            {
                icon: 'spring.png',
                name: 'Spring'
            },
            {
                icon: 'mongodb.png',
                name: 'MongoDB'
            },
            {
                icon: 'maven.png',
                name: 'Maven'
            },
            {
                icon: 'git.png',
                name: 'Git',
                link: 'https://github.com/dgoudie/me'
            },
            {
                icon: 'drone.png',
                name: 'Drone CI',
                link: 'https://drone.stan.systems/dgoudie/me'
            },
            {
                icon: 'nginx.png',
                name: 'Nginx'
            },
            {
                icon: 'letsencrypt.png',
                name: 'Let\'s Encrypt'
            },
            {
                icon: 'docker.png',
                name: 'Docker'
            },
            {
                icon: 'ubuntu.png',
                name: 'Ubuntu'
            }
        ],
    },
};

export default (state = initialState, action: { type: string }) => {
    switch (action.type) {
        default: return state;
    }
};

export interface Info {
    name: string;
    title: string;
    links: Link[];
    about: string[];
    education: EducationItem[];
    workExperience: WorkExperienceItem[];
    interests: string[];
    topSkills: TopSkill[];
    builtWith: BuiltWithItem[];
}

export interface Link {
    text: string;
    link: string;
    icon: string;
}

export interface EducationItem {
    icon: string;
    title: string;
    secondaryInfo: string[];
}

export interface WorkExperienceItem {
    icon: string;
    company: string;
    jobTitle: string;
    startMonth: string;
    startYear: number;
    endMonth: string;
    endYear?: number;
}

export interface TopSkill {
    name: string;
    percentage: number;
}

export interface BuiltWithItem {
    icon: string;
    name: string;
    link?: string;
}
