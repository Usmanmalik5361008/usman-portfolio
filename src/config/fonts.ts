import { Poppins, Bebas_Neue } from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: ["400"],
});
