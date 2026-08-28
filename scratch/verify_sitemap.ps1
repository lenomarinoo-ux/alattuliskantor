[xml]$xml = Get-Content 'e:\Magang\boostrap\alat-tulis-kantor\sitemap.xml'
Write-Host "Sitemap XML Valid!"
Write-Host ("Total URLs: " + $xml.urlset.url.Count)
$xml.urlset.url | Select-Object -Last 5 | Format-Table -AutoSize
