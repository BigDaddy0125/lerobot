const fs = require('fs/promises')
const path = require('path')
const mammoth = require('mammoth')
const { PDFParse } = require('pdf-parse')

const baseDir = path.resolve(__dirname, '..')
const outDir = path.join(baseDir, '_extracted')

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function extractDocx(filePath) {
  const { value } = await mammoth.extractRawText({ path: filePath })
  return value
}

async function extractPdf(filePath) {
  const buffer = await fs.readFile(filePath)
  const parser = new PDFParse({ data: buffer })
  const result = await parser.getText()
  await parser.destroy()
  return result.text
}

async function main() {
  await ensureDir(outDir)
  const entries = await fs.readdir(baseDir, { withFileTypes: true })
  const targets = entries.filter((entry) => entry.isFile() && /\.(docx|pdf)$/i.test(entry.name))

  for (const entry of targets) {
    const inputPath = path.join(baseDir, entry.name)
    const outputPath = path.join(outDir, `${path.parse(entry.name).name}.txt`)

    const text = /\.docx$/i.test(entry.name)
      ? await extractDocx(inputPath)
      : await extractPdf(inputPath)

    await fs.writeFile(outputPath, text, 'utf8')
    console.log(`extracted: ${entry.name}`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
