<?php
  
$career_data = [
    
["name" => "Carpenter", "image" => "images/carpenter.jpeg"],
    
["name" => "Park Helper", "image" => "images/park-helper.jpeg"],
    
["name" => "Financial manager", "image" => "images/financial-manager.jpeg"],
    
["name" => "Mobile app developer", "image" => "images/mobile-app-developer.jpeg"],
    
["name" => "Copywriter", "image" => "images/copywriter.jpeg"],
  
];
  
header('Content-Type: application/json');
echo json_encode($career_data);
?>