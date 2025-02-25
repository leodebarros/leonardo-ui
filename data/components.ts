import { SwitchType } from "@/components/leonardoUI/Switch";
import { AntDesign } from "@expo/vector-icons";
import { ImageSourcePropType } from "react-native";

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
        caption: "Dialog (Work in progress)",
        description: "A modal overlay that requires user interaction, often used for confirmations, alerts, or form inputs.",
    },
    {
        path: "/(index)/featuredScreen",
        caption: "Featured",
        description: "A visually prominent section used to highlight key content, such as promotional items or important updates.",
    },
    {
        path: "/(index)/filterScreen",
        caption: "Filter",
        description: "A pill-shaped control used to filter or refine visible content, often displayed horizontally for quick selection.",
    },
    {
        path: "/(index)/headerScreen",
        caption: "Header",
        description: "A structured title bar that provides context for a screen, often including navigation controls or descriptions.",
    },
    {
        path: "/(index)/inputScreen",
        caption: "Input (Coming soon)",
        description: "A text field for capturing user input, supporting various validations and styles.",
    },
    {
        path: "/(index)/listScreen",
        caption: "List",
        description: "A structured, collection of items, commonly used for menus, settings, or displaying dynamic data.",
    },
    {
        path: "/(index)/optionsScreen",
        caption: "Options",
        description: "A grouped set of selectable items or settings, often used in preference panels or configuration menus.",
    },
    {
        path: "/(index)/radioButtonScreen",
        caption: "Radio Button",
        description: "A circular selector for picking one option from multiple choices, commonly used in forms.",
    },
    {
        path: "/(index)/switchScreen",
        caption: "Switch",
        description: "A toggle-like component for switching between two states, e.g., on/off or enable/disable.",
    },
    {
        path: "/(index)/textScreen",
        caption: "Text",
        description: "A configurable component for displaying and styling text consistently throughout the app.",
    },
    {
        path: "/(index)/tabsScreen",
        caption: "Tabs (Coming soon)",
        description: "A navigational component that organizes content into multiple panels, each accessed by a tab.",
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

export const ACTION_VARIANTS: {
    title: string;
    description: string;
    iconName: keyof typeof AntDesign.glyphMap;
}[] = [
        {
            title: "Plus",
            description: "iconName: plus",
            iconName: "plus",
        },
        {
            title: "Ellipsis",
            description: "iconName: ellipsis1",
            iconName: "ellipsis1",
        },
        {
            title: "Add File",
            description: "iconName: addfile",
            iconName: "addfile",
        },
        {
            title: "Copy",
            description: "iconName: copy1",
            iconName: "copy1",
        },
        {
            title: "Find",
            description: "iconName: find",
            iconName: "find",
        },
        {
            title: "Cloud",
            description: "iconName: cloud",
            iconName: "cloud",
        },
        {
            title: "Calendar",
            description: "iconName: calendar",
            iconName: "calendar",
        },
        {
            title: "Delete",
            description: "iconName: delete",
            iconName: "delete",
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

export const CARD_VARIANTS = [
    {
        title: "Card with Cover and Footer",
        description: "A card with a cover image, a description, and a footer containing a button for action.",
        cover: require("@/assets/covers/aspect-ratio.png"),
        footer: {
            text: "Footer text",
            button: { caption: "Action Button", type: "primary" },
        },
    },
    {
        title: "Card with Action Button and Footer Text",
        description: "A content card featuring an action button along with additional text in the footer.",
        footer: {
            text: "Footer text",
            button: { caption: "Action Button", type: "primary" },
        },
    },
    {
        title: "Card with Action Button and Chip",
        description: "A structured card that includes an action button and a chip for contextual information.",
        footer: {
            text: "Footer Chip",
            button: { caption: "Action Button", type: "primary" },
            chipTone: "yellow",
        },
    },
    {
        title: "Card with Action Button",
        description: "A simple card layout with an action button to encourage user engagement.",
        footer: {
            button: { caption: "Action Button", type: "primary" },
        },
    },
    {
        title: "Card with just Title and Description",
        description: "A minimalistic card that focuses solely on structured content presentation.",
    },
];

type ListItem = {
    caption: string;
    description?: string;
    value?: string;
    avatar?: ImageSourcePropType;
    showNavArrow?: boolean;
    disabled?: boolean;
}

export const LIST_VARIANTS: {
    title: string;
    description: string;
    items: ListItem[]
}[] = [
        {
            title: "List with Values",
            description: "A structured list where each item includes a caption, description, and a right-aligned value.",
            items: [
                { caption: "Item Caption", description: "Item Description", value: "Value" },
                { caption: "Item Caption", description: "Item Description", value: "Value" },
                { caption: "Item Caption", description: "Item Description", value: "Value" },
            ],
        },
        {
            title: "List with Values and Avatars",
            description: "A list where each item includes a value and an avatar representing the entity.",
            items: [
                { caption: "Item Caption", description: "Item Description", value: "Value", avatar: require("@/assets/avatars/ts.png") },
                { caption: "Item Caption", description: "Item Description", value: "Value", avatar: require("@/assets/avatars/ts.png") },
                { caption: "Item Caption", description: "Item Description", value: "Value", avatar: require("@/assets/avatars/ts.png") },
            ],
        },
        {
            title: "List with Values and Nav Arrows",
            description: "A list where items have both a value and a right-facing navigation arrow, often used for settings or selections.",
            items: [
                { caption: "Item Caption", description: "Item Description", value: "Value", showNavArrow: true },
                { caption: "Item Caption", description: "Item Description", value: "Value", showNavArrow: true },
                { caption: "Item Caption", description: "Item Description", value: "Value", showNavArrow: true },
            ],
        },
        {
            title: "List with Nav Arrows",
            description: "A simple list where each item includes a caption, description, and a navigation arrow.",
            items: [
                { caption: "Item Caption", description: "Item Description", showNavArrow: true },
                { caption: "Item Caption", description: "Item Description", showNavArrow: true },
                { caption: "Item Caption", description: "Item Description", showNavArrow: true },
            ],
        },
    ];

export const TEXT_VARIANTS = [
    {
        size: 'xs',
    },
    {
        size: 'sm',
    },
    {
        size: 'base',
    },
    {
        size: 'md',
    },
    {
        size: 'lg',
    },
    {
        size: 'xl',
    }
]

type OptionItem = {
    isSelect?: boolean
    sectionTitle?: string
    label?: string
    iconName: keyof typeof AntDesign.glyphMap;
    description?: string
    avatar?: ImageSourcePropType
    actionIcon?: "chevron-forward-outline" | "chevron-expand"
    options?: { label: string; value: string }[]
}

export const OPTIONS_VARIANTS: {
    sectionTitle: string
    items: OptionItem[]
}[] = [
        {
            sectionTitle: "Options Select",
            items: [
                {
                    isSelect: true,
                    label: "Value 1",
                    iconName: "infocirlceo",
                    options: [
                        { label: "Option 1", value: "Value 1" },
                        { label: "Option 2", value: "Value 2" },
                        { label: "Option 3", value: "Value 3" },
                    ],
                },
            ],
        },
        {
            sectionTitle: "Options Items with Avatar and Action Icon",
            items: [
                {
                    iconName: "infocirlceo",
                    label: "Label",
                    description: "Description",
                    avatar: require("@/assets/avatars/ts.png"),
                    actionIcon: "chevron-forward-outline",
                },
                {
                    iconName: "infocirlceo",
                    label: "Label",
                    description: "Description",
                    avatar: require("@/assets/avatars/ts.png"),
                    actionIcon: "chevron-forward-outline",
                },
                {
                    iconName: "infocirlceo",
                    label: "Label",
                    description: "Description",
                    avatar: require("@/assets/avatars/ts.png"),
                    actionIcon: "chevron-forward-outline",
                },
            ],
        },
        {
            sectionTitle: "Options Items",
            items: [
                { iconName: "infocirlceo", label: "Label" },
                { iconName: "infocirlceo", label: "Label" },
                { iconName: "infocirlceo", label: "Label" },
            ],
        },
        {
            sectionTitle: "Options Items with Action Icon",
            items: [
                {
                    iconName: "infocirlceo",
                    label: "Label",
                    actionIcon: "chevron-forward-outline",
                },
                {
                    iconName: "infocirlceo",
                    label: "Label",
                    actionIcon: "chevron-forward-outline",
                },
                {
                    iconName: "infocirlceo",
                    label: "Label",
                    actionIcon: "chevron-forward-outline",
                },
            ],
        },
    ]

export type SwitchVariant = {
    key: SwitchType;
    title: string;
    description: string;
}

export const SWITCH_VARIANTS: SwitchVariant[] = [
    {
        key: "default",
        title: "Default Switch",
        description: "type: default",
    },
    {
        key: "primary",
        title: "Primary Switch",
        description: "type: primary",
    },
    {
        key: "ghost",
        title: "Ghost Switch",
        description: "type: ghost",
    },
];    
