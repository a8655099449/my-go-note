// @ts-ignore
import { React } from "https://deno.land/x/pagic@v1.4.0/mod.ts";

export default {
  plugins: ["sidebar", "prev_next", "gitalk", "ga"],
  theme: "docs",
  // nav: {},
  title: "阿匡的go语言学习基地",
  github: "https://github.com/xcatliu/typescript-tutorial",
  sidebar: {
    "/": [
      {
        link: "docs/start/README.md",
        children:[
          "docs/start/install.md",
        ]
      },
    ],
  },
};
