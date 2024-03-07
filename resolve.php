<?php
$ip = $_GET["ip"];

$hostname = gethostbyaddr($ip);

if ($hostname !== false) {
    echo "Hostname for IP " . $ip . " is: " . $hostname;
} else {
    echo "Failed to resolve hostname for IP " . $ip;
}
?>
