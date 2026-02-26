import pypandoc
import os
import sys

# Ensure pandoc is available or install it
try:
    pypandoc.get_pandoc_version()
except OSError:
    print("Pandoc not found. Attempting to download...")
    pypandoc.download_pandoc()

input_md = r"c:\Users\saras\Downloads\NightFule\nightfuel\docs\NightFuel-Project-Doc.md"
output_docx = r"c:\Users\saras\Downloads\NightFule\nightfuel\docs\NightFuel-Project-Doc.docx"

try:
    print(f"Converting {input_md} to {output_docx}...")
    pypandoc.convert_file(input_md, 'docx', outputfile=output_docx)
    print("Conversion successful.")
except Exception as e:
    print(f"Error during conversion: {e}")
    sys.exit(1)
