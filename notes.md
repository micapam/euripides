# Notes

## Requirements

The main job this should do:

- Reads Fountain (or a variant)
- Output to a beautifully formatted document for printing

Thoughts:

- Use an AST for the structure of the document
  - Maybe adapt EarmarkParser to read Fountain
- What does the tricky bits of formatting?
  - Writing directly to PDF seems forbiddingly difficult
  - Maybe output to IDML?
  - Better: write to a ConTeXt file

## Investigations

### Looking at fountain-js

- The tokens contain snippets of HTML e.g.:
  - `<span class="underline">`
  - `<br />`
  - etc...
- The parser fails on character names with accented vowels e.g. `MÁNLED`.
  - (Was an easy fix to the regex)

### Deviations from normal Fountain

- When a metrical line is divided across lines from multiple characters!!!

## Formats and tech I've researched

### Fountain

Markdown-like language for screenplays

### ConTeXt

Typesetting system

https://wiki.contextgarden.net/Main_Page

### PanDoc

https://pandoc.org/

### pandoc-fountain

A custom pandoc reader for Fountain screenplay markup.

https://github.com/pandoc/pandoc-fountain

### Paru (ruby wrapper for pandoc)

https://github.com/htdebeer/paru

### CTAN topic: 'Drama script'

https://ctan.org/topic/drama-script

### CTAN topic: 'Verse'

https://ctan.org/topic/verse 

### LaTeX package 'thalie'

https://ctan.org/pkg/thalie

https://mirror.cse.unsw.edu.au/pub/CTAN/macros/latex/contrib/thalie/thalie.pdf 

### fountain-js

https://github.com/jonnygreenwald/fountain-js

### Earmark

Elixir-based Markdown parser & processor

Earkmark: https://github.com/pragdave/earmark
EarmarkParser: https://github.com/robertdober/earmark_parser 

### IDML

Adobe's XML-based open format for InDesign 

https://wwwimages.adobe.com/content/dam/acom/en/devnet/indesign/sdk/cs6/idml/idml-specification.pdf 

### Wraparound

Go-based tool for working with Fountain and 'Wrap' documents

https://wraparound.github.io/

https://www.fountain.io/

## Possible workflow

- Combine scenes into a single file
- Strip pipe characters (with optional following space)
- Parse via pandoc-fountain and output to Pandoc AST JSON

## Pandoc workflow

Command should be something like:

```bash
pandoc -f fountain-stage-reader.lua script.fountain -s -f thalie.rb -t latex -o script.tex
pdflatex script.tex
```

## Working notes

```bash
pandoc -f fountain-stage-reader-reader.lua sample.fountain --to latex-thalie-writer.lua > out/sample.tex
```
