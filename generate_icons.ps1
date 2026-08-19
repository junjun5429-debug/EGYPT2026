[void][System.Reflection.Assembly]::LoadWithPartialName("System.Drawing")
function Create-Icon ($srcPath, $destPath, $S) {
    $srcImg = [System.Drawing.Image]::FromFile($srcPath)
    $srcW = $srcImg.Width
    $srcH = $srcImg.Height
    $cropSize = [Math]::Min($srcW, $srcH)
    $cropX = [Math]::Floor(($srcW - $cropSize) / 2)
    $cropY = [Math]::Floor(($srcH - $cropSize) / 2)

    $bmp = [System.Drawing.Bitmap]::new($S, $S, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    $radius = $S * 0.18
    $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $diameter = $radius * 2
    $rect = [System.Drawing.RectangleF]::new(0, 0, $S, $S)
    $arc = [System.Drawing.RectangleF]::new($rect.X, $rect.Y, $diameter, $diameter)

    $path.AddArc($arc, 180, 90)
    $arc.X = $rect.Right - $diameter
    $path.AddArc($arc, 270, 90)
    $arc.Y = $rect.Bottom - $diameter
    $path.AddArc($arc, 0, 90)
    $arc.X = $rect.X
    $path.AddArc($arc, 90, 90)
    $path.CloseFigure()

    $g.SetClip($path)
    $srcRect = [System.Drawing.RectangleF]::new($cropX, $cropY, $cropSize, $cropSize)
    $destRect = [System.Drawing.RectangleF]::new(0, 0, $S, $S)
    $g.DrawImage($srcImg, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

    $g.ResetClip()

    # Draw border
    $borderWidth = $S * 0.03
    $tealColor = [System.Drawing.Color]::FromArgb(23, 107, 112) # #176b70
    $pen = [System.Drawing.Pen]::new($tealColor, $borderWidth)
    $contract = $borderWidth / 2
    $cRadius = $radius - $contract
    $cDiameter = $cRadius * 2
    $cRect = [System.Drawing.RectangleF]::new($contract, $contract, ($S - $borderWidth), ($S - $borderWidth))
    
    $borderPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
    if ($cDiameter -gt 0) {
        $cArc = [System.Drawing.RectangleF]::new($cRect.X, $cRect.Y, $cDiameter, $cDiameter)
        $borderPath.AddArc($cArc, 180, 90)
        $cArc.X = $cRect.Right - $cDiameter
        $borderPath.AddArc($cArc, 270, 90)
        $cArc.Y = $cRect.Bottom - $cDiameter
        $borderPath.AddArc($cArc, 0, 90)
        $cArc.X = $cRect.X
        $borderPath.AddArc($cArc, 90, 90)
    } else {
        $borderPath.AddRectangle($cRect)
    }
    $borderPath.CloseFigure()

    $g.DrawPath($pen, $borderPath)

    $pen.Dispose()
    $borderPath.Dispose()
    $path.Dispose()
    $g.Dispose()
    $srcImg.Dispose()

    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

$icons = @{
    "assets\icons\favicon-32.png" = 32
    "assets\icons\favicon-48.png" = 48
    "assets\icons\apple-touch-icon.png" = 180
    "assets\icons\icon-192.png" = 192
    "assets\icons\icon-512.png" = 512
}

foreach ($item in $icons.GetEnumerator()) {
    Create-Icon "assets\pyramids.jpg" $item.Key $item.Value
}
