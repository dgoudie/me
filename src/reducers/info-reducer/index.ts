const initialState: { info: Info } = {
    info: {
        name: `Daniel Goudie`,
        title: `Full-Stack Software Developer`,
        education: [
            {
                title: `Bachelor's Degree in Cyber-Security`,
                secondaryInfo: `College of IS&T, University at Nebraska - Omaha`,
                tertiaryInfo: `3.3 GPA`,
            },
            {
                title: `High School Diploma`,
                secondaryInfo: `Elmwood-Murdock High School`,
                tertiaryInfo: `3.6 GPA; Class Rank: #4`,
            },
        ],
        workExperience: [
            {
                company: `Union Pacific Railroad`,
                jobTitle: `Full-Stack Developer, Systems Engineering`,
                startMonth: `May`,
                startYear: 2018,
            },
            {
                company: `Union Pacific Railroad`,
                jobTitle: `Intern - Integration Test Lab`,
                startMonth: `March`,
                startYear: 2017,
            },
            {
                company: `Union Pacific Railroad`,
                jobTitle: `Intern - Network Equipment Build Center`,
                startMonth: `Feb`,
                startYear: 2016,
            },
            {
                company: `Best Buy`,
                jobTitle: `Sales Associate - Computing`,
                startMonth: `Feb`,
                startYear: 2015,
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
    title: string;
    secondaryInfo: string;
    tertiaryInfo: string;
}

export interface WorkExperienceItem {
    company: string;
    jobTitle: string;
    startMonth: string;
    startYear: number;
}
