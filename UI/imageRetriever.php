<?php
$files = glob("assets/img/*.*");

for ($i=0; $i<count($files); $i++) {
    $image = $files[$i];
    print $image ."<br />";
    echo '<img src="'.$image .'" alt="Random image" />'."<br /><br />";
}

?>
