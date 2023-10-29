<script setup lang="ts">
const countries = useCountries();
const continents = useContinents();
</script>

<template>
    <div class="flex gap-2">fdf
        <div>{{ continents }}</div>
        <div>{{ countries }}</div>
    </div>
</template>