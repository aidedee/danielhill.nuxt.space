<template>
    <div>
        <ContentDoc>
            <template v-slot="{ doc }">
                <article>
                    <ContentRenderer :value="doc" />
                </article>
            </template>
            <template #not-found>
                <p>Page cannot be displayed. Please check your browser settings.</p>
            </template>
        </ContentDoc>
    </div>

</template>
