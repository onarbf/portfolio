export interface Project{
    websiteTitle: string
    position: string
    description: React.JSX
    technologies: string[]
    websiteUrl: string
    id: number
}

export interface Job{
    company: string
    position: string
    description: React.JSX
    year: string
    technologies: string[]
}
