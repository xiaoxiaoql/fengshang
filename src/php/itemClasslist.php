<?php
	$servername='localhost';
	$username='root';
	$password='';
	$dbname='fs';

	$conn=new mysqli($servername,$username,$password,$dbname);

	//检测是否连接成功
	if($conn->connect_error){
		die("连接失败：".$conn->connect_error);
	}

	//查询数据命令
	$sql='select * from goods';

	//解决文字乱码
	$result=$conn->query('set names utf8');
	//查询数据库获取数据
	$result=$conn->query($sql);


	//使用查询结果集
	$data=$result->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>
