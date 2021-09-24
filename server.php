<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");

$res = [];

$body = json_decode(file_get_contents('php://input'), true);

$json = ( isset( $_GET[0] ) ) ? $_GET[0] : json_encode($body);
if( $json !== '[]' ) $body = json_decode($json,true);

$status = 200;
$res["success"] = true;
$res["data"]["message"] = 'ok';
$res["data"]["items"] = [
    [
        "name"=>"pop"
    ],
    [
        "name"=>"post"
    ]
];
$res["data"]["_post"] = $body;

header("HTTP/1.1 200 OK");
header('Content-Type: application/json; charset=utf-8');
echo json_encode($res,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES );
?>
