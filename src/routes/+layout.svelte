<script>
    import Navbar from '$lib/components/portfolio/Navbar.svelte';
    import '../app.css';
    import { ModeWatcher, setMode } from 'mode-watcher';
    import { locale, waitLocale } from 'svelte-i18n';
    import '$lib/i18n/index.ts'; // Import to initialize

    setMode('dark');

    // Wait for the initial locale to load
    // This is important to prevent a flash of untranslated content
    waitLocale();
</script>

<ModeWatcher />

{#if $locale}
    <div class="relative mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24">
        <slot></slot>
        <Navbar />
    </div>
{/if}