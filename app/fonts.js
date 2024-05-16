import { Playfair_Display, Open_Sans, Inconsolata } from "next/font/google";

export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-heading',
})

export const openSans = Open_Sans({
    subsets: ['latin'],
    variable: '--font-body',
})

export const inconsolata = Inconsolata({
    subsets: ['latin'],
    variable: '--font-link',
})