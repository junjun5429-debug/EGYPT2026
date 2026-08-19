$ua = "SphinxSearchBot/1.0 (contact: info@example.com)"
$headers = @{"User-Agent" = $ua}

# Search terms
$terms = @("Great Sphinx Pyramid Khafre", "Sphinx Giza pyramid")

$results = @()

foreach ($term in $terms) {
    $uri = "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=$([Uri]::EscapeDataString($term))&gsrnamespace=6&gsrlimit=30&prop=imageinfo&iiprop=url|size|extmetadata&format=json"
    $response = Invoke-RestMethod -Uri $uri -Headers $headers
    if ($response.query -and $response.query.pages) {
        foreach ($key in $response.query.pages.psobject.properties.Name) {
            $page = $response.query.pages.$key
            if ($page.imageinfo) {
                $ii = $page.imageinfo[0]
                $results += [PSCustomObject]@{
                    PageId = $page.pageid
                    Title = $page.title
                    Width = $ii.width
                    Height = $ii.height
                    Url = $ii.url
                    DescriptionUrl = $ii.descriptionurl
                    ExtMetadata = $ii.extmetadata
                    SourceQuery = $term
                }
            }
        }
    }
}

Write-Host "Total found: $($results.Count)"

# Let's save the results to a JSON or CLIXML so we can inspect and work with it
$results | Export-Clixml -Path "search_results.xml"
