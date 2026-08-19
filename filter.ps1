$results = Import-Clixml -Path "search_results.xml"
# Filter candidates with Width >= 3000px
$candidates = $results | Where-Object { $_.Width -ge 3000 }

# Let's filter or sort them. 
# "スフィンクスとピラミッドが同時に写る横位置または4:3寄りの写真を優先して、横幅3000px以上の上位3候補を返してください。"
# Horizontal or close to 4:3 ratio:
# Aspect ratio = Width / Height. 
# Landscape is aspect ratio > 1. 4:3 is 1.33. Let's compute aspect ratio:
$candidatesWithRatio = $candidates | ForEach-Object {
    $ratio = $_.Width / $_.Height
    # We prefer landscape or 4:3 (close to 1.33). Specifically, aspect ratios like 1.2 to 2.0. If aspect ratio is too tall (< 1), it's portrait.
    # Let's score them:
    # A good score is aspect ratio around 1.33 to 1.77.
    # Let's inspect titles and descriptions to ensure Sphinx and Pyramid are in the image.
    $hasSphinx = $_.Title -like "*sphinx*" -or $_.ExtMetadata.ObjectName.value -like "*sphinx*" -or $_.ExtMetadata.ImageDescription.value -like "*sphinx*"
    $hasPyramid = $_.Title -like "*pyramid*" -or $_.ExtMetadata.ObjectName.value -like "*pyramid*" -or $_.ExtMetadata.ImageDescription.value -like "*pyramid*"
    
    [PSCustomObject]@{
        Title = $_.Title
        Width = $_.Width
        Height = $_.Height
        Ratio = $ratio
        Url = $_.Url
        DescriptionUrl = $_.DescriptionUrl
        License = $_.ExtMetadata.LicenseShortName.value
        Artist = $_.ExtMetadata.Artist.value
        Credit = $_.ExtMetadata.Credit.value
        HasBoth = ($hasSphinx -and $hasPyramid)
    }
}

# Output candidates
$candidatesWithRatio | Sort-Object -Property HasBoth, Ratio -Descending | Select-Object -First 10 | Format-Table Title, Width, Height, Ratio, HasBoth
