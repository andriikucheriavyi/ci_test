import { defineConfig } from "eslint/config";

export default defineConfig([
	// matches all files ending with .js
	{
		files: ["**/*.js"],
		rules: {
			semi: "error",
		},
	}
