<?php

echo "hello";

if(isset($_POST["submit"])) {
    if($_POST['instatag'] != "")
    {
        //$entry = $_POST['instatag'];
        $entry = "whales";
        $output  = shell_exec ("sh /Users/Srivatsa/desktop/pix/pix project/UI/test.sh $entry");
        echo $output;
    }
}

$entry = "whales";
$output  = shell_exec('sh /Users/Srivatsa/desktop/test.sh $entry');

?>
