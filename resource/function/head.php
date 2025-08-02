<?php
function print_start(string $title, string $style = "", string $script = "")
{
    $app_name = APP_NAME;
    $title = strtoupper($title);
    echo <<<HTML
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>{$app_name} | $title</title>
            <link rel="stylesheet" href="resource/style/global.css">
        </head>
        <body>
    <script src="resource/script/global.js"></script>
    HTML;

}
function endtag()
{
    echo '
    </body>
    </html>';
}