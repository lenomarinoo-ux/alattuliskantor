$files = Get-ChildItem -Path "e:\Magang\boostrap\alat-tulis-kantor\blog\*.html"
$brokenLinks = @()

foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName)
    $matches = [regex]::Matches($content, 'href="([^"#?]+\.html)"')
    
    foreach ($m in $matches) {
        $link = $m.Groups[1].Value
        $dir = $f.DirectoryName
        
        # Resolve target path
        $targetPath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($dir, $link.Replace('/', '\')))
        
        if (-not (Test-Path $targetPath)) {
            $brokenLinks += [PSCustomObject]@{
                SourceFile = $f.Name
                LinkHref = $link
                ResolvedPath = $targetPath
            }
        }
    }
}

if ($brokenLinks.Count -eq 0) {
    Write-Output "ALL INTERNAL LINKS ARE VALID! No broken links found."
} else {
    $brokenLinks | Format-Table -AutoSize
}
