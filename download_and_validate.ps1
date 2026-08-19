Add-Type -AssemblyName System.Drawing
$targetPath = "C:\Users\junpeiy\OneDrive - Microsoft\Documents\VSCodeWorkspaces\Travel\Egypt\assets\pyramids.jpg"
$tempPath = "C:\Users\junpeiy\OneDrive - Microsoft\Documents\VSCodeWorkspaces\Travel\Egypt\assets\pyramids_temp.jpg"
$url = "https://upload.wikimedia.org/wikipedia/commons/9/91/The_Sphinx_and_Pyramid_of_Khafre.jpg"

$userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) PowershellImageValidator/1.0 (contact: admin@example.com)"

try {
    Write-Host "Downloading to temporary location..."
    Invoke-WebRequest -Uri $url -UserAgent $userAgent -OutFile $tempPath
    
    if (-not (Test-Path $tempPath)) {
        throw "Failed to download file."
    }

    $fileSize = (Get-Item $tempPath).Length
    Write-Host "Downloaded file size: $fileSize bytes"

    if ($fileSize -eq 0) {
        throw "Downloaded file is empty."
    }

    Write-Host "Validating image using System.Drawing..."
    $img = [System.Drawing.Image]::FromFile($tempPath)
    
    $isJpeg = $img.RawFormat.Guid -eq [System.Drawing.Imaging.ImageFormat]::Jpeg.Guid
    $width = $img.Width
    $height = $img.Height
    
    $img.Dispose()
    $img = $null

    Write-Host "Format is JPEG: $isJpeg"
    Write-Host "Dimensions: $width x $height"

    if (-not $isJpeg) {
        throw "Image format is not JPEG."
    }

    if ($width -ne 2900 -or $height -ne 2195) {
        throw "Image dimensions do not match the expected 2900x2195 (got ${width}x${height})."
    }

    Write-Host "Validation successful. Replacing target file..."
    Move-Item -Path $tempPath -Destination $targetPath -Force -Confirm:$false
    Write-Host "Replacement completed successfully."
}
catch {
    Write-Error "Error occurred: $_"
    if ($img -ne $null) {
        $img.Dispose()
    }
    if (Test-Path $tempPath) {
        Remove-Item -Path $tempPath -Force
        Write-Host "Temporary file cleaned up."
    }
}
