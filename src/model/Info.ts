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
  textForPrint: string;
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
