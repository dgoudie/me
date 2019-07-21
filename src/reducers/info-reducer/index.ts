const initialState: { info: Info } = {
    info: {
        name: `Daniel Goudie`,
        title: `Full-Stack Software Developer`,
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
                company: `Union Pacific Railroad`,
                jobTitle: `Full-Stack Developer, Systems Engineering`,
                startMonth: `May`,
                startYear: 2018,
                endMonth: `Present`
            },
            {
                company: `Union Pacific Railroad`,
                jobTitle: `Intern - Integration Test Lab`,
                startMonth: `March`,
                startYear: 2017,
                endMonth: `May`,
                endYear: 2018
            },
            {
                company: `Union Pacific Railroad`,
                jobTitle: `Intern - Network Equipment Build Center`,
                startMonth: `Feb`,
                startYear: 2016,
                endMonth: `March`,
                endYear: 2017
            },
            {
                company: `Best Buy`,
                jobTitle: `Sales Associate - Computing`,
                startMonth: `Feb`,
                startYear: 2015,
                endMonth: `Feb`,
                endYear: 2016
            },
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
    education: EducationItem[];
    workExperience: WorkExperienceItem[];
}

export interface EducationItem {
    icon: string;
    title: string;
    secondaryInfo: string[];
}

export interface WorkExperienceItem {
    company: string;
    jobTitle: string;
    startMonth: string;
    startYear: number;
    endMonth: string;
    endYear?: number;
}
