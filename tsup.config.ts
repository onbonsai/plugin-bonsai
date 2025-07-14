import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    outDir: "dist",
    tsconfig: './tsconfig.build.json', // Use build-specific tsconfig
    sourcemap: true,
    clean: true,
    format: ['esm'], // ESM output format
    dts: true,
    external: [
        "dotenv", // Externalize dotenv to prevent bundling
        "fs", // Externalize fs to use Node.js built-in module
        "path", // Externalize other built-ins if necessary
        "@reflink/reflink",
        "@node-llama-cpp",
        "https",
        "http",
        "agentkeepalive",
        "@elizaos/core",
        "zod"
    ],
});
