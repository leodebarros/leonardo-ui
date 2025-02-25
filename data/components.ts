export const COMPONENTS = [
    {
        path: "/(index)/actionScreen",
        caption: "Action",
        description: "A compact, interactive button with an icon, used for quick actions such as sharing, saving, or liking.",
    },
    {
        path: "/(index)/buttonScreen",
        caption: "Button",
        description: "A tappable UI element that triggers an action or navigation when pressed, supporting multiple styles and states.",
    },
    {
        path: "/(index)/cardScreen",
        caption: "Card",
        description: "A versatile container that groups related content and actions, often used for displaying previews or summaries.",
    },
    {
        path: "/(index)/chipScreen",
        caption: "Chip",
        description: "A small, interactive UI element used to display information, filter content, or represent choices in a compact way.",
    },
    {
        path: "/(index)/dialogScreen",
        caption: "Dialog",
        description: "A modal overlay that requires user interaction, often used for confirmations, alerts, or form inputs.",
    },
    {
        path: "/(index)/featuredScreen",
        caption: "Featured",
        description: "A visually prominent section used to highlight key content, such as promotional items or important updates.",
    },
    {
        path: "/(index)/headerScreen",
        caption: "Header",
        description: "A structured title bar that provides context for a screen, often including navigation controls or descriptions.",
    },
    {
        path: "/(index)/inputScreen",
        caption: "Input",
        description: "",
    },
    {
        path: "/(index)/listScreen",
        caption: "List",
        description: "A structured, scrollable collection of items, commonly used for menus, settings, or displaying dynamic data.",
    },
    {
        path: "/(index)/radioButtonScreen",
        caption: "Radio Button",
        description: "",
    },
    {
        path: "/(index)/SwitchScreen",
        caption: "Switch",
        description: "",
    },
    {
        path: "/(index)/textScreen",
        caption: "Text",
        description: "",
    },
    {
        path: "/(index)/tabsScreen",
        caption: "Tabs",
        description: "",
    },
    {
        path: "/(index)/toastScreen",
        caption: "Toast",
        description: "A brief, non-intrusive notification that provides feedback about an action, such as success messages or errors.",
    },
];

export const BUTTON_VARIANTS = [
    {
        title: "Default button",
        description: "A standard button used for general actions with neutral styling.",
        type: "default",
    },
    {
        title: "Primary button",
        description: "A highly visible button for primary actions, using the brand's main color.",
        type: "primary",
    },
    {
        title: "Outline button",
        description: "A button with a transparent background and a border, often used for secondary actions.",
        type: "outline",
    },
    {
        title: "Ghost button",
        description: "A minimally styled button with no background, useful for subtle interactions.",
        type: "ghost",
    },
    {
        title: "Destructive button",
        description: "A button styled to indicate critical actions like deletion or warnings.",
        type: "destructive",
    },
];

export const ACTION_VARIANTS = [
    {
        title: "Plus",
        description: "A plus icon button, commonly used for adding new items or creating new content.",
        iconName: "plus",
    },
    {
        title: "Ellipsis",
        description: "An ellipsis icon button, typically used for opening menus or more options.",
        iconName: "ellipsis1",
    },
    {
        title: "Add File",
        description: "A file upload icon button, often used for file uploads or attachments.",
        iconName: "addfile",
    },
    {
        title: "Copy",
        description: "A copy icon button, commonly used to duplicate or copy content to clipboard.",
        iconName: "copy1",
    },
];

export const CHIP_VARIANTS = [
    {
        title: "Green",
        description: "Uses Tailwind's Green shades (bg-green-100, border-green-200, text-green-900).",
        caption: "Best price",
        tone: "green",
    },
    {
        title: "Red",
        description: "Uses Tailwind's Red shades (bg-red-100, border-red-200, text-red-900).",
        caption: "Sold out",
        tone: "red",
    },
    {
        title: "Yellow",
        description: "Uses Tailwind's Yellow shades (bg-yellow-100, border-yellow-200, text-yellow-900).",
        caption: "Boarding now",
        tone: "yellow",
    },
    {
        title: "Cyan",
        description: "Uses Tailwind's Cyan shades (bg-cyan-100, border-cyan-200, text-cyan-900).",
        caption: "Waiting for approval",
        tone: "cyan",
    },
    {
        title: "Purple",
        description: "Uses Tailwind's Purple shades (bg-purple-100, border-purple-200, text-purple-900).",
        caption: "In review",
        tone: "purple",
    },
    {
        title: "Neutral",
        description: "Uses Tailwind's Neutral shades (bg-neutral-100, border-neutral-200, text-neutral-900).",
        caption: "Pending",
        tone: "neutral",
    },
];
