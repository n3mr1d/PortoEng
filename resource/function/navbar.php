<?php
function navbar()
{
    $menu = [
        [
            "Name" => "Home",
            "Icon" => "fa fa-home",
            "Link" => "/"
        ],
        [
            "Name" => "About",
            "Icon" => "fa fa-info-circle",
            "Link" => "/about"
        ],
        [
            "Name" => "Contact",
            "Icon" => "fa fa-envelope",
            "Link" => "/contact"
        ]
    ];

    echo '<nav><ul>';
    foreach ($menu as $item) {
        echo '<li>';
        echo '<a href="' . htmlspecialchars($item["Link"]) . '">';
        echo '<i class="' . htmlspecialchars($item["Icon"]) . '"></i> ';
        echo htmlspecialchars($item["Name"]);
        echo '</a>';
        echo '</li>';
    }
    echo '</ul></nav>';
}