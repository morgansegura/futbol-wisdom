import { richtextField } from "../elements/richtextField";
import { image } from "../settings/image";

export function hero(title?: string, description?: string) {
    return {
        type: "object",
        name: "hero",
        label: title || "Hero Settings",
        description: description || "Create a hero.",
        __template: "hero",
        fields: [
            {
                type: "string",
                name: "variant",
                label: "Hero Type",
                description: "Select hero type.",
                options: [
                    { label: "Full Width", value: "full" },
                    { label: "Hero with List", value: "list" },
                    { label: "Grid Hero", value: "grid" },
                    { label: "Fixed Hero", value: "fixed" },
                ],
                defaultValue: "full",
            },
            {
                type: "object",
                name: "slides",
                label: "Slides",
                list: true,
                fields: [
                    {
                        type: "string",
                        name: "supertitle",
                        label: "Super Title",
                    },
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                    },
                    richtextField(),
                    image("embed"),
                ],
            },
        ],
    };
}

/*
    [Blocks, Block, Component(s) ]
    - Blocks are wrappers
        - Blocks can have multiple Block items and/or Component Items
    - Block uses a container
    - Component uses a container
*/

/*
    Component Types (UI Library)
        - Inputs
            - Autocomplete
            - Button
            - Button Group
            - Checkbox
            - Floating action button
            - Radio button
            - Rating
            - Select
            - Slider
            - Switch
            - Text Field
            - Transfer list
            - Toggle button
        - Layout
            - Box
            - Container
            - Grid
            - Stack
            - Image list
            - Hidden
        - Data Display
            - Avatar
            - Badge
            - Chip
            - Divier
            - Icons
            - List
            - Table
            - Tooltip
            - Typography
            - RichText
        - Utils
            - Click away listener
            - CSS Baseline
            - Modal
            - No SSR
            - Popover
            - Popover
            - Popper
            - Portal
            - Textarea autosize
            - Transitions
            - useMediaQuery
        - Feedback
            - Alert
            - Backdrop
            - Dialogs
            - Progress
            - Skeleton
            - Snackbar
        - Surfaces
            - Accordion
            - App bar
            - App Card
            - Paper
        - Navigation
            - Bottom navigation
            - Breadcrumbs
            - Drawer
            - Link
            - Menu
            - Pagination
            - Speed dial
            - Stepper
            - Tabs
        - Data Grid (WIP)
    Pre-Designed Layout
        - Hero
        - Image Gallery
        - Card
            - Card Type 1
            - Card Type 2
            - Card Type 3
            - Card Type 4
*/
