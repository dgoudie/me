const initialState: { info: Info } = {
    info: {
        name: `Daniel Goudie`,
        title: `Full-Stack Software Developer`,
        about: [
            `Hi! I'm a full-stack developer with both front-end and back-end 
            experience in a microservice dev-ops -based environment. I have successfully
            helped build and roll out multiple enterprise-wide collaboration and continuous
            integration systems. `,
            `I thrive in environments using bleeding-edge technologies,
            and always have a number of project of my own in progress at home. I enjoy discussing
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
        ]
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
    about: string[];
    education: EducationItem[];
    workExperience: WorkExperienceItem[];
    interests: string[];
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
