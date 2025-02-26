import { z } from '@nuxt/content'
export const schemaResume = z.object({
    basics: z.object({
        name: z.string(),
        headline: z.string(),
        role: z.string(),
        email: z.string(),
        phone: z.string(),
        location: z.string(),
        url: z.object({ label: z.string(), href: z.string() }),
        customFields: z.array(z.unknown()),
        picture: z.object({
            url: z.string(),
            size: z.number(),
            aspectRatio: z.number(),
            borderRadius: z.number(),
            effects: z.object({
                hidden: z.boolean(),
                border: z.boolean(),
                grayscale: z.boolean()
            })
        })
    }),
    sections: z.object({
        summary: z.object({
            name: z.string(),
            columns: z.number(),
            separateLinks: z.boolean(),
            visible: z.boolean(),
            id: z.string(),
            content: z.string()
        }),
        awards: z.object({
            name: z.string(),
            columns: z.number(),
            separateLinks: z.boolean(),
            visible: z.boolean(),
            id: z.string(),
            items: z.array(z.unknown())
        }),
        certifications: z.object({
            name: z.string(),
            columns: z.number(),
            separateLinks: z.boolean(),
            visible: z.boolean(),
            id: z.string(),
            items: z.array(z.unknown())
        }),
        education: z.object({
            name: z.string(),
            columns: z.number(),
            separateLinks: z.boolean(),
            visible: z.boolean(),
            id: z.string(),
            items: z.array(
                z.object({
                    id: z.string(),
                    visible: z.boolean(),
                    institution: z.string(),
                    studyType: z.string(),
                    area: z.string(),
                    score: z.string(),
                    date: z.string(),
                    summary: z.string(),
                    url: z.object({ label: z.string(), href: z.string() })
                })
            )
        }),
        experience: z.object({
            name: z.string(),
            columns: z.number(),
            separateLinks: z.boolean(),
            visible: z.boolean(),
            id: z.string(),
            items: z.array(
                z.object({
                    id: z.string(),
                    visible: z.boolean(),
                    company: z.string(),
                    position: z.string(),
                    location: z.string(),
                    date: z.string(),
                    summary: z.string(),
                    url: z.object({ label: z.string(), href: z.string() })
                })
            )
        }),
        volunteer: z.object({
            name: z.string(),
            columns: z.number(),
            separateLinks: z.boolean(),
            visible: z.boolean(),
            id: z.string(),
            items: z.array(z.unknown())
        }),
        interests: z.object({
            name: z.string(),
            columns: z.number(),
            separateLinks: z.boolean(),
            visible: z.boolean(),
            id: z.string(),
            items: z.array(z.unknown())
        }),
        languages: z.object({
            name: z.string(),
            columns: z.number(),
            separateLinks: z.boolean(),
            visible: z.boolean(),
            id: z.string(),
            items: z.array(
                z.object({
                    id: z.string(),
                    visible: z.boolean(),
                    name: z.string(),
                    description: z.string(),
                    level: z.number()
                })
            )
        }),
        profiles: z.object({
            name: z.string(),
            columns: z.number(),
            separateLinks: z.boolean(),
            visible: z.boolean(),
            id: z.string(),
            items: z.array(
                z.object({
                    id: z.string(),
                    visible: z.boolean(),
                    network: z.string(),
                    username: z.string(),
                    icon: z.string(),
                    url: z.object({ label: z.string(), href: z.string() })
                })
            )
        }),
        projects: z.object({
            name: z.string(),
            columns: z.number(),
            separateLinks: z.boolean(),
            visible: z.boolean(),
            id: z.string(),
            items: z.array(
                z.union([
                    z.object({
                        id: z.string(),
                        visible: z.boolean(),
                        name: z.string(),
                        description: z.string(),
                        date: z.string(),
                        summary: z.string(),
                        keywords: z.array(z.string()),
                        url: z.object({ label: z.string(), href: z.string() })
                    }),
                    z.object({
                        id: z.string(),
                        visible: z.boolean(),
                        name: z.string(),
                        description: z.string(),
                        date: z.string(),
                        summary: z.string(),
                        keywords: z.array(z.unknown()),
                        url: z.object({ label: z.string(), href: z.string() })
                    })
                ])
            )
        }),
        publications: z.object({
            name: z.string(),
            columns: z.number(),
            separateLinks: z.boolean(),
            visible: z.boolean(),
            id: z.string(),
            items: z.array(z.unknown())
        }),
        references: z.object({
            name: z.string(),
            columns: z.number(),
            separateLinks: z.boolean(),
            visible: z.boolean(),
            id: z.string(),
            items: z.array(z.unknown())
        }),
        skills: z.object({
            name: z.string(),
            columns: z.number(),
            separateLinks: z.boolean(),
            visible: z.boolean(),
            id: z.string(),
            items: z.array(
                z.union([
                    z.object({
                        id: z.string(),
                        visible: z.boolean(),
                        name: z.string(),
                        description: z.string(),
                        level: z.number(),
                        keywords: z.array(z.string())
                    }),
                    z.object({
                        id: z.string(),
                        visible: z.boolean(),
                        name: z.string(),
                        description: z.string(),
                        level: z.number(),
                        keywords: z.array(z.unknown())
                    })
                ])
            )
        }),
        custom: z.object({})
    }),
    metadata: z.object({
        template: z.string(),
        layout: z.array(z.array(z.array(z.string()))),
        css: z.object({ value: z.string(), visible: z.boolean() }),
        page: z.object({
            margin: z.number(),
            format: z.string(),
            options: z.object({ breakLine: z.boolean(), pageNumbers: z.boolean() })
        }),
        theme: z.object({
            background: z.string(),
            text: z.string(),
            primary: z.string()
        }),
        typography: z.object({
            font: z.object({
                family: z.string(),
                subset: z.string(),
                variants: z.array(z.string()),
                size: z.number()
            }),
            lineHeight: z.number(),
            hideIcons: z.boolean(),
            underlineLinks: z.boolean()
        }),
        notes: z.string()
    })
})
