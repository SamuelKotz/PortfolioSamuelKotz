<script lang="ts">
    import BlurFade from '$lib/components/magic/BlurFade.svelte';
    import CertificateCard from '$lib/components/portfolio/CertificateCard.svelte';
    import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
    import ResumeCard from '$lib/components/portfolio/ResumeCard.svelte';
    import * as Avatar from '$lib/components/ui/avatar';
    import Badge from '$lib/components/ui/badge/badge.svelte';
    import { DATA } from '$lib/data/resume';
    import { marked } from 'marked';
    import { _ } from 'svelte-i18n'; // Import i18n

    let BLUR_FADE_DELAY = 0.04;
</script>

<svelte:head>
    <title>{$_('name')}</title>
    <meta name="description" content={$_('description')} />
    <meta property="og:title" content={$_('name')} />
    <meta property="og:description" content={$_('description')} />
    <meta property="og:url" content={DATA.url} />
    <meta property="og:site_name" content={$_('name')} />
    <meta property="og:image" content={DATA.img} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta name="robots" content="index, follow" />
    <meta
        name="googlebot"
        content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
    />
    <meta name="twitter:title" content={$_('name')} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={DATA.img} />
    <meta name="twitter:description" content={$_('description')} />

    <meta name="google-site-verification" content="your-google-verification-code" />
    <meta name="yandex-verification" content="your-yandex-verification-code" />
</svelte:head>

<main class="flex min-h-[100dvh] flex-col space-y-10">
    <section id="hero">
        <div class="mx-auto w-full max-w-2xl space-y-8">
            <div class="flex justify-between gap-2">
                <div class="flex flex-1 flex-col space-y-1.5">
                    <BlurFade
                        delay={BLUR_FADE_DELAY}
                        class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                        yOffset={8}>
                        {$_('hero.greeting')}
                    </BlurFade>
                    <BlurFade class="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY}>
                        {$_('hero.tagline')}
                    </BlurFade>
                </div>
                <BlurFade delay={BLUR_FADE_DELAY}>
                    <Avatar.Root class="size-28 border">
                        <Avatar.Image alt={$_('name')} src={DATA.avatarUrl} />
                        <Avatar.Fallback>{$_('initials')}</Avatar.Fallback>
                    </Avatar.Root>
                </BlurFade>
            </div>
        </div>
    </section>

    <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY}>
            <h2 class="text-xl font-bold">{$_('about.title')}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 1.4}>
            <div
                class="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
            >
                {@html marked($_('summary'))}
            </div>
        </BlurFade>
    </section>

    <section id="work">
        <div class="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h2 class="text-xl font-bold">{$_('work_experience.title')}</h2>
            </BlurFade>
            {#each DATA.work as work, id}
                <BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
                    <ResumeCard
                        {...work}
                        company={$_(`work.${id}.company`)}
                        title={$_(`work.${id}.title`)}
                        description={$_(`work.${id}.description`)}
                        start={$_(`work.${id}.start`)}
                        end={$_(`work.${id}.end`)}
                    />
                </BlurFade>
            {/each}
        </div>
    </section>

    <section id="education">
        <div class="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h2 class="text-xl font-bold">{$_('education_section.title')}</h2>
            </BlurFade>
            {#each DATA.education as edu, id}
                <BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
                    <ResumeCard
                        href={edu.href}
                        logoUrl={edu.logoUrl}
                        company={$_(`education.${id}.school`)}
                        title={$_(`education.${id}.degree`)}
                        description={$_(`education.${id}.description`)}
                        start={edu.start}
                        end={edu.end}
                    />
                </BlurFade>
            {/each}
        </div>
    </section>

    <section id="certificates">
        <div class="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h2 class="text-xl font-bold">{$_('certificates_section.title')}</h2>
            </BlurFade>
            {#each DATA.certificates as cert, id}
                <BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
                    <CertificateCard
                        title={$_(`certificates.${id}.title`)}
                        issuer={$_(`certificates.${id}.issuer`)}
                    />
                </BlurFade>
            {/each}
        </div>
    </section>

    <section id="languages">
        <div class="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h2 class="text-xl font-bold">{$_('languages_section.title')}</h2>
            </BlurFade>
            {#each DATA.languages as lang, id}
                <BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
                    <div class="rounded-lg bg-card px-4 py-3 text-card-foreground">
                        <div class="flex flex-col">
                            <div class="flex justify-between">
                                <p class="font-semibold">{$_(`languages.${id}.language`)}</p>
                                <p class="text-sm text-muted-foreground">{$_(`languages.${id}.school`)}</p>
                            </div>
                            <p class="text-sm text-muted-foreground">{$_(`languages.${id}.description`)}</p>
                        </div>
                    </div>
                </BlurFade>
            {/each}
        </div>
    </section>

    <section id="skills">
        <div class="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h2 class="text-xl font-bold">{$_('skills.title')}</h2>
            </BlurFade>
            <div class="flex flex-wrap gap-1">
                {#each DATA.skills as skill, id}
                    <BlurFade delay={BLUR_FADE_DELAY * id + 0.002}>
                        <Badge>{skill}</Badge>
                    </BlurFade>
                {/each}
            </div>
        </div>
    </section>

    <section id="projects">
        <div class="w-full space-y-12 py-12">
            <BlurFade delay={BLUR_FADE_DELAY}>
                <div class="flex flex-col items-center justify-center space-y-4 text-center">
                    <div class="space-y-2">
                        <div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                            {$_('projects_section.title')}
                        </div>
                        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                            {$_('projects_section.subtitle')}
                        </h2>
                        <p
                            class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                        >
                            {@html $_('projects_section.description')}
                        </p>
                    </div>
                </div>
            </BlurFade>
            <div class="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
                {#each DATA.projects as project, id}
                    <BlurFade delay={BLUR_FADE_DELAY * 1.5 + id * 0.05}>
                        <ProjectCard
                            href={project.href}
                            title={$_(`projects.${id}.title`)}
                            description={$_(`projects.${id}.description`)}
                            dates={$_(`projects.${id}.dates`)}
                            tags={project.technologies}
                            image={project.image}
                            video={project.video}
                            links={project.links}
                        />
                    </BlurFade>
                {/each}
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div class="space-y-3">
                    <div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                        {$_('contact_section.title')}
                    </div>
                    <h2 class="text-3xl font-bold tracking-tight sm:text-5xl">{$_('contact_section.subtitle')}</h2>
                    <p
                        class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    >
                        {@html $_('contact_section.description')}
                    </p>
                </div>
            </BlurFade>
        </div>
    </section>
</main>