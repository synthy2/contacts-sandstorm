<template lang="html">

                <ui-toolbar title="Inbox">
                    <div slot="actions">
                        <ui-icon-button
                            color="black"
                            icon="refresh"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="black"
                            icon="search"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="black"
                            has-dropdown
                            icon="more_vert"
                            ref="dropdownButton1"
                            size="large"
                            type="secondary"
                        >
                            <ui-menu
                                contain-focus
                                has-icons
                                slot="dropdown"
                                :options="menuOptions"
                                @close="$refs.dropdownButton1.closeDropdown()"
                            ></ui-menu>
                        </ui-icon-button>
                    </div>
                </ui-toolbar>

</template>

<script>

const menuOptions = [
    {
        label: 'Settings'
    },
    {
        label: 'About'
    },
    {
        label: 'Help'
    }
];
export default {
    data() {
        return {
            menuOptions
        };
    },
    components: {

    }
};
</script>

<style >

</style>
