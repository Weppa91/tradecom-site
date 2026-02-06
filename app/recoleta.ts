// app/recoleta.ts
import localFont from "next/font/local";

export const recoleta = localFont({
    src: [
        { path: "./fonts/Recoleta-Regular.woff2", weight: "400", style: "normal" },
        { path: "./fonts/Recoleta-Semibold.woff2", weight: "600", style: "normal" },
        { path: "./fonts/Recoleta-Bold.woff2", weight: "700", style: "normal" },
    ],
    variable: "--font-recoleta",
    display: "swap",
});
