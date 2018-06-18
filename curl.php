<?php

// $ch = curl_init("http://bestkuzminki.ru/mail.php");
$ch = curl_init("https://best.lekua.in.ua/mail.php");
$fp = fopen("curl-mail.php", "w");

curl_setopt($ch, CURLOPT_FILE, $fp);
curl_setopt($ch, CURLOPT_HEADER, 1);

curl_exec($ch);
curl_close($ch);
fclose($fp);
?>