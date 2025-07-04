$inputDir = "${env:PORTFOLIO}\asset_sources"
$outputDir = "${env:PORTFOLIO}\public\assets\svg"

$svgs = Get-ChildItem -Path "$inputdir" -Filter "*.svg"
Write-Output $svgs

npx @svgr/cli --out-dir "${outputDir}" --ext "jsx" --no-index $inputDir