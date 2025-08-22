import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default [
  // ESM build (for import)
  {
    input: "dist/muthu_style_effect.js",
    output: {
      file: "dist/muthu_style_effect.esm.js",
      format: "esm"
    },
    plugins: [resolve(), commonjs()]
  },

  // UMD build (for <script>)
  {
    input: "dist/muthu_style_effect.js",
    output: {
      file: "dist/muthu_style_effect.umd.js",
      format: "umd",
      name: "MuthuUIEffects"
    },
    plugins: [resolve(), commonjs()]
  }
];
