<?php
if($_POST['fp']=="true"){$fp ='Yes'; }else{$fp = 'No';}
$textback = $_POST['type'].' ticket of '.$_POST['name'].' (fastpass: '.$fp.');';
echo $textback;
?>