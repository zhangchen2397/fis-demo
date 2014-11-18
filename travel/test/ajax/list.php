<?php
    $id = rand(100,200);
    $result = array(
        "status" => array(
            "code"=>0,
            "msg"=>"success"
        ),
        "data"=>array(
            "cid"=>$id,
            "title"=>"获取列表成功"
        )
    );
    echo json_encode($result);
?>