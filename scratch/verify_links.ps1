$files = Get-ChildItem -Path "e:\Magang\boostrap\alat-tulis-kantor\blog\*.html"
$results = foreach ($f in $files) {
    $raw = [System.IO.File]::ReadAllText($f.FullName)
    $contentBodyMatches = [regex]::Match($raw, '(?s)<div class="content-body">(.*?)</div>\s*<!-- ===== (SIDEBAR|BACA JUGA 2|SHARE)')
    $bodyText = if ($contentBodyMatches.Success) { $contentBodyMatches.Groups[1].Value } else { $raw }
    
    $linkMatches = [regex]::Matches($bodyText, 'href="([^"]+)"')
    $internalLinks = @()
    foreach ($m in $linkMatches) {
        $href = $m.Groups[1].Value
        if ($href -match '\.html' -and $href -notmatch 'index\.html' -and $href -notmatch 'tentang-kami' -and $href -notmatch 'kontak' -and $href -notmatch 'produk\.html') {
            $internalLinks += $href
        }
    }
    
    [PSCustomObject]@{
        Filename = $f.Name
        InContentBlogLinks = $internalLinks.Count
    }
}
$results | Format-Table -AutoSize
