<?php
    $id = rand(100,200);
    $result = array(
        "status" => array(
            "code"=>0,
            "msg"=>"success"
        ),
        "data"=>array(
            "chapterId"=>$id
        )
    );
    echo json_encode($result);
?>