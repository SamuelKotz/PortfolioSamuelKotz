<script lang="ts">
    export let title: string;
    export let issuer: string;
</script>

<div class="flex items-center justify-between rounded-lg bg-card px-4 py-2 text-card-foreground">
    <div class="flex flex-col">
        <p class="font-semibold">{title}</p>
        <p class="text-sm text-muted-foreground">{issuer}</p>
    </div>
</div>