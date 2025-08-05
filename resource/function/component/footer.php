<?php
function footer()
{
    global $socialMedia, $skill;

    echo '
<footer class="w-full bg-gray-800 text-white px-6 py-8">
    <div class="aboutme mb-4">
        <h2 class="font-bold text-2xl text-blue-500 inline-block relative">
            <i class="fa fa-user-circle mr-2"></i>About Me
        </h2>
    </div>
    <div class="mb-4">
        <span class="summery text-white text-base">
            I"m a passionate Full-Stack Developer currently expanding my skills in both frontend and backend development. While I"m still in the learning phase, I have hands-on experience with technologies such as:
        </span>
        <div class="flex flex-wrap gap-2 mt-3">';
    foreach ($skill as $key => $value) {
        echo '<a href="' . htmlspecialchars($value['url']) . '" target="_blank" rel="noopener" class="flex items-center gap-2 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 skill" style="color:' . htmlspecialchars($value['color']) . ';">
                <i class="' . htmlspecialchars($value['icon']) . '"></i>
                <span class="text-white">' . htmlspecialchars($key) . '</span>
            </a>';
    }
    echo '
        </div>
    </div>
    <hr class="border-gray-700 my-6" />

<div class="flex justify-center w-full py-4">
        <div class="w-80 flex items-center gap-4">
            <a href="mailto:' . EMAIL . '" class="bg-blue-600 w-full hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 text-center flex items-center justify-center gap-2">
                <i class="fas fa-envelope"></i>
                Contact Us
            </a>
            <a href="' . $socialMedia['WhatsApp']['url'] . '" target="_blank" rel="noopener" class="bg-green-600 w-full hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200 text-center flex items-center justify-center gap-2">
                <i class="fab fa-whatsapp"></i>
                WhatsApp
            </a>
        </div>
    </div>
    <div class="icon flex w-full justify-center">';
    foreach ($socialMedia as $key => $value) {
        echo '
        <div class="block rounded-2xl m-2 iconbg p-2">
            <a href="' . htmlspecialchars($value['url']) . '" target="_blank" rel="noopener">
                <i class="fab ' . htmlspecialchars($value['icon']) . ' text-xl"></i>
            </a>
        </div>';
    }
    echo '</div>
    <hr class="border-gray-700 my-6" />
    <div class="text-center pb-4">
        <span class="text-sm text-gray-400">
            &copy; ' . date('Y') . ' All rights reserved. <a href="' . htmlspecialchars($socialMedia['Github']['url']) . '" target="_blank" rel="noopener">
                <i class="' . htmlspecialchars($socialMedia['Github']['icon']) . '"></i> N3MR1D
            </a>
        </span>
    </div>
</footer>
';
}
