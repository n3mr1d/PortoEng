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
    HTML;
    if (!empty($style)) {
        echo '<link rel="stylesheet" href="resource/style/' . htmlspecialchars($style) . 'css">';
    }
    echo '<link rel="stylesheet" href="resource/style/global.css">
        <link rel="stylesheet" href="resource/style/output.css">
        </head>
        <body class="bg-gray-800 ">
        <script src="https://kit.fontawesome.com/66a713093a.js" crossorigin="anonymous"></script>

    <script src="resource/script/global.js"></script>';
    if (!empty($script)) {
        echo '<script src="resource/script/' . htmlspecialchars($script) . '.js"></script>';
    }
}
function endtag()
{
    footer();
    echo '
    </body>
    </html>';
}