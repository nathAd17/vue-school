
<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data">
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    label: 'Argentina',
    children: [
        {
            label: 'Argentina',
            children: [
                {
                    label: 'Argentina'
                },
                {
                    label: 'Croatia'
                }
            ]
        },
        {
            label: 'France',
            children: [
                {
                    label: 'France'
                },
                {
                    label: 'Morocco'
                }
            ]
        }
    ]
});
</script>
