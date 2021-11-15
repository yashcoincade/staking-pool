import { Config } from "bili";

const config: Config = {
    input: "ethers/index.ts",
    output: {
        format: ["cjs", "esm"],
        minify: false,
        sourceMap: true
    }
};

export default config;
