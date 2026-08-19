[void][System.Reflection.Assembly]::LoadWithPartialName("System.Drawing")
function Create-Icon ($srcPath, $destPath, $S) {
    $srcImg = [System.Drawing.Image]::FromFile($srcPath)
    $srcW = $srcImg.Width
    $srcH = $srcImg.Height
    $cropSize = [Math]::Min($srcW, $srcH)
    $cropX = [Math]::Floor(($srcW - $cropSize) / 2)
    $cropY = [Math]::Floor(($srcH - $cropSize) / 2)

    $bmp = New-Object System.Drawing.Bitmap $S, $S, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    $radius = $S * 0.18
    # Define rounded rect path
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $diameter = $radius * 2
    $rect = New-Object System.Drawing.RectangleF 0, 0, $S, $S
    $arc = New-Object System.Drawing.RectangleF $rect.X, $rect.Y, $diameter, $diameter

    $path.AddArc($arc, 180, 90)
    $arc.X = $rect.Right - $diameter
    $path.AddArc($arc, 270, 90)
    $arc.Y = $rect.Bottom - $diameter
    $path.AddArc($arc, 0, 90)
    $arc.X = $rect.X
    $path.AddArc($arc, 90, 90)
    $path.CloseFigure()

    $g.SetClip($path)
    $srcRect = New-Object System.Drawing.RectangleF $cropX, $cropY, $cropSize, $cropSize
    $destRect = New-Object System.Drawing.RectangleF 0, 0, $S, $S
    $g.DrawImage($srcImg, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

    $g.ResetClip()

    # Draw border
    $borderWidth = $S * 0.03
    $tealColor = [System.Drawing.Color]::FromArgb(23, 107, 112) # #176b70
    $pen = New-Object System.Drawing.Pen $tealColor, $borderWidth
    # Inset is sometimes tricky, let's use standard center pen on slightly contracted path
    # If standard border is centered, then the path to draw has coordinates offset by borderWidth/2
    $contract = $borderWidth / 2
    $cRadius = $radius - $contract
    $cDiameter = $cRadius * 2
    $cRect = New-Object System.Drawing.RectangleF $contract, $contract, ($S - $borderWidth), ($S - $borderWidth)
    
    $borderPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    if ($cDiameter -gt 0) {
        $cArc = New-Object System.Drawing.RectangleF $cRect.X, $cRect.Y, $cDiameter, $cDiameter
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

Create-Icon "assets\pyramids.jpg" "assets\icons\test-32.png" 32
Create-Icon "assets\pyramids.jpg" "assets\icons\test-180.png" 180
