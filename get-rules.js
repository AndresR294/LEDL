import rules from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs//data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/node_modules/markdownlint/lib/rules.js'
import { gitHubDocsMarkdownlint } from '../linting-rules/index.js'
import { baseConfig } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/style/base.js'
import { customConfig } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/style/github-docs.js'

export const customRules = gitHubDocsMarkdownlint.rules
export const allRules = [...rules, ...gitHubDocsMarkdownlint.rules]
export const allConfig = { ...baseConfig, ...customConfig }
