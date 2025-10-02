$webpackDistFolder = Join-Path -Path $PSScriptRoot -ChildPath "../webpack/_dist/";
$webpackExecutableFile = Join-Path -Path $webpackDistFolder -ChildPath "webpack.config.js";

$webpackTypescriptConfigFile = Join-Path -Path $PSScriptRoot -ChildPath "../webpack/tsconfig.json"

# Delete webpack dist folder if it exists.
if (Test-Path $webpackDistFolder) {
	Remove-Item $webpackDistFolder -Recurse -Force;
	Write-Host $webpackDistFolder + " has been deleted." -ForegroundColor Green;
}

if(Test-Path $webpackTypescriptConfigFile) {

	# Compile webpack configuration
	tsc --project $webpackTypescriptConfigFile;

	# Build application based on webpack configuration.
	npx webpack --config $webpackExecutableFile;
} else {
	Write-Host "Could not find webpack executable script." -ForegroundColor Red;
}