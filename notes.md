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
  - Maybe output to IDML

## Publishing tools

### Wraparound

Go-based tool for working with Fountain and 'Wrap' documents

https://wraparound.github.io/

### Fountain

Markdown-like language for screenplays

https://www.fountain.io/

### Earmark

Elixir-based Markdown parser & processor

Earkmark: https://github.com/pragdave/earmark
EarmarkParser: https://github.com/robertdober/earmark_parser 

### IDML

Adobe's XML-based open format for InDesign 

https://wwwimages.adobe.com/content/dam/acom/en/devnet/indesign/sdk/cs6/idml/idml-specification.pdf 
