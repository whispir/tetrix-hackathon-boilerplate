const BLUE = {
    char: ' ',
    color: 'transparent',
    backgroundColor: "blue",
}

const RED = {
    char: ' ',
    color: 'transparent',
    backgroundColor: "red",
}

const GREEN = {
    char: ' ',
    color: 'transparent',
    backgroundColor: "green",
}

const PURPLE = {
    char: ' ',
    color: 'transparent',
    backgroundColor: "#800080",
}

const PINK = {
    char: ' ',
    color: 'transparent',
    backgroundColor: "#FF9090",
}

const YELLOW = {
    char: ' ',
    color: 'transparent',
    backgroundColor: "#FFFF00",
}

const ORANGE = {
    char: ' ',
    color: 'transparent',
    backgroundColor: "#FFA500",
}

const SQUARE = [
    [
        BLUE, BLUE,
    ], [
        BLUE, BLUE,
    ]
];

const BEAM = [
    [
        RED, RED, RED, RED
    ]
]

const TEE = [
    [
        null, GREEN, null
    ],
    [
        GREEN, GREEN, GREEN
    ]
]

const LEFT_ELLE = [
    [
        PINK, PINK, PINK
    ],
    [
        null, null, PINK
    ]
]


const RIGHT_ELLE = [
    [
        PURPLE, PURPLE, PURPLE
    ],
    [
        PURPLE, null, null,
    ]
]

const LEFT_ZIG = [
    [
        null, YELLOW, YELLOW
    ],
    [
        YELLOW, YELLOW, null,
    ]
]

const RIGHT_ZIG = [
    [
        ORANGE, ORANGE, null
    ],
    [
        null, ORANGE, ORANGE,
    ]
]; 


export const ALL_SHAPES = [SQUARE, BEAM, TEE, LEFT_ELLE, RIGHT_ELLE, LEFT_ZIG, RIGHT_ZIG]; 