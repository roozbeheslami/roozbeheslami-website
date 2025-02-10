<?php
    $name = $_POST['name'];
    $from = $_POST['email'];
    $message = $_POST['message'];
    $useragent = $_POST['useragent'];

    $to = 'contact@roozbeheslami.com';
    $subject = $name;
    $txt = $message." / ".$useragent;
    $headers = 'From: '.$from;

    mail($to,$subject,$txt,$headers);

    header("Location: /contact")

?>